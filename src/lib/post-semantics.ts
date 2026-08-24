export const MOOD_META = {
    positive: {
        cardLabel: 'Win',
        articleLabel: 'A win',
        filterLabel: 'Wins',
        textClass: 'text-wintext',
        dotClass: 'bg-secondary',
        badgeClass: 'bg-success/12 text-wintext',
    },
    negative: {
        cardLabel: 'Fail',
        articleLabel: 'A regret',
        filterLabel: 'Fails',
        textClass: 'text-failtext',
        dotClass: 'bg-error',
        badgeClass: 'bg-error/12 text-failtext',
    },
    neutral: {
        cardLabel: 'Lesson',
        articleLabel: 'A lesson',
        filterLabel: 'Lessons',
        textClass: 'text-base-content/60',
        dotClass: 'bg-base-content/40',
        badgeClass: 'bg-base-200 text-base-content/60',
    },
} as const

export type Mood = keyof typeof MOOD_META

export const MOOD_FILTERS = [
    { value: 'positive', label: MOOD_META.positive.filterLabel },
    { value: 'neutral', label: MOOD_META.neutral.filterLabel },
    { value: 'negative', label: MOOD_META.negative.filterLabel },
] as const

export function getMoodMeta(mood?: string) {
    return mood && mood in MOOD_META ? MOOD_META[mood as Mood] : undefined
}

export const RECOMMENDATION_META = {
    yes: {
        label: 'Would do again',
        tintClass: 'bg-softteal text-wintext',
    },
    no: {
        label: 'Would skip',
        tintClass: 'bg-softcoral text-failtext',
    },
    maybe: {
        label: 'It depends',
        tintClass: 'bg-softmarigold text-accent-content',
    },
} as const

export type Recommendation = keyof typeof RECOMMENDATION_META

export function getRecommendationMeta(recommend?: string) {
    return recommend && recommend in RECOMMENDATION_META
        ? RECOMMENDATION_META[recommend as Recommendation]
        : undefined
}

export interface ReviewFields {
    verdict?: string
    recommend?: Recommendation
    rating?: number
    cost?: string
    pros?: readonly string[]
    cons?: readonly string[]
}

export function hasReviewData(data: ReviewFields): boolean {
    return Boolean(
        data.verdict?.trim() ||
        data.recommend ||
        data.rating != null ||
        data.cost?.trim() ||
        data.pros?.length ||
        data.cons?.length,
    )
}

export function isReviewPost(post: { data: ReviewFields }): boolean {
    return hasReviewData(post.data)
}

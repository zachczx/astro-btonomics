import { getCollection } from 'astro:content'

export async function GetPid() {
    const allPosts = await getCollection('blog')

    allPosts.sort((a, b) => a.data.pid - b.data.pid)
    const lastId = allPosts[allPosts.length - 1].data.pid
    console.log(lastId)
}

/**
 *
 * @param {object} posts - gotten from getCollection()
 * @param {array} data.tags - tags for each post, optional
 */
export async function GetUniqueTags(posts) {
    const tagsListDuplicates = []
    for (let i = 0; i < posts.length; i++) {
        posts[i].data.tags.forEach((tag) => {
            tagsListDuplicates.push(tag)
        })
    }
    const set = new Set(tagsListDuplicates)
    const tagsList = [...set]
    tagsList.sort()
    return tagsList
}

/**
 * I tried writing this for the blog post dates using getFullYear() etc, but this was subpar.
 * Problem: Sounds good in theory but if it counts as 1 month difference between 5 Dec and 30 Nov, even if only a few days passed.
 * Very tiresome to have to account for all ways of calculation, so I decided to revert to manually doing 365 days a year, 30 days a month
 */
export function CalculateDateAgo(postDate: Date) {
    const today = new Date()
    const yearsInBetween = today.getFullYear() - postDate.getFullYear()
    const monthsInBetween = today.getMonth() - postDate.getMonth()
    const daysInBetween = today.getDate() - postDate.getDate()
    let differenceString = ''
    console.log(yearsInBetween)
    console.log(monthsInBetween)
    console.log(daysInBetween)
    if (yearsInBetween === 0 && monthsInBetween === 0) {
        if (daysInBetween === 0) {
            differenceString = `Today`
        } else if (daysInBetween === 1) {
            differenceString = `1 day ago`
        } else {
            differenceString = `${daysInBetween} days ago`
        }
    } else if (yearsInBetween === 0 && monthsInBetween < 2 && monthsInBetween >= 1) {
        differenceString = `1 month ago`
    } else if (yearsInBetween === 0 && monthsInBetween >= 2) {
        differenceString = `${monthsInBetween} months ago`
    } else if (yearsInBetween >= 1 && yearsInBetween < 2) {
        differenceString = `1 year ago`
    } else if (yearsInBetween >= 2) {
        // Several years
        //Check number of months
        if (monthsInBetween >= 11) {
            differenceString = `${yearsInBetween + 1} years ago`
        } else {
            differenceString = `${yearsInBetween} years ago`
        }
    }

    return differenceString
}

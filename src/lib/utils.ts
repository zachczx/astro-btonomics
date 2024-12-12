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

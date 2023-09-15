const algoliasearch = require('algoliasearch')
const dotenv = require('dotenv')
const allPosts = require('./.contentlayer/generated/Post/_index.json')

const BASE_URL = 'https://danstroot.com'

// hash a string
const TinySimpleHash = (s) => {
  for (var i = 0, h = 9; i < s.length; )
    h = Math.imul(h ^ s.charCodeAt(i++), 9 ** 9)
  return h ^ (h >>> 9)
}

// format search index data
function transformPostsToSearchObjects(posts) {
  const promises = posts.map(async (post) => {
    const path = `${BASE_URL}/api/views/${post.slugAsParams}`
    const results = await fetch(path).then((res) => res.json())

    return {
      objectID: Math.abs(TinySimpleHash(post.date + post.slug)),
      title: post.title,
      excerpt: post.excerpt,
      content: post.body,
      slug: `${BASE_URL}${post.slug}`,
      image: post.coverImage,
      date: post.date,
      readingTime: post.stats.text,
      views: results.viewCount,
    }
  })
  return Promise.all(promises)
}

;(async function () {
  dotenv.config({ path: './.env.local' })

  // Remove any unpublished posts
  let posts = allPosts.filter((posts) => posts.published)

  // Remove any future posts
  posts = posts.filter((posts) => Date.parse(posts.date) <= Date.now())

  // Transform the posts
  const transformed = await transformPostsToSearchObjects(posts)

  try {
    // Initialize Algolia client
    const client = algoliasearch(
      process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
      process.env.ALGOLIA_SEARCH_ADMIN_KEY,
    )

    // Add your index name
    const index = client.initIndex('blog')

    const algoliaResponse = await index.saveObjects(transformed, {})

    // check the output of the response in the console
    console.log(
      `🎉 Sucessfully added ${algoliaResponse.objectIDs.length} records to Algolia search.`,
    )
  } catch (error) {
    console.log(error)
  }
})()

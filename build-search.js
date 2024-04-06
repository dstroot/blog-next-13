const algoliasearch = require('algoliasearch')
const dotenv = require('dotenv')
const posts = require('./.velite/posts.json')
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
    const path = `${BASE_URL}/api/views/${post.slug}`
    const results = await fetch(path).then((res) => res.json())

    return {
      objectID: Math.abs(TinySimpleHash(post.date + post.slug)),
      title: post.title,
      excerpt: post.excerpt,
      content: post.content,
      slug: post.slug,
      image: post.coverImage,
      date: post.date,
      readingTime: `${post.metadata.readingTime} min read`,
      views: results.viewCount,
    }
  })
  return Promise.all(promises)
}

;(async function () {
  dotenv.config({ path: './.env.local' })

  // Remove any unpublished posts
  let filteredPosts = posts.filter((posts) => posts.published)

  // Remove any future posts
  filteredPosts = filteredPosts.filter(
    (posts) => Date.parse(posts.date) <= Date.now(),
  )

  // Transform the posts
  const transformed = await transformPostsToSearchObjects(filteredPosts)

  try {
    // Initialize Algolia client
    const client = algoliasearch(
      process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
      process.env.ALGOLIA_SEARCH_ADMIN_KEY,
    )

    // Add your index name
    const index = client.initIndex('blog')

    const algoliaResponse = await index.saveObjects(transformed, {})

    // output of the response in the console
    console.log(
      `🎉 Sucessfully added ${algoliaResponse.objectIDs.length} records to Algolia search.`,
    )
  } catch (error) {
    console.log(error)
  }
})()

# Next.js Blog with Contentlayer

TODO:

- [x] Search (Algolia)
- [x] Standardize container/width
- [x] Cleanup the MDX Pages Like About
- [x] Add Drafts capability
- [x] Add sharing to code snippets
- [x] Use new Meta API
- [x] Add Google Tag Manager
- [x] Add Vercel Metrics
- [x] Add Views to pages (increment view count in DynamoDB)
- [x] Add robots
- [x] meta & key words (NOTE: Good progress but og route and urls need work)
- [x] sitemap, etc.
- [x] Add favicon and site images
- [x] Add og image (API progress but needs work)
- [x] Add Analytics Route and ensure analytics are working
- [x] Add CSP via middleware
- [x] Add csp api route to post
- [x] Fix menu to work on Mobile
- [ ] Any other API's to move over?
- [x] Links in Nav are not recognizing the path they are on - active styles are only applied whne they've been clicked on. Need a component that recognizes the path client side.
- [ ] Finish "uses" page.
- [-] Add blur to images? No, effect is not smooth, see "blur" branch
- [x] Update script to feed Algolia Index
- [x] Generate RSS Feed - images still need work.

## Changelog

1. Src directory
2. Uses new Next.js App Router
3. All code is now Typescript
4. Uses new Metadata API for SEO
5. ContentLayer for .md and .mdx processing
6. Middleware for CSP headers
7. Shadcn/ui components
8. Added a NavBar
9. All config moved to src/config, and .env vars are typed.
10. No longer using next-sitemap - built it directly.
11. Switched from rehype-prism to rehype-pretty-code
12. Switched from SWC to Tanstack-Query (React Query)

Phew...

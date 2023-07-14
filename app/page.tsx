import { getFeaturedPosts } from '../src/lib/posts-util'
import { IPost } from '../src/types'
import HomePage from './home-page'

export function getPosts() {
  const featuredPosts: IPost[] = getFeaturedPosts()
  return featuredPosts
}

export default async function Page() {
  // Fetch data directly in a Server Component
  const posts = getPosts()
  // Forward fetched data to your Client Component
  return <HomePage posts={posts} />
}

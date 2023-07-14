import { getAllPosts } from '../../src/lib/posts-util'
import { IPost } from '../../src/types'
import PostsPage from './posts-page'

export function getPosts() {
  const allPosts: IPost[] = getAllPosts()
  return allPosts
}

export default async function Page() {
  // Fetch data directly in a Server Component
  const posts = getPosts()
  // Forward fetched data to your Client Component
  return <PostsPage posts={posts} />
}

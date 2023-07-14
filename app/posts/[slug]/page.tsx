import PostContent from '../../../src/components/posts/post-detail/post-content'
import { getPostData, getPostsFiles } from '../../../src/lib/posts-util'

export async function generateStaticParams() {
  const postFilenames = getPostsFiles()
  const posts = postFilenames.map((fileName) => fileName.replace(/\.md$/, ''))
  return posts.map((post) => ({ slug: post }))
}

async function getPost(params: string) {
  const postData = getPostData(params)
  return postData
}

export default async function Page({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug)
  return (
    <>
      <PostContent post={post} />
    </>
  )
}

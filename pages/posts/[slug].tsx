import Head from 'next/head'
import { Fragment } from 'react'
import PostContent from '../../components/posts/post-detail/post-content'
import { getPostData, getPostsFiles } from '../../lib/posts-util'
import { GetStaticProps } from 'next'
import { InferGetStaticPropsType } from 'next'

export default function PostDetailPage(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  return (
    <Fragment>
      <Head>
        <title>{props.post.title}</title>
        <meta name='description' content={props.post.excerpt} />
      </Head>
      <PostContent post={props.post} />
    </Fragment>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context
  const { slug }: any = params
  const postData = getPostData(slug)

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  }
}

export function getStaticPaths() {
  const postFilenames = getPostsFiles()
  const slugs = postFilenames.map((fileName) => fileName.replace(/\.md$/, ''))

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  }
}

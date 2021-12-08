import Head from 'next/head'
import { Fragment } from 'react'
import { InferGetStaticPropsType } from 'next'

import { IPost } from '../../types'
import AllPosts from '../../components/posts/all-posts'
import { getAllPosts } from '../../lib/posts-util'

export default function AllPostsPage({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Fragment>
      <Head>
        <title>All Posts</title>
        <meta name='description' content='A list of all my posts ' />
      </Head>
      <AllPosts posts={posts} />
    </Fragment>
  )
}

export function getStaticProps() {
  const allPosts: IPost[] = getAllPosts()

  return {
    props: {
      posts: allPosts,
    },
  }
}

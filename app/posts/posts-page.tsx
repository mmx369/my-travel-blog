'use-client'
import Head from 'next/head'
import { Fragment } from 'react'

import AllPosts from '../../src/components/posts/all-posts'

export default function PostsPage({ posts }: any) {
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

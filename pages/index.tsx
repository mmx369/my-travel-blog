import React, { Fragment } from 'react'
import Head from 'next/head'
import { InferGetStaticPropsType } from 'next'
import FeaturedPosts from '../components/home-page/featured-posts'
import Hero from '../components/home-page/hero'
import { IPost } from '../types'
import { getFeaturedPosts } from '../lib/posts-util'

export default function HomePage({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Fragment>
      <Head>
        <title>Welcome to my blog!</title>
        <meta name='description' content='I post about travelling' />
      </Head>
      <Hero />
      <FeaturedPosts posts={posts} />
    </Fragment>
  )
}

export function getStaticProps() {
  const featuredPosts: IPost[] = getFeaturedPosts()
  return {
    props: {
      posts: featuredPosts,
    },
  }
}

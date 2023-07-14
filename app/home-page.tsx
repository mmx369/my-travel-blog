'use client'
// This is a Client Component. It receives data as props and
// has access to state and effects just like Page components
// in the `pages` directory.

import FeaturedPosts from '../src/components/home-page/featured-posts'
import Hero from '../src/components/home-page/hero'
import { IPost } from '../src/types'

type TProps = {
  posts: IPost[]
}

export default function HomePage({ posts }: TProps) {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={posts} />
    </>
  )
}

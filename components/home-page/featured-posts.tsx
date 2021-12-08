import PostsGrid from '../posts/posts-grid'
import { IPost } from '../../types'
import classes from './featured-posts.module.css'

type TProps = {
  posts: IPost[]
}

export default function FeaturedPosts({ posts }: TProps) {
  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  )
}

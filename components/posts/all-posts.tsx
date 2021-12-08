import classes from './all-posts.module.css'
import PostsGrid from './posts-grid'
import { IPost } from '../../types'

type TProps = {
  posts: IPost[]
}

export default function AllPosts({ posts }: TProps) {
  return (
    <section className={classes.posts}>
      <h1>All Posts</h1>
      <PostsGrid posts={posts} />
    </section>
  )
}

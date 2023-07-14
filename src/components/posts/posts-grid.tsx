import PostItem from './post-item'
import { IPost } from '../../types'
import classes from './posts-grid.module.css'

type TProps = {
  posts: IPost[]
}

export default function PostsGrid({ posts }: TProps) {
  return (
    <ul className={classes.grid}>
      {posts.map((post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </ul>
  )
}

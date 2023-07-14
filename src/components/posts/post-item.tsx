import Image from 'next/legacy/image'
import Link from 'next/link'
import { IPost } from '../../types'
import classes from './post-item.module.css'

type TProps = {
  post: IPost
}

export default function PostItem({ post }: TProps) {
  const { title, image, excerpt, date, slug } = post
  let formattedDate

  if (date) {
    formattedDate = new Date(date).toLocaleDateString('en-US', {
      month: 'long',
      year: 'numeric',
    })
  }

  const imagePath = `/images/posts/${slug}/${image}`
  const linkPath = `/posts/${slug}`

  return (
    <li className={classes.post}>
      <Link href={linkPath}>
        <div className={classes.image}>
          <Image
            src={imagePath}
            alt={`My Travel Photo from ${title}`}
            width={300}
            height={200}
            layout='responsive'
          />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <time>{formattedDate}</time>
          <p>{excerpt}</p>
        </div>
      </Link>
    </li>
  )
}

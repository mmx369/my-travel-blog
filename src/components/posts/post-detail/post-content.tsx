import Image from 'next/legacy/image'
import ReactMarkdown from 'react-markdown'
import { IPost } from '../../../types'
import classes from './post-content.module.css'
import PostHeader from './post-header'

type TProps = {
  post: IPost
}

export default function PostContent({ post }: TProps) {
  const imagePath = `/images/posts/${post.slug}/${post.image}`

  const custumRenderers = {
    p(paragraph: any) {
      const { node } = paragraph

      if (node.children[0].tagName === 'img') {
        const image = node.children[0]
        const indexOfSpace = image.properties.alt.indexOf(' ')
        const imgSize = image.properties.alt.slice(indexOfSpace).split('*')
        const setHeight = (imgSize: [number, number]) => {
          const [width, height] = imgSize
          const k = width / 600
          return height / k
        }

        return (
          <div className={classes.image}>
            <Image
              src={`/images/posts/${post.slug}/${image.properties.src}`}
              alt={image.alt}
              width={600}
              height={setHeight(imgSize)}
            />
          </div>
        )
      }
      return <p>{paragraph.children}</p>
    },
  }

  return (
    <article className={classes.content}>
      <PostHeader title={post.title || "Max's blog"} image={imagePath} />
      <ReactMarkdown components={custumRenderers}>{post.content}</ReactMarkdown>
    </article>
  )
}

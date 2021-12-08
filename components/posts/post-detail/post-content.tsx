import ReactMarkdown from 'react-markdown'
import Image from 'next/image'
import { IPost } from '../../../types'
import PostHeader from './post-header'
import classes from './post-content.module.css'

type TProps = {
  post: IPost
}

export default function PostContent({ post }: TProps) {
  const imagePath = `/images/posts/${post.slug}/${post.image}`

  const custumRenderers = {
    // img(image) {
    //   return (
    //     <Image
    //       src={`/images/posts/${post.slug}/${image.src}`}
    //       alt={image.alt}
    //       width={600}
    //       height={300}
    //     />
    //   );
    // },
    p(paragraph: any) {
      console.log(typeof paragraph)
      console.log('!!!', paragraph)

      const { node } = paragraph

      if (node.children[0].tagName === 'img') {
        const image = node.children[0]
        return (
          <div className={classes.image}>
            <Image
              src={`/images/posts/${post.slug}/${image.properties.src}`}
              alt={image.alt}
              width={600}
              height={300}
            />
          </div>
        )
      }
      return <p>{paragraph.children}</p>
    },
  }

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown components={custumRenderers}>{post.content}</ReactMarkdown>
    </article>
  )
}

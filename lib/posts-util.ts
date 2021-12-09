import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { IPost } from '../types'

const postsDirectory = path.join(process.cwd(), 'posts')

export function getPostsFiles() {
  const postFiles = fs.readdirSync(postsDirectory)
  return postFiles
}

export function getPostData(postIdentifier: string) {
  const postSlug = postIdentifier.replace(/\.md$/, '') //removes file extension
  const filePath = path.join(postsDirectory, `${postSlug}.md`)
  const fileContent = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(fileContent)

  const postData = {
    slug: postSlug,
    ...data,
    content,
  }

  return postData
}

export function getAllPosts() {
  const postFiles = getPostsFiles()
  const allPosts = postFiles.map((postFile) => {
    return getPostData(postFile)
  })
  const sortedPosts = allPosts.sort((a: IPost, b: IPost) =>
    a.date! > b.date! ? 1 : -1
  )
  return sortedPosts
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts()
  const featuredPosts = allPosts.filter((post: IPost) => post.isFeatured)
  return featuredPosts
}

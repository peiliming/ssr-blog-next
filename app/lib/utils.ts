import { NextApiHandler, NextApiRequest } from "next"
import formidable from 'formidable'
import dbConnect from "./dbConnect"
import Post, { PostModelSchema } from "@/models/Post"
import { PostDetail } from "@/utils/types"

interface FormidablePromise<T> {
  files: formidable.Files
  body: T
}

export const readFile = <T extends object>(req: NextApiRequest): Promise<FormidablePromise<T>> => {
  const form = formidable()
  return new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) reject(err)

      resolve({
        files,
        body: fields as T
      })
    })
  })
}

export const readPostsFromDb = async (limit: number, pageNo: number) => {
  if(!limit || limit > 10) {
    throw Error('表示件数を10個以下制限している')
  }
  const skip = limit * pageNo
  await dbConnect()
  const posts = await Post.find().sort({createdAt: 'desc'}).select('-content').skip(skip).limit(limit)

  return posts
}

export const formatPosts = (posts: PostModelSchema[]): PostDetail[] => {
  return posts.map(post => ({
    title: post.title,
    slug: post.slug,
    createdAt: post.createdAt.toString(),
    thumbnail: post.thumbnail?.url || '',
    meta: post.meta,
    tags: post.tags
  }))
}
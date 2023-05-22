// api/posts/slug

import { NextApiHandler } from 'next'
import Post from '@/models/Post'
import { readFile } from '@/lib/utils'
import { postValidationSchema, validateSchema } from '@/lib/validator'

export const config = {
  api: { bodyParse: false }
}

const handler: NextApiHandler = (req, res) => {
  const { method } = req
  // put patch post
  switch(method) {
    case 'PATCH':
      return updatePost(req, res)
    default:
      res.status(400).send('Not found!')
  }
}

const updatePost: NextApiHandler = async (req, res) => {
  const postId = req.query.postId as string
  const post = await Post.findById(postId)
  if(!post) return res.status(400).json({error: 'not found!'})

  const {files, body} = await readFile(req)
  let tags = []
  if(body.tags) {
    tags = JSON.parse(body.tags as string)
  }
  const error = validateSchema(postValidationSchema, {...body, tags})
  if(error) {
    return res.status(400).json({error})
  }
  const { title, content, meta, slug } = body
  post.title = title
  post.content = content
  post.meta = meta
  post.tags = tags
  post.slug = slug

  await post.save()
  res.json({ post })
}

export default handler
import { NextApiHandler } from "next"
import dbConnect from "@/lib/dbConnect"
import { postValidationSchema, validateSchema } from "@/lib/validator"
import { readFile } from '@/lib/utils'
import Post from "@/models/Post"

export const config = {
  api: { bodyParser: false },
}

const handler: NextApiHandler = async (req, res) => {
  const { method } = req
  switch (method) {
    case 'GET': {
      await dbConnect()
      res.json({ ok: true })
    }
    case 'POST': return createNewPost(req, res)
  }
}

const createNewPost: NextApiHandler = async (req, res) => {
  const { files, body } = await readFile(req)

  let tags = []
  if(body.tags) {
    tags = JSON.parse(body.tags as string)
  }

  const error = validateSchema(postValidationSchema, { ...body, tags})
  if(error) {
    return res.status(400).json({ error })
  }

  const {title, content, slug, meta} = body

  await dbConnect()
  const alreadyExits = await Post.findOne({slug: body.slug})
  if(alreadyExits) {
    return res.status(400).json({error: 'Slugがない！'})
  }

  // POST処理
  const newPost = new Post({
    title,
    content,
    slug,
    meta,
    tags,
  })

  await newPost.save()

  res.json({ post: newPost })
  
}

export default handler
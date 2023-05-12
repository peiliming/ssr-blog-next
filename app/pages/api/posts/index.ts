import { NextApiHandler } from "next";
import dbConnect from "@/lib/dbConnect";
import Joi from 'joi'

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

const createNewPost: NextApiHandler = (req, res) => {
  const {body} = req

  const schema = Joi.object().keys({
    title: Joi.string().required().messages({
      'string.empty': 'タイトルは空にするのができない！',
      'any.required': 'タイトルは必須項目！'
    }),
    content: Joi.string().required()
  })

  const {error} = schema.validate(body, {
    errors: { label: 'key', wrap: { label: false, array: false } }
  })
  console.log(error)
  if(error) {
    const errorMessage = error.details[0].message
    return res.status(400).json({ error: errorMessage })
  }

  res.json({ ok: true })
  
}

export default handler
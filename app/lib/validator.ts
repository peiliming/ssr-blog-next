import Joi, { ObjectSchema } from 'joi'
//https://joi.dev/api/?v=17.9.1#example

export const errorMessages = {
  INVALID_TITLE: 'タイトルはない！',
  INVALID_TAGS: 'タグは配列でなければならない！',
  INVALID_SLUG: 'スラグはない！',
  INVALID_META: 'メタ情報ががない！',
  INVALID_CONTENT: 'コンテンがない！'
}

export const postValidationSchema = Joi.object().keys({
  title: Joi.string().required().messages({
    'string.empty': errorMessages.INVALID_TITLE,
    'any.required': errorMessages.INVALID_TITLE,
  }),
  content: Joi.string().required().messages({
    'string.empty': errorMessages.INVALID_CONTENT,
    'any.required': errorMessages.INVALID_CONTENT,
  }),
  slug: Joi.string().required().messages({
    'string.empty': errorMessages.INVALID_SLUG,
    'any.required': errorMessages.INVALID_SLUG,
  }),
  meta: Joi.string().required().messages({
    'string.empty': errorMessages.INVALID_META,
    'any.required': errorMessages.INVALID_META,
  }),
  tags: Joi.array().items(Joi.string()).messages({
    'string.base': errorMessages.INVALID_TAGS,
    'string.empty': errorMessages.INVALID_TAGS,
  })
})

export const validateSchema = (schema: ObjectSchema, value: any) => {
  const { error } = schema.validate(value, {
    errors: { label: 'key', wrap: { label: false, array: false } },
    allowUnknown: true
  })
  console.log(error)

  if(error) {
    return error.details[0].message
  }

  return ''
}
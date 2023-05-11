// title, content, slug, tags, thumbnail, meta, author, date
import { Schema, model } from 'mongoose'

('タイトル')
const PostSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      trim: true,
      unique: true
    },
    content: {
      type: String,
      required: true,
      trim: true
    },
    meta: {
      type: String,
      required: true,
      trim: true,
    },
    tags: {
      type: [String],
    },
    thumbnail: {
      type: Object,
      url: String,
      public_id: String
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  },
  {
    timestamps: true
  }
)

const Post = model('Post', PostSchema)
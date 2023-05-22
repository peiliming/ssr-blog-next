import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'
import { FinalPost } from '@/components/editor'
import dbConnect from '@/lib/dbConnect'
import Post from '@/models/Post'
import AdminLayout from '@/components/layout/AdminLayout'
import Editor from '@/components/editor'
import { generateFormData } from '@/utils/helper'
import axios from 'axios'

interface PostResponse extends FinalPost {
  id: string
}

type Props = InferGetServerSidePropsType<typeof getServerSideProps>

interface ServerSideResponse {
  post: PostResponse
}

export const getServerSideProps: GetServerSideProps<
  ServerSideResponse
> = async (context) => {
  try {
    const slug = context.query.slug as string

    await dbConnect()
    const post = await Post.findOne({ slug })
    if(!post) return { notFound: true }

    const {_id, meta, title, content, thumbnail, tags} = post

    return {
      props: {
        post: {
          id: _id.toString(),
          title,
          content,
          tags: tags.join(', '),
          thumbnail: thumbnail?.url || '',
          slug
        }
      }
    }
  } catch (error) {
    return { notFound: true }
  }
}

const Update: NextPage<Props> = ({ post }) => {
  const handleSubmit = async (post: FinalPost) => {
    try {
      // FormData
      const formData = generateFormData(post)
      // submit post
      const { data } = await axios.patch(`/api/posts/${post.id}`, formData)
      console.log(data)
    } catch (error: any) {
      console.log(error.response.data)
    }
  }
  return (
    <AdminLayout>
      {/* /admin/posts/update/testtest (slug) */}
      <Editor initialValue={post} onSubmit={handleSubmit} btnTitle='更新' />
    </AdminLayout>
  )
}

export default Update
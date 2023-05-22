import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'
import { FinalPost } from '@/components/editor'
import dbConnect from '@/lib/dbConnect'
import Post from '@/models/Post'
import AdminLayout from '@/components/layout/AdminLayout'
import Editor from '@/components/editor'

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
}

const Update: NextPage<Props> = ({ post }) => {
  return (
    <AdminLayout>
      {/* /admin/posts/update/testtest (slug) */}
      <Editor initialValue={post} onSubmit={() => {}} btnTitle='更新' />
    </AdminLayout>
  )
}

export default Update
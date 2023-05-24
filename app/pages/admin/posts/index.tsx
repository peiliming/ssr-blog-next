import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'
import AdminLayout from '@/components/layout/AdminLayout'
import { useState } from 'react'
import PostCard from '@/components/common/PostCard'
import Link from 'next/link'
import { PostDetail } from '@/utils/types'

type Props = InferGetServerSidePropsType<typeof getServerSideProps>

interface ServerSideResponse {
  posts: PostDetail[]
}

export const getServerSideProps: GetServerSideProps<ServerSideResponse> = async () => {

}

const Posts: NextPage<Props> = ({posts}) => {
  const [postsToRender, setPostsToRender] = useState(posts)
  return (<div>
    <AdminLayout>
      <div className="max-w-4xl mx-auto p-3">
        <div className="grid grid-cols-3 gap-4">
          {postsToRender.map(post => (
            <Link key={post.slug} href={'/' + post.slug}>
              <PostCard key={post.slug} post={post} />
            </Link>
          ))}
        </div>
      </div>
    </AdminLayout>
  </div>)
}

export default Posts
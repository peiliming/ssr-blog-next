import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'
import AdminLayout from '@/components/layout/AdminLayout'
import { useState } from 'react'
import PostCard from '@/components/common/PostCard'
import Link from 'next/link'
import { PostDetail } from '@/utils/types'
import { formatPosts, readPostsFromDb } from '@/lib/utils'

type Props = InferGetServerSidePropsType<typeof getServerSideProps>

let pageNo = 0
const limit = 9

interface ServerSideResponse {
  posts: PostDetail[]
}

export const getServerSideProps: GetServerSideProps<ServerSideResponse> = async () => {
  try {
    const posts = await readPostsFromDb(limit, pageNo)
    const formattedPosts = formatPosts(posts)  

    return {
      props: {
        posts: formattedPosts
      }
    }
  } catch (error) {
    return { notFound: true}
  }
}

const Posts: NextPage<Props> = ({posts}) => {
  const [postsToRender, setPostsToRender] = useState(posts)
  return (<div>
    <AdminLayout>
      <div className="max-w-4xl mx-auto p-3">
        <div className="grid grid-cols-3 gap-4">
          {postsToRender.map(post => (
            <Link key={post.slug} href={'/admin/posts/update/' + post.slug}>
              <PostCard key={post.slug} post={post} />
            </Link>
          ))}
        </div>
      </div>
    </AdminLayout>
  </div>)
}

export default Posts
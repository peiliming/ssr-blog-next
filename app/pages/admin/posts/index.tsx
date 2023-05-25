import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'
import AdminLayout from '@/components/layout/AdminLayout'
import { useState } from 'react'
import { PostDetail } from '@/utils/types'
import { formatPosts, readPostsFromDb } from '@/lib/utils'
import axios from 'axios'
import InfiniteScrollPosts from '@/components/common/InfiniteScrollPosts'

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
  const [hasMorePosts, setHasMorePosts] = useState(true)

  const fetchMorePosts = async () => {
    try {
      pageNo++
      const { data } = await axios(`/api/posts?limit=${limit}&pageNo=${pageNo}`)
      if(data.posts.length < limit) {
        setPostsToRender([...postsToRender, ...data.posts])
        setHasMorePosts(false)
      } else {
        setPostsToRender([...postsToRender, ...data.posts])
      }
    } catch (error) {
      setHasMorePosts(false)
      console.log(error)
    }
  }
  return (<div>
    <AdminLayout>
      <InfiniteScrollPosts
        hasMore={hasMorePosts}
        next={fetchMorePosts}
        dataLength={postsToRender.length}
        posts={postsToRender}
        showControls
      />
    </AdminLayout>
  </div>)
}

export default Posts
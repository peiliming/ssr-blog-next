import InfiniteScrollPosts from '@/components/common/InfiniteScrollPosts'
import DefaultLayout from '@/components/layout/DefaultLayout'
import { PostDetail } from '@/utils/types'
import axios from 'axios'
import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'
import { useState } from 'react'
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

const Home: NextPage<Props> = ({posts}) => {
  const [postsToRender, setPostsToRender] = useState(posts)
  const [hasMorePosts, setHasMorePosts] = useState(true)

  const isAdmin = false

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

  return (
    <DefaultLayout>
      <div className='pb-20'>
        <InfiniteScrollPosts
          hasMore={hasMorePosts}
          next={fetchMorePosts}
          dataLength={postsToRender.length}
          posts={postsToRender}
          showControls={isAdmin}
        />
      </div>
    </DefaultLayout>)
}

export default Home
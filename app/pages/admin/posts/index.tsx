import { NextPage } from 'next'
import AdminLayout from '@/components/layout/AdminLayout'
import { useState } from 'react'
import PostCard from '@/components/common/PostCard'

interface Props {}

const posts = [
  {
    title: 'test test test',
    slug: 'test',
    meta: 'test',
    tags: ['test'],
    thumbnail: 'test',
    createdAt: 'Tue Oct 11 2022 14:58:49'
  },
  {
    title: 'test test test',
    slug: 'test',
    meta: 'test',
    tags: ['test'],
    thumbnail: 'test',
    createdAt: 'Tue Oct 11 2022 14:58:49'
  },
  {
    title: 'test test test',
    slug: 'test',
    meta: 'test',
    tags: ['test'],
    thumbnail: 'test',
    createdAt: 'Tue Oct 11 2022 14:58:49'
  }
]

const Posts: NextPage<Props> = () => {
  const [postsToRender, setPostsToRender] = useState(posts)
  return (<div>
    <AdminLayout>
      <div className="max-w-4xl mx-auto p-3">
        <div className="grid grid-cols-3 gap-4">
          {postsToRender.map(post => (
            <PostCard post={post} />
          ))}
        </div>
      </div>
    </AdminLayout>
  </div>)
}

export default Posts
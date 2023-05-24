import { NextPage } from 'next'
import AdminLayout from '@/components/layout/AdminLayout'
import { useState } from 'react'
import PostCard from '@/components/common/PostCard'
import Link from 'next/link'

interface Props {}

const posts = [
  {
    title: 'test test test',
    slug: 'test',
    meta: 'test',
    tags: ['test'],
    thumbnail: 'https://images.unsplash.com/photo-1664784805210-9fa665e2b7e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
    createdAt: 'Tue Oct 11 2022 14:58:49'
  },
  {
    title: 'test test test',
    slug: 'test',
    meta: 'test',
    tags: ['test'],
    thumbnail: 'https://images.unsplash.com/photo-1664784805210-9fa665e2b7e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
    createdAt: 'Tue Oct 11 2022 14:58:49'
  },
  {
    title: 'test test test',
    slug: 'test',
    meta: 'test',
    tags: ['test'],
    thumbnail: 'https://images.unsplash.com/photo-1664784805210-9fa665e2b7e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
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
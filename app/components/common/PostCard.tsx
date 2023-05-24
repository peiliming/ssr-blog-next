import { FC } from 'react'
import { PostDetail } from '@/utils/types'
import Image from 'next/image'

interface Props {
  post: PostDetail
}

const PostCard: FC<Props> = ({post}): JSX.Element => {
  const { title, slug, meta, tags, createdAt, thumbnail } = post
  return (
    <div
      className='rounded shadow-sm shadow-secondary-dark overflow-hidden bg-primary
        dark:bg-primary-dark flex flex-col h-full transition'
    >
      <div className='aspect-video relative'>
        {!thumbnail ? (
          <div className='w-full h-full flex items-center justify-center
          text-secondary-dark opacity-50 font-semibold'>
            No image
          </div>
          ) : (
            <Image src={thumbnail} layout='fill' alt='Thumbnail' />
          )}
      </div>
      <div className='p-2 flex-1 flex flex-col'>
        <div className='flex items-center justify-between text-sm
        text-primary-dark dark:text-primary'>
          {tags.map((t, index) => (
            <span key={t + index}>#{t}</span>
          ))}
        </div>
        <span>{createdAt}</span>
      </div>
    </div>
  )
}

export default PostCard
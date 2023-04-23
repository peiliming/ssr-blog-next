import { FC } from 'react'
import NextImage from 'next/image'

interface Props {
  src: string
  selected?: boolean
  onClick?(): void
}

const Image: FC<Props> = ({src, selected, onClick}): JSX.Element => {
  return (
    <div className='rounded overflow-hidden cursor-pointer'>
      <NextImage
        className='bg-secondary-light hover:scale-110 transition'
        src={src}
        width={200}
        height={200}
        alt='gallery'
      />
    </div>
  )
}

export default Image
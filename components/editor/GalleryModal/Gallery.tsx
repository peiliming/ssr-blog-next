import { FC } from 'react'

interface Props {}

const images = [
  {
    src: 'https://placehold.jp/300x300.png'
  },
  {
    src: 'https://placehold.jp/300x300.png'
  },
  {
    src: 'https://placehold.jp/300x300.png'
  },
  {
    src: 'https://placehold.jp/300x300.png'
  },
  {
    src: 'https://placehold.jp/300x300.png'
  },
  {
    src: 'https://placehold.jp/300x300.png'
  },
  {
    src: 'https://placehold.jp/300x300.png'
  },
  {
    src: 'https://placehold.jp/300x300.png'
  },
  {
    src: 'https://placehold.jp/300x300.png'
  },
  {
    src: 'https://placehold.jp/300x300.png'
  },
  {
    src: 'https://placehold.jp/300x300.png'
  },
  {
    src: 'https://placehold.jp/300x300.png'
  },
  {
    src: 'https://placehold.jp/300x300.png'
  },
  {
    src: 'https://placehold.jp/300x300.png'
  },
  {
    src: 'https://placehold.jp/300x300.png'
  },
]

const Gallery: FC<Props> = (props): JSX.Element => {
  return (
    <div className='flex flex-wrap'>
      {images.map(({src}, index) => (
        <div key={index} className='basis-1/4'>
          <img src={src} alt='gallery' />
        </div>
      ))}
    </div>
  )
}

export default Gallery
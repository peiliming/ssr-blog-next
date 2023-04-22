import ModalContainer from '@/components/common/ModalContainer'
import { FC } from 'react'

interface Props {}

const GalleryModal: FC<Props> = (props): JSX.Element => {
  return (
    <ModalContainer visible>
      <div className="bg-black p-20">
        <button className='bg-white p-3'>クリック</button>
      </div>
    </ModalContainer>  
  )
}

export default GalleryModal
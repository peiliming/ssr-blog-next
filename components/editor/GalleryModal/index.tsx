import ModalContainer, { ModalProps } from '@/components/common/ModalContainer'
import { FC } from 'react'
import Gallery from '@/components/editor/GalleryModal/Gallery'

interface Props extends ModalProps {

}

const GalleryModal: FC<Props> = ({visible, onClose}): JSX.Element => {
  return (
    <ModalContainer visible={visible} onClose={onClose}>
      <div className="max-w-4xl p-2 bg-primary-dark dark:bg-primary rounded">
        <div className="flex">
          {/* gallery */}
          <div className="basis-[75%]">
            <Gallery />
          </div>

          <div className="basis-1/4"></div>
        </div>
      </div>
    </ModalContainer>  
  )
}

export default GalleryModal
import { FC, ReactNode } from 'react'

interface Props {
  children: ReactNode
  visible?: boolean
  onClose?(): void
}

const ModalContainer: FC<Props> = ({children, visible, onClose}): JSX.Element | null => {
  if(!visible) return null

  const handleClick = () => {
    onClose && onClose()
  }

  return (
    <div onClick={handleClick} className='fixed inset--0  bg-primay dark:bg-primary-dark dark:bg-opacity-5 bg-opacity-5 backdrop-blur-[2px] z-50 flex items-center justify-center'>
      {children}
    </div>
  )
}

export default ModalContainer
import { FC, ReactNode } from 'react'

interface Props {
  children: ReactNode
  visible?: boolean
  onClose?(): void
}

const ModalContainer: FC<Props> = ({children, visible}): JSX.Element | null => {
  if(!visible) return null

  return (
    <div className='fixed inset--0  bg-primay dark:bg-primary-dark dark:bg-opacity-5
    bg-opacity-5 backdrop-blur-[2px] z-50 flex items-center justify-center'>
      {children}
    </div>
  )
}

export default ModalContainer
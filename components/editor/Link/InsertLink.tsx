import { FC, useState } from 'react'
import { BsLink45Deg } from 'react-icons/bs'
import Button from '@/components/editor/ToolBar/Button'
import LinkForm from '@/components/editor/Link/LinkForm'

interface Props {}

const InsertLink: FC<Props> = (props): JSX.Element => {
  const [visible, setVisible] = useState(false)
  return (
    <div onKeyDown={({key}) => {
      if(key === 'Escape') setVisible(false)
    }} className='relative'>
      <Button onClick={() => setVisible(!visible)}>
        <BsLink45Deg />
      </Button>
      <div className='absolute top-full mt-4 right-0 z-50'>
        <LinkForm visible={visible} />
      </div>
    </div>
  )
}

export default InsertLink
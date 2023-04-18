import { FC } from 'react'
import { BsLink45Deg } from 'react-icons/bs'
import Button from '@/components/editor/ToolBar/Button'
import LinkForm from '@/components/editor/Link/LinkForm'

interface Props {}

const InsertLink: FC<Props> = (props): JSX.Element => {
  return (
    <div className='relative'>
      <Button>
        <BsLink45Deg />
      </Button>
      <div className='absolute top-full mt-4 right-0 z-50'>
        <LinkForm />
      </div>
    </div>
  )
}

export default InsertLink
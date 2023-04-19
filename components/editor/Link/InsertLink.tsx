import { FC, useState } from 'react'
import { BsLink45Deg } from 'react-icons/bs'
import Button from '@/components/editor/ToolBar/Button'
import LinkForm from '@/components/editor/Link/LinkForm'
import { linkOption } from '@/components/editor/Link/LinkForm'

interface Props {
  onSubmit(link: linkOption): void
}

const InsertLink: FC<Props> = ({onSubmit}): JSX.Element => {
  const [visible, setVisible] = useState(false)
  return (
    <div onKeyDown={({key}) => {
      if(key === 'Escape') setVisible(false)
    }} className='relative'>
      <Button onClick={() => setVisible(!visible)}>
        <BsLink45Deg />
      </Button>
      <div className='absolute top-full mt-4 right-0 z-50'>
        <LinkForm visible={visible} onSubmit={onSubmit} />
      </div>
    </div>
  )
}

export default InsertLink
import { FC, useState } from 'react'
import { BsLink45Deg } from 'react-icons/bs'
import Button from '@/components/editor/ToolBar/Button'
import LinkForm from '@/components/editor/Link/LinkForm'
import { linkOption } from '@/components/editor/Link/LinkForm'

interface Props {
  onSubmit(link: linkOption): void
}

const InsertLink: FC<Props> = ({ onSubmit }): JSX.Element => {
  const [visible, setVisible] = useState(false)

  const handleSubmit = (link: linkOption) => {
    if(!link.url.trim()) return hideForm()

    onSubmit(link)
    hideForm()
  }

  const showForm = () => setVisible(true)
  const hideForm = () => setVisible(false) 

  return (
    <div onKeyDown={({key}) => {
      if(key === 'Escape') hideForm()
    }} className='relative'>
      <Button onClick={visible ? hideForm : showForm}>
        <BsLink45Deg />
      </Button>
      <div className='absolute top-full mt-4 right-0 z-50'>
        <LinkForm visible={visible} onSubmit={handleSubmit} />
      </div>
    </div>
  )
}

export default InsertLink
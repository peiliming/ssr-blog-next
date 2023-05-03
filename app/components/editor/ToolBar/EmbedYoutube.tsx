import { FC, useState } from 'react'
import { BsYoutube } from 'react-icons/bs'
import Button from '@/components/editor/ToolBar/Button'
import { linkOption } from '@/components/editor/Link/LinkForm'

interface Props {
  onSubmit(link: string): void
}

const EmbedYoutube: FC<Props> = ({ onSubmit }): JSX.Element => {
  const [url, setUrl] = useState('')
  const [visible, setVisible] = useState(false)

  const handleSubmit = () => {
    if(!url.trim()) return hideForm()

    onSubmit(url)
    setUrl('')
    hideForm()
  }

  const showForm = () => setVisible(true)
  const hideForm = () => setVisible(false) 

  return (
    <div onKeyDown={({key}) => {
      if(key === 'Escape') hideForm()
    }} className='relative'>
      <Button onClick={visible ? hideForm : showForm}>
        <BsYoutube />
      </Button>

      {visible && <div className='absolute top-full mt-4 right-0 z-50'>
        <div className='flex space-x-2'>
          <input autoFocus type='text' className='bg-transparent rounded border-2 border-secondary-dark
            focus:border-primary-dark dark:focus:border-primary transition p-2 text-primary-dark
            dark:text-primary'
            placeholder='https://youtube.com'
            value={url}
            onChange={({target}) => setUrl(target.value)}
          />
          <button onClick={handleSubmit} className='bg-action p-2 w-16 text-primary rounded text-sm box-border'><span>完了</span></button>
        </div>
      </div>}
    </div>
  )
}

export default EmbedYoutube
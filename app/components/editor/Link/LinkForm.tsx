import { FC, useState, useEffect } from 'react'
import { validateUrl } from '@/components/editor/EditorUtils'

interface Props {
  visible: boolean
  onSubmit(link: linkOption): void
  initialState?: linkOption
}

export interface linkOption {
  url: string
  openInNewTab: boolean
}

const defaultLink = {
  url: '',
  openInNewTab: false
}

const LinkForm: FC<Props> = ({visible, initialState, onSubmit}): JSX.Element | null => {
  // const [link, setLink] = useState<linkOption>({url: '', openInNewTab: false})
  const [link, setLink] = useState<linkOption>(defaultLink)

  const handleSubmit = () => {
    onSubmit({...link, url: validateUrl(link.url)})
    resetForm()
  }

  const resetForm = () => {
    setLink({...defaultLink})
  }

  useEffect(() => {
    if(initialState) {
      setLink({...initialState})
    }
  }, [initialState])

  if (!visible) return null
  return (
    <div className='rounded p-2 bg-primary border-2 border-black border-solid dark:bg-primary-dark shadow-secondary-dark'>
      <input autoFocus type='text' className='bg-transparent rounded border-2 border-secondary-dark
      focus:border-primary-dark dark:focus:border-primary transition p-2 text-primary-dark
      dark:text-primary'
      placeholder='https://example.com'
      value={link.url}
      onChange={({target}) => setLink({...link, url: target.value })}
    />

      <div className='flex items-center space-x-2 mt-2'>
        <input 
          type="checkbox"
          id='open-in-new-tab'
          checked={link.openInNewTab}
          onChange={({target}) => {
            setLink({...link, openInNewTab: target.checked})
          }}
        />
        <label htmlFor='open-in-new-tab' className='text-[12px] px-2'>新しいタブを開く</label>

        <div className='flex-1 text-right'>
          <button onClick={handleSubmit} className='bg-action px-2 py-1 text-primary rounded text-sm'>完了</button>
        </div>
      </div>
    </div>
  )
}

export default LinkForm
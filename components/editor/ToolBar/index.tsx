import { Editor } from '@tiptap/react'
import { FC } from 'react'

interface Props {
  editor: Editor | null
}

const index: FC<Props> = ({editor}):JSX.Element | null => {
  if(!editor) return null
  return (
    <div>
      <select name='' id=''>
        
      </select>
    </div>
  )
}

export default index
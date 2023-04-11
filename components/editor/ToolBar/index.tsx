import DropdownOptions from '@/components/common/DropdownOptions'
import { Editor } from '@tiptap/react'
import { FC } from 'react'
import { AiFillCaretDown } from 'react-icons/ai'
import { getFocusedEditor } from '@/components/editor/EditorUtils'

interface Props {
  editor: Editor | null
}

const ToolBar: FC<Props> = ({editor}):JSX.Element | null => {
  if(!editor) return null
  
  const options = [
    {
      label: 'テキスト',
      onClick: () => getFocusedEditor(editor).setParagraph().run()
    },
    {
      label: '見出し1',
      onClick: () => getFocusedEditor(editor).toggleHeading({level: 1}).run()
    },
    {
      label: '見出し2',
      onClick: () => getFocusedEditor(editor).toggleHeading({level: 2}).run()
    },
    {
      label: '見出し3',
      onClick: () => getFocusedEditor(editor).toggleHeading({level: 3}).run()
    }
  ]

  const getLabel = (): string => {
    if(editor.isActive('heading', {level: 1})) return '見出し1'
    if(editor.isActive('heading', {level: 2})) return '見出し2'
    if(editor.isActive('heading', {level: 3})) return '見出し3'
    return 'テキスト'
  }

  const Head = ():JSX.Element => {
    return (
      <div className='flex items-center space-x-2 text-primary-dark dark:text-primay'>
        <p>{getLabel()}</p>
        <AiFillCaretDown />
      </div>
    )
  }
  return (
    <div>
      {/* <select name='' id=''>

      </select> */}
      <DropdownOptions options={options}
        head={<Head />}
      />
    </div>
  )
}

export default ToolBar
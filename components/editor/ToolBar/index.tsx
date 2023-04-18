import DropdownOptions from '@/components/common/DropdownOptions'
import { Editor } from '@tiptap/react'
import { FC } from 'react'
import { AiFillCaretDown } from 'react-icons/ai'
import { getFocusedEditor } from '@/components/editor/EditorUtils'
// https://react-icons.github.io/react-icons/icons?name=bs
import { 
  BsTypeStrikethrough,
  BsBraces,
  BsCode,
  BsListOl,
  BsListUl,
  BsTypeBold,
  BsTypeItalic,
  BsTypeUnderline,
  BsImageFill,
  BsLink45Deg,
  BsYoutube,
} from 'react-icons/bs'
import { RiDoubleQuotesL } from 'react-icons/ri'
import InsertLink from '@/components/editor/Link/InsertLink'

import Button from '@/components/editor/ToolBar/Button'

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
    <div className='flex items-center'>
      <DropdownOptions options={options} head={<Head />}/>
      {/* 区切り */}
      <div className='h-4 w-[1px] bg-secondary-dark dark:bg-secondary-light mx-8' />
      <div className='flex items-center space-x-3'>
        <Button 
          active={editor.isActive('bold')}
          // className={editor.isActive('bold') ? 'is-active' : ''}
          onClick={() => getFocusedEditor(editor).toggleBold().run()}
        >
          <BsTypeBold />
        </Button>

        <Button
          active={editor.isActive('italic')}
          onClick={() => getFocusedEditor(editor).toggleItalic().run()}
        >
          <BsTypeItalic />
        </Button>

        <Button
          active={editor.isActive('underline')}
          onClick={() => getFocusedEditor(editor).toggleUnderline().run()}
        >
          <BsTypeUnderline />
        </Button>

        <Button
          active={editor.isActive('strike')}
          onClick={() => getFocusedEditor(editor).toggleStrike().run()}
        >
          <BsTypeStrikethrough />
        </Button>
      </div>
      {/* 区切り */}
      <div className='h-4 w-[1px] bg-secondary-dark dark:bg-secondary-light mx-8' />
      <div className='flex items-center space-x-3'>
        <Button
          active={editor.isActive('blockquote')}
          onClick={() => getFocusedEditor(editor).toggleBlockquote().run()}
        >
          <RiDoubleQuotesL />
        </Button>

        <Button
          active={editor.isActive('code')}
          onClick={() => getFocusedEditor(editor).toggleCode().run()}
        >
          <BsCode />
        </Button>

        <Button
          active={editor.isActive('codeBlock')}
          onClick={() => getFocusedEditor(editor).toggleCodeBlock().run()}
        >
          <BsBraces />
        </Button>

        <InsertLink />

        <Button
          active={editor.isActive('orderedList')}
          onClick={() => getFocusedEditor(editor).toggleOrderedList().run()}
        >
          <BsListOl />
        </Button>

        <Button
          active={editor.isActive('bulletList')}
          onClick={() => getFocusedEditor(editor).toggleBulletList().run()}
        >
          <BsListUl />
        </Button>
      </div>
      <div className='h-4 w-[1px] bg-secondary-dark dark:bg-secondary-light mx-8' />
      <div className='flex items-center space-x-3'>
        <Button>
          <BsYoutube />
        </Button>

        <Button>
          <BsImageFill />
        </Button>
      </div>
    </div>
  )
}

export default ToolBar
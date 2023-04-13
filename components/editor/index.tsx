import { FC } from 'react'
import { useEditor, EditorContent } from '@tiptap/react'
// https://tiptap.dev/installation/nextjs
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'
// https://tiptap.dev/api/extensions/placeholder
import Placeholder from '@tiptap/extension-placeholder'
import ToolBar from '@/components/editor/ToolBar'

interface Props {}

const Editor: FC<Props> = (props):JSX.Element => {
  const editor = useEditor({
    extensions: [StarterKit, Underline, Placeholder.configure({
      placeholder: '何かを打ってみようか',
    })],
    editorProps: {
    attributes: {
      class: 'prose prose-lg focus:outline-none dark:prose-invert max-w-full mx-auto h-full'
    }
  }})
  return (
    <div className='p-3 dark:bg-primary-dark bg-primary transition'> 
      <ToolBar editor={editor} />
      <div className='h-[1px] w-full bg-secondary-dark dark:bg-secondary-light mr-3 mt-3'></div>
      <EditorContent editor={editor} />
    </div>
  )
}

export default Editor
import { FC } from 'react'
import { useEditor, EditorContent } from '@tiptap/react'
// https://tiptap.dev/installation/nextjs
import StarterKit from '@tiptap/starter-kit'
import ToolBar from '@/components/editor/ToolBar'

interface Props {}

const Editor: FC<Props> = (props):JSX.Element => {
  const editor = useEditor({extensions: [StarterKit]})
  return (
    <div> 
      <ToolBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  )
}

export default Editor
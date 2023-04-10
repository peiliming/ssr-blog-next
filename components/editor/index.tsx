import { FC } from 'react'
import { useEditor, EditorContent } from '@tiptap/react'
// https://tiptap.dev/installation/nextjs
import StarterKit from '@tiptap/starter-kit'

interface Props {}

const Editor: FC<Props> = (props):JSX.Element => {
  const editor = useEditor({extensions: [StarterKit]})
  return (
    <div> 
      <button onClick={() => {
        if(!editor) return
        {/* // https://tiptap.dev/api/commands */}
        {/* // https://tiptap.dev/api/extensions/bubble-menu */}
        editor?.chain().focus().toggleBold().run()
      }}>Bold</button>
      <EditorContent editor={editor} />
    </div>
  )
}

export default Editor
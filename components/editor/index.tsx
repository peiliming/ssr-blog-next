import { FC, useState, useEffect } from 'react'
import { useEditor, EditorContent, getMarkRange, Range } from '@tiptap/react'
// https://tiptap.dev/installation/nextjs
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'
// https://tiptap.dev/api/extensions/placeholder
import Placeholder from '@tiptap/extension-placeholder'
import ToolBar from '@/components/editor/ToolBar'

// https://tiptap.dev/api/marks/link
import Link from '@tiptap/extension-link'
import EditLink from './Link/EditLink'
import Youtube from '@tiptap/extension-youtube'
import GalleryModal from '@/components/editor/GalleryModal'

interface Props {}

const Editor: FC<Props> = (props):JSX.Element => {
  const [selectionRange, setSelectionRange] = useState<Range>()
  const [showGallery, setShowGallery] = useState(false)

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link.configure({
        autolink: false,
        linkOnPaste: false,
        openOnClick: false,
        HTMLAttributes: {
          target: '',
        }
      }),
      Placeholder.configure({
        placeholder: '何かを打ってみようか',
      }),
      Youtube.configure({
        width: 840,
        height:472.5,
        HTMLAttributes: {
          class: 'mx-auto rounded',
        }
      })
    ],
    
      editorProps: {
        // https://tiptap.dev/guide/menus#bubble-menu -> bubble menu（浮くアイコンを作る）
        handleClick(view, pos, event) {
          const {state} = view
          const selectionRange = getMarkRange(
            state.doc.resolve(pos),
            state.schema.marks.link
          )
          if(selectionRange) {
            setSelectionRange(selectionRange)
          }
        },
        attributes: {
          class: 'prose prose-lg focus:outline-none dark:prose-invert max-w-full mx-auto h-full'
        }
      }})

    useEffect(() => {
      if(editor && selectionRange) {
        editor.commands.setTextSelection(selectionRange)
      }
    }, [editor, selectionRange])
  return (
    <>
      <div className='p-3 dark:bg-primary-dark bg-primary transition'> 
        <ToolBar editor={editor} onOpenImageClick={() => setShowGallery(true)} />
        <div className='h-[1px] w-full bg-secondary-dark dark:bg-secondary-light my-3'></div>
        {editor ? <EditLink editor={editor} /> : null}
        <EditorContent editor={editor} />
      </div>
      <GalleryModal
        visible={showGallery}
        onClose={() => setShowGallery(false)}
      />
    </>
    
  )
}

export default Editor
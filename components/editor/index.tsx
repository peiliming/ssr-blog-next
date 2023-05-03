import { FC, useState, useEffect, ChangeEventHandler } from 'react'
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
// https://tiptap.dev/api/nodes/image
import TipTapImage from '@tiptap/extension-image'
import GalleryModal, { ImageSelectionResult } from '@/components/editor/GalleryModal'
import axios from 'axios'
import SeoForm, { SeoResult } from '@/components/editor/SeoForm'
import ActionButton from '@/components/common/ActionButton'
import ThumbnailSelector from '@/components/editor/ThumbnailSelector'

export interface FinalPost extends SeoResult{
  title: string
  content: string
  meta: string
  tags: string
  slug: string
  thumbnail?: File | string
}

interface Props {
  initialValue?: FinalPost
  btnTitle?: string
  busy?: boolean
  onSubmit(post: FinalPost): void
}

const Editor: FC<Props> = ({initialValue, btnTitle = '確認', busy = false, onSubmit}):JSX.Element => {
  const [selectionRange, setSelectionRange] = useState<Range>()
  const [showGallery, setShowGallery] = useState(false)
  const [uploading, setUploading] = useState(false)
  const [images, setImages] = useState<{src: string}[]>([])
  const [seoInitialValue, setSeoInitialValue] = useState<SeoResult>()
  const [post, setPost] = useState<FinalPost>({
    title: '',
    content: '',
    meta: '',
    tags: '',
    slug: '',
  })

  const fetchImages = async () => {
    const {data} = await axios('/api/image')
    setImages(data.images)
  }

  const handleImageUpload = async (image: File) => {
    setUploading(true)
    const formData = new FormData()
    formData.append('image', image)
    const {data} = await axios.post('/api/image', formData)
    setUploading(false)
    
    setImages([data, ...images])
  }

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
      }),
      TipTapImage.configure({
        HTMLAttributes: {
          class: 'mx-auto'
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
  
  const handleSubmit = () => {
    if(!editor) return
    onSubmit({ ...post, content: editor.getHTML() })
  }

  const handleImageSelection = (result: ImageSelectionResult) => {
    editor?.chain().focus().setImage({src: result.src, alt: result.altText}).run()
  }

  const updateTitle: ChangeEventHandler<HTMLInputElement> = ({target}) => {
    setPost({...post, title: target.value})
  }

  const updateSeoValue = (result: SeoResult) => {
    setPost({...post, ...result})
  }

  const updateThumbnail = (file: File) => {
    setPost({...post, thumbnail: file})
  }
  

  useEffect(() => {
    if(editor && selectionRange) {
      editor.commands.setTextSelection(selectionRange)
    }
  }, [editor, selectionRange])

  useEffect(() => {
    fetchImages()
  }, [])

  useEffect(() => {
    if(initialValue) {
      setPost({...initialValue})
      editor?.commands.setContent(initialValue.content)
      const { meta, slug, tags } = initialValue
      setSeoInitialValue({ meta, slug, tags })
    }
  }, [initialValue, editor])

  return (
    <>
      <div className='p-3 outline-none dark:bg-primary-dark bg-primary transition'>
        <div className='sticky top-0 z-10 dark:bg-primary-dark bg-primary'>

        {/* サムネール画像と確認ボタンの箇所 */}
          <div className="flex items-center justify-between mb-3">
            <ThumbnailSelector 
              initialValue={post.thumbnail as string}
              onChange={updateThumbnail} />
            <div className="inline-block">
              <ActionButton
                busy={busy}
                title={btnTitle}
                onClick={handleSubmit}
              />
            </div>
          </div>

          <input type='text'
            className='py-2 bg-transparent w-full border-0 border-b-[1px]
            border-csecondary-dark dark:border-secondary-light text-3xl font-semibold
            italic text-primary-dark dark:text-primary mb-3' 
            placeholder='タイトル'
            onChange={updateTitle}
            value={post.title}
            />
          <ToolBar
            editor={editor}
            onOpenImageClick={() => setShowGallery(true)}
          />
          <div className='h-[1px] w-full bg-secondary-dark dark:bg-secondary-light my-3'></div>

        </div>
        {editor ? <EditLink editor={editor} /> : null}
        <EditorContent editor={editor} className='min-h-[300px]' />
        <div className='h-[1px] w-full bg-secondary-dark dark:bg-secondary-light my-3' />
        <SeoForm 
          onChange={updateSeoValue}
          title={post.title}
          initialValue={seoInitialValue}
        />
      </div>
      <GalleryModal
        visible={showGallery}
        onClose={() => setShowGallery(false)}
        onSelect={handleImageSelection} //upload logic
        images={images}
        onFileSelect={handleImageUpload}
        uploading={uploading}
      />
    </>
    
  )
}

export default Editor
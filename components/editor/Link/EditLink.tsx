import { FC, useState, useCallback } from 'react'
import { BsBoxArrowUpRight, BsPencilSquare } from 'react-icons/bs'
import { BiUnlink } from 'react-icons/bi'
import { BubbleMenu, Editor } from '@tiptap/react'
import LinkForm, { linkOption } from './LinkForm'

interface Props {
  editor: Editor
}

const EditLink: FC<Props> = ({editor}): JSX.Element => {
  const [showEditForm, setShowEditForm] = useState(false)

  const handleOnLinkOpenClick = useCallback(() => {
    const { href } = editor.getAttributes('link')
    if(href) {
      window.open(href, '_blank')
    }
  }, [editor])

  const handleLinkEditClick = () => {
    setShowEditForm(true)
  }
  const handleUnlinkCLick = () => {
    editor.commands.unsetLink()
  }

  const handleSubmit = ({url, openInNewTab}: linkOption) => {
    editor
      .chain()
      .focus()
      .unsetLink()
      .setLink({href: url, target: openInNewTab ? '_blank': ''})
      .run()
  }

  const getInitialState = useCallback(() => {
    const { href, target } = editor.getAttributes('link')
    return { url: href, openInNewTab: target ? true: false }
  }, [editor])

  return (
    <BubbleMenu
      shouldShow={({editor}) =>
        editor.isActive('link')
      }
      editor={editor}
      //https://tiptap.dev/api/extensions/bubble-menu -> tippyOptions(tippy.js)
      tippyOptions={{
        onHide: () => {
          setShowEditForm(false)
        }
      }}
    >
      <LinkForm 
        visible={showEditForm}
        onSubmit={handleSubmit}
        initialState={getInitialState()}
      />
      {!showEditForm && 
      <div className='rounded bg-primay dark:bg-primary-dark text-primary-dark dark:text-primary
      shadow-secondary-dark p-3 flex items-center space-x-6 relative z-50 shadow-md'>
        <button onClick={handleOnLinkOpenClick}>
          <BsBoxArrowUpRight />
        </button>

        <button onClick={handleLinkEditClick}>
          <BsPencilSquare />
        </button>

        <button onClick={handleUnlinkCLick}>
          <BiUnlink />
        </button>
      </div>
      }
    </BubbleMenu>
  )
}

export default EditLink
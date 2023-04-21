import { FC } from 'react'
import { BsBoxArrowUpRight, BsPencilSquare } from 'react-icons/bs'
import { BiUnlink } from 'react-icons/bi'
import { BubbleMenu, Editor } from '@tiptap/react'

interface Props {
  editor: Editor
}

const EditLink: FC<Props> = ({editor}): JSX.Element => {
  const handleOnLinkOpenClick = () => {}
  const handleLinkEditClick = () => {}
  const handleUnlinkCLick = () => {}
  return (
    <BubbleMenu editor={editor}>
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
    </BubbleMenu>
  )
}

export default EditLink
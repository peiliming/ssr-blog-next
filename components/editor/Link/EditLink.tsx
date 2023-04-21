import { FC } from 'react'
import { BsBoxArrowUpRight, BsPencilSquare } from 'react-icons/bs'
import { BiUnlink } from 'react-icons/bi'

interface Props {}

const EditLink: FC<Props> = (props): JSX.Element => {
  return (
    <div>
      <div className='rounded bg-primay dark:bg-primary-dark text-primary-dark dark:text-primary
      shadow-secondary-dark'>
        <button>
          <BsBoxArrowUpRight />
        </button>

        <button>
          <BsPencilSquare />
        </button>

        <button>
          <BsBoxArrowUpRight />
        </button>
      </div>
    </div>
  )
}

export default EditLink
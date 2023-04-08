import { FC } from 'react'
import Link from 'next/link'
import Logo from '@/Logo'

interface Props {}

const AdminNav: FC<Props> = (props): JSX.Element => {
  return (
    <nav className='h-screen w-60 shadow-sm bg-secondary-light dark:bg-secondary-dark'>
      {/* logo */}
      <Link href='/admin'>
        <div className='flex items-center space-x-2 p-3'>
          <Logo className='fill-highlight-light dark:fill-highlight-dark w-5 h-5' />
          <span className='text-highlight-light dark:fill-highlight-dark text-xl font-semibold'>Admin</span>
        </div>
      </Link>
    </nav>
  )
}

export default AdminNav
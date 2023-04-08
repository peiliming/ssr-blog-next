import { FC } from 'react'
import Link from 'next/link'
import Logo from '@/Logo'
// npm install react-icons --save
// https://react-icons.github.io/react-icons/
import { AiOutlineDashboard, AiOutlineContainer, AiOutlineTeam, AiOutlineMail } from 'react-icons/ai'
import { GrDashboard } from 'react-icons/gr'


interface Props {
}

const AdminNav: FC<Props> = (props): JSX.Element => {
  return (
    <nav className='h-screen w-60 shadow-sm bg-secondary-light dark:bg-secondary-dark'>
      {/* logo */}
      <Link href='/admin'>
        <div className='flex items-center space-x-2 p-3 mb-10'>
          <Logo className='fill-highlight-light dark:fill-highlight-dark w-5 h-5' />
          <span className='text-highlight-light dark:fill-highlight-dark text-xl font-semibold'>Admin</span>
        </div>
      </Link>
      {/* nav items   react iconsを検索 */}
      <div className='space-y-6'>
        <Link href='/admin'>
          <div className='flex items-center text-highlight-light dark:text-highlight-dark text-xl p-3 hover:scale-[0.90] transition'>
            <AiOutlineDashboard size={24} />
            <span className='ml-2'>ダッシュボード</span>
          </div>
        </Link>
        <Link href='/admin/posts'>
          <div className='flex items-center text-highlight-light dark:text-highlight-dark text-xl p-3 hover:scale-[0.90] transition'>
            <AiOutlineContainer size={24} />
            <span className='ml-2'>ポスト</span>
          </div>
        </Link>
        <Link href='/admin/users'>
          <div className='flex items-center text-highlight-light dark:text-highlight-dark text-xl p-3 hover:scale-[0.90] transition'>
            <AiOutlineTeam size={24} />
            <span className='ml-2'>ユーザー</span>
          </div>
        </Link>
        <Link href='/admin/comments'>
          <div className='flex items-center text-highlight-light dark:text-highlight-dark text-xl p-3 hover:scale-[0.90] transition'>
            <AiOutlineMail size={24} />
            <span className='ml-2'>コメント</span>
          </div>
        </Link>
      </div>
    </nav>
  )
}

export default AdminNav
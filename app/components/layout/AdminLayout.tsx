import { FC, ReactNode } from 'react'
import AdminNav from '@/components/AdminNav'
// npm install react-icons --save
// https://react-icons.github.io/react-icons/
import { AiOutlineContacts, AiOutlineContainer, AiOutlineDashboard, AiOutlineFileAdd, AiOutlineMail, AiOutlineTeam } from 'react-icons/ai'
import Link from 'next/link'
import AppHead from '../common/AppHead'
import { StreamingQuerystring } from 'formidable/parsers'

const navItems = [
  { href: '/admin', icon: AiOutlineDashboard, label:'ダッシュボード' },
  { href: '/admin/posts', icon: AiOutlineContainer, label:'ポスト' },
  { href: '/admin/users', icon: AiOutlineTeam, label:'ユーザー' },
  { href: '/admin/comments', icon: AiOutlineMail, label:'コメント' },
  { href: '/admin/contact', icon: AiOutlineContacts, label:'コンタクト' },
]

interface Props {
  children: ReactNode
  title?: string
}

const AdminLayout: FC<Props> = ({ title, children }): JSX.Element => {
  return (
    <>
      <AppHead title={title} />
    
      <div className='flex'>
        <AdminNav navItems={navItems} />
        <div className='flex-1 p-4'>
          {children}
        </div>
        <Link href='/admin/post/create'>
          <div className='bg-secondary-dark dark:bg-secondary-light
          text-primary dark:text-primary-dark fixed z-10 right-10 bottom-10 p-3 rounded-full
          hover:scale-90 shadow-sm transition'>
            <AiOutlineFileAdd size={24} />
          </div>
        </Link>
      </div>
    </>
  )
}

export default AdminLayout
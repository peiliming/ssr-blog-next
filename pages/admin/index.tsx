import { NextPage } from 'next'
import AdminNav from '@/components/AdminNav'
import { AiOutlineContacts, AiOutlineContainer, AiOutlineDashboard, AiOutlineMail, AiOutlineTeam } from 'react-icons/ai'

interface Props {}

const navItems = [
  { href: '/admin', icon: AiOutlineDashboard, label:'ダッシュボード' },
  { href: '/admin/posts', icon: AiOutlineContainer, label:'ポスト' },
  { href: '/admin/users', icon: AiOutlineTeam, label:'ユーザー' },
  { href: '/admin/comments', icon: AiOutlineMail, label:'コメント' },
  { href: '/admin/contact', icon: AiOutlineContacts, label:'コンタクト' },
]

const Admin: NextPage<Props> = () => {
  return (
    <div>
      <AdminNav navItems={navItems} />
    </div>
  )
}

export default Admin
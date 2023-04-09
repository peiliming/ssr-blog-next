import AdminLayout from '@/components/layout/AdminLayout'
import { NextPage } from 'next'

interface Props {}

const Posts: NextPage<Props> = () => {
  return (<div>
    <AdminLayout>
      ポスト
    </AdminLayout>
  </div>)
}

export default Posts
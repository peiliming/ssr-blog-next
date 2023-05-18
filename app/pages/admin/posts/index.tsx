import { NextPage } from 'next'
import AdminLayout from '@/components/layout/AdminLayout'

interface Props {}

const Posts: NextPage<Props> = () => {
  return (<div>
    <AdminLayout>
      ポスト
    </AdminLayout>
  </div>)
}

export default Posts
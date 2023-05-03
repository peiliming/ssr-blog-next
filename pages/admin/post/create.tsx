import Editor from '@/components/editor'
import AdminLayout from '@/components/layout/AdminLayout'
import { NextPage } from 'next'

interface Props {}

const Create: NextPage<Props> = () => {
  return (
    <AdminLayout title='新しいポスト'>
      <div className='max-w-4xl mx-auto'>
        <Editor onSubmit={(post) => {
            console.log(post)
          }}
          initialValue={{
            title: '',
            meta: '',
            content: '',
            slug: '',
            tags: '',
            thumbnail: ''
          }}
        />
      </div>
    </AdminLayout>
  )
}

export default Create
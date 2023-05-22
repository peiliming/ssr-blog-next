import Editor, { FinalPost } from '@/components/editor'
import AdminLayout from '@/components/layout/AdminLayout'
import { generateFormData } from '@/utils/helper'
import axios from 'axios'
import { NextPage } from 'next'

interface Props {}

const Create: NextPage<Props> = () => {

  const handleSubmit = async (post: FinalPost) => {
    try {
      // FormData
      const formData = generateFormData(post)
      // submit post
      const {data} = await axios.post('/api/posts', formData)
      console.log(data)
    } catch (error: any) {
      console.log(error.response.data)
    }
  }
  return (
    <AdminLayout title='新しいポスト'>
      <div className='max-w-4xl mx-auto'>
        <Editor 
          onSubmit={handleSubmit}
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
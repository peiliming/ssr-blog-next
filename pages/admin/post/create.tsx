import Editor from '@/components/editor'
import { NextPage } from 'next'

interface Props {}

const Create: NextPage<Props> = () => {
  return (
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
  )
}

export default Create
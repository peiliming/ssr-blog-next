import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'
import { FinalPost } from '@/components/editor'

interface PostResponse extends FinalPost {
  id: string
}

type Props = InferGetServerSidePropsType<typeof getServerSideProps>

const Update: NextPage<Props> = ({ post }) => {
  return (<div>Updateページ</div>)
}

interface ServerSideResponse {
  post: PostResponse
}

export const getServerSideProps: GetServerSideProps<
  ServerSideResponse
> = async (context) => {
  console.log(context)
  return {
    props: {
      post: {}
    }
  }
}

export default Update
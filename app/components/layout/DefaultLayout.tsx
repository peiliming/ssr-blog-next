import { Children, FC, ReactNode } from 'react'
import AppHead from '@/components/common/AppHead'
import UserNav from '@/components/common/nav/UserNav'

interface Props {
  title?: string
  desc?: string
  children?: ReactNode
}

const DefaultLayout: FC<Props> = ({ title, desc, children }): JSX.Element => {
  return (
    <>
      <AppHead
        title={title}
        desc={desc}
      />
      <div className='min-h-screen bg-primary dark:bg-primary-dark
        transition'>
          <UserNav />
          <div className='max-w-4xl mx-auto'>
            {children}
          </div>
      </div>
    </>
  )
}

export default DefaultLayout
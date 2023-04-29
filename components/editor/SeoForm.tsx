import { FC } from 'react'

interface Props {}

const SeoForm: FC<Props> = (props): JSX.Element => {
  return (
    <div className='space-y-4'>
      <h1
        className='text-primary-dark dark:text-primary text-xl
        font-semibold'>SEO セクション</h1>

        <label className='block relative'>
          <span
            className='absolute top-1/2 -translate-y-1/2 pl-2
            text-sm font-semibold text-primary-dark dark:text-primary'
          >
            Slug:
          </span>
          <input
            type='text'
            placeholder='slug'
            className='w-full bg-transparent outline-none border-2 border-secondary-dark
            focus:border-primay-dark focus:dark:border-primary rounded transition
            dark:text-primary p-2 italic pl-11'
          />
        </label>
    </div>
  )
}

export default SeoForm
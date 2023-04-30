import { ChangeEventHandler, FC, useEffect, useState } from 'react'
import classnames from 'classnames'
import slugify from 'slugify'

export interface SeoResult {
  meta: string
  slug: string
  tags: string
}

interface Props {
  title?: string
  onChange(result: SeoResult): void
}

const commonInput = 'w-full bg-transparent outline-none border-2 border-secondary-dark focus:border-primay-dark focus:dark:border-primary rounded transition dark:text-primary p-2'

const SeoForm: FC<Props> = ({title='', onChange }): JSX.Element => {
  const [values, setValues] = useState({meta: '', slug: '', tags: ''})

  const handleChange: ChangeEventHandler<
  HTMLTextAreaElement | HTMLInputElement
  > = ({target}) => {
    let {name, value} = target

    if(name === 'meta') {
      value = value.slice(0, 150)  // substring(0, 150)
    }

    const newValues = {...values, [name]: value}
    setValues(newValues) // [name]ブラケット記法
    onChange(newValues)
  }

  useEffect(() => {
    const slug = slugify(title.toLowerCase())
    const newValues = {...values, slug}
    setValues({...newValues})
  }, [title])

  const {meta, slug, tags} = values

  return (
    <div className='space-y-4'>
      <h1
        className='text-primary-dark dark:text-primary text-xl
        font-semibold'>SEO セクション</h1>
      
      <Input value={slug}
        name='slug'
        placeholder='slug'
        label='Slug:'
        onChange={handleChange}
      />

      <Input value={tags}
        name='tags'
        placeholder='React, Next JS'
        label='Tags:'
        onChange={handleChange}
      />

      <div className="relative">  
        <textarea
          name='meta'
          value={meta}
          className={classnames(commonInput, 'text-xl h-20 resize-none')}
          placeholder='Meta情報, 150文字以内'
          onChange={handleChange}
        ></textarea>
        <p className='absolute bottom-3 right-3 text-primary-dark
        dark:text-primary text-sm'>{meta.length}/150</p>
      </div>
    </div>
  )
}

const Input: FC<{
  name?: string
  value?: string
  placeholder?: string
  label?: string
  onChange?: ChangeEventHandler<HTMLInputElement>
}> = ({name, value, placeholder, label, onChange}) => {
  return (
    <label className='block relative'>
      <span className='absolute top-1/2 -translate-y-1/2 pl-2 text-sm font-semibold text-primary-dark dark:text-primary'>
        {label}
      </span>
      <input
        type='text'
        name={name}
        value={value}
        placeholder={placeholder}
        className={classnames(commonInput, 'italic pl-11')}
        onChange={onChange}
      />
    </label>
  )
}

export default SeoForm
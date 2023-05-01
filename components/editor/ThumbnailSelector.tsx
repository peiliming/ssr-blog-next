import classNames from 'classnames'
import { FC } from 'react'

interface Props {}

const commonClass = 'border border-dashed border-secondary-dark flex items-center justify-center rounded cursor-pointer aspect-video'

const ThumbnailSelector: FC<Props> = (props): JSX.Element => {
  return (
    <div className='w-32'>
      <input type='file' accept='image/*'
      id='thumbnail'
      hidden
      />
      <label htmlFor='thumbnail'>
        <PosterUI label='サムネール' />
      </label>
    </div>
  )
}

const PosterUI: FC<{ label: string, className?: string}> = ({
  label,
  className
}) => {
  return (
    <div className={classNames(commonClass, className)}>
      <span>{label}</span>
    </div>
  )
}

export default ThumbnailSelector
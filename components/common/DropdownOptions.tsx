import { FC, ReactNode, useState } from 'react'

interface Props {
  options: {
    label: string
    onClick(): void
  }[]
  head: ReactNode
}

const DropdownOptions: FC<Props> = ({options, head}): JSX.Element => {
  const [showOptions, setShowOptions] = useState(false)

  return (
    <button 
      onBlur={() => setShowOptions(false)}
      onClick={() => setShowOptions(!showOptions)}
      className='relative'>
      {head}
      {showOptions && (
      <div className='min-w-max absolute top-full mt-4 right-2 z-10 border-2 border-primary-dark
      dark:border-primary rounded text-left bg-primary dark:bg-primary-dark'>
        <ul className='p-3 space-y-3'>
          {options.map(({label, onClick}, index) => {
            return <li key={label + index} onClick={onClick}>{label}</li>
          })}
        </ul>
      </div> )}
    </button>
  )
}

export default DropdownOptions
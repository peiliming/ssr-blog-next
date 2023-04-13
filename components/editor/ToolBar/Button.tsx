import { FC, MouseEventHandler, ReactNode, useCallback } from 'react'
// https://www.npmjs.com/package/classnames
import classnames from 'classnames'

interface Props {
  children: ReactNode
  active?: boolean
  disabled?: boolean
  //class: string
  onMouseDown?: MouseEventHandler<HTMLButtonElement>
  onClick?: MouseEventHandler<HTMLButtonElement>
}

const Button: FC<Props> = (
  {
    children,
    active,
    disabled,
    onMouseDown,
    onClick
  }): JSX.Element => {
    const getActiveStyle = useCallback((): string => {
      if(active) {
        return 'dark:pg-primary dark:text-primay-dark bg-primary-dark text-primary'
      } else {
        return 'text-secondary-light bg-secondary-dark'
      }
    }, [active])

    const commonClasses = 'p-2 rounded text-lg hover:scale-110 hover:shadow-md transition'

    return (
      <button
        type='button'
        onMouseDown={onMouseDown}
        onClick={onClick}
        //className={commonClass + getActiveStyle()}
        className={classnames(commonClasses, getActiveStyle())}
        disabled={disabled}>
          {children}
        </button>
    )
}

export default Button
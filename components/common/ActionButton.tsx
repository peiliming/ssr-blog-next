import { FC, MouseEventHandler } from 'react'

interface Props {
  title: string
  busy?: boolean
  disabled?: boolean
  onClick?: MouseEventHandler<HTMLButtonElement>
}

const ActionButton: FC<Props> = ({disabled, busy = false, title, onClick}): JSX.Element => {
  return (
    <div>

    </div>
  )
}

export default ActionButton
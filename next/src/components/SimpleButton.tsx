import React from 'react'

type SimpleButtonProps = {
  text: string
  onClick: () => void
}

export const SimpleButton: React.FC<SimpleButtonProps> = (props) => {
  const { text, onClick } = props

  return <button onClick={onClick}>{text}</button>
}

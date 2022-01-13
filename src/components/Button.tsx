import React from 'react';

interface IButtonProps {
  text: string,
  color: string,
  // onClick function is optional for a button.
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const Button: React.FC<IButtonProps> = ({text, color, onClick}: IButtonProps) => {
  return (
    <div>
      <button onClick={onClick} style={{ backgroundColor: color }} className="btn">{text}</button>
    </div>
  )
}

Button.defaultProps = {
  color: 'steelblue',
  text: 'ADD'
}

export default Button
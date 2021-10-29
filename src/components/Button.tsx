import React from 'react';
import PropTypes from 'prop-types';

const Button = ({color, text, onClick}: any) => {
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

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func
}

export default Button
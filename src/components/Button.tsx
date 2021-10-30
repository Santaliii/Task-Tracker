import React from 'react';
import PropTypes from 'prop-types';

const Button = (props: any) => {
  return (
    <div>
      <button onClick={props.onClick} style={{ backgroundColor: props.color }} className="btn">{props.text}</button>
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
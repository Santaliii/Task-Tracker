import React from 'react';
import PropTypes  from 'prop-types';
import Button from './Button';

const Header = ({showForm, title, onClick}: any) => {

  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button text={showForm ? 'Close Form' : 'Open Form'} color={showForm ? 'red' : 'green'} onClick={onClick} />
    </header>
  )
}

// If nothing was passed to the component's properties, use this instead
Header.defaultProps = {
  title: 'Task Tracker',
  showForm: false
}

// Property types, must be strictly followed when passing them from other components.
Header.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func,
  buttonDesc: PropTypes.string,
  showForm: PropTypes.bool
}

export default Header
import React from 'react';
import Button from './Button'
import { useLocation } from 'react-router-dom';

interface IHeaderProps {
  showForm: boolean,
  title: string,
  onClick: () => any
}

const Header: React.FC<IHeaderProps> = ({showForm, title, onClick}: IHeaderProps) => {

  // Allows us to identify what path we are currently in.
  const location = useLocation()
  

  return (
    <header className='header'>
      <h1>{title}</h1>
      
      {/* By using the useLocation hook, we can use location.pathname to figure out which path we are in 
       then conditionally display components. In this example, if we are in the root page, we want to display the 'Open Form/Close Form'
       component. If not, we hide it. */}

      {location.pathname === '/' ? <Button text={showForm ? 'Close Form' : 'Open Form'} color={showForm ? 'red' : 'green'} onClick={onClick} /> : ''}
    </header>
  )
}

// If nothing was passed to the component's properties, use this instead
Header.defaultProps = {
  title: 'Task Tracker',
  showForm: false
}

export default Header
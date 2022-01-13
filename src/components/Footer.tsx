import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'


const Footer = () => {
  return(
    <footer>
      <p>Copyright &copy; 2021</p>
      <Link to='/about'>
        <Button text='About' color='purple' />
      </Link>
    </footer>
  )
}

export default Footer
import React from 'react'
import { AiFillTwitterCircle, AiFillGithub } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='footer-container'>
     <p>MY SHOP &copy; all right Reserved.</p>
     <p className='icons'>
      <AiFillTwitterCircle />
      <AiFillGithub />
     </p>
    </div>
  )
}

export default Footer

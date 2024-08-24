import React from 'react'
import './Header.css'
import ST from '../../public/ST.png'

const Header = () => {
  return (
    <div className='Header'>
        <img src={ST} className='ST'></img>
        SocialText
    </div>
  )
}

export default Header
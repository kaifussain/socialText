import React from 'react'
import './Header.css'
import ST from '/ST.png'
import { useSelector } from 'react-redux';

const Header = () => {
  const user = useSelector((state) => state.userLogger);

  return (
    <div className='Header'>
        <img src={ST} className='ST-small'></img>
        <div>{user?.username ? user.username : 'Guest'}</div>
    </div>
  )
}

export default Header
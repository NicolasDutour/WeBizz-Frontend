import React from 'react'

import './header.scss'

function Header() {
  return (
    <div className='header'>
      <div className="logo">WeBizz</div>
      <div className="navbar">
        <p>cart</p>
        <p>login</p>
      </div>
    </div>
  )
}

export default Header

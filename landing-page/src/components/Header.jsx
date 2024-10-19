import React from 'react'
import '../styles/Header.css'

function Header({text}) {
  return (
    <div>
        <h1 className='header-text'>{text}</h1>
    </div>
  )
}

export default Header

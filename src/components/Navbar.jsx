import React, { useState } from 'react'
import Logo from '../images/logo.svg'
import Menu from '../images/bars-solid.svg'

const Navbar = () => {
  const [menu, setMenu] = useState(false)
  return (
    <nav className='nav container'>
      <img src={Logo} alt="Shortly" />

      <button className='menu' onClick={() => setMenu(!menu)}><img src={Menu} alt="" /></button>
      <div className={`navbar ${menu ? 'active' : ''}`}>
        <ul role='list' className='navbar-items'>
          <li>Features</li>
          <li>Pricing</li>
          <li>Resources</li>
        </ul>
        <div className='navbar-user'>
          <button>Login</button>
          <button className='cyan'>Sign Up</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
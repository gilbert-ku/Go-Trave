import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
function Navbar() {
  return (
    <div className='navbar'>
        <h1>
            GO TRAVEL
        </h1>
        <Link to="./">Home</Link>
        <Link to="./beaches">Beaches</Link>
        <Link to='./ranches'>Ranches</Link>
        <Link to='./parks'>Parks</Link>
        <Link to='./hotels'>Hotels</Link>
        <Link>Login</Link>
    </div>
  )
}

export default Navbar
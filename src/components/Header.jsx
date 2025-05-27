import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <ul>
            <li>
                <Link to='/'>Dashboard</Link>
            </li>
            <li>
                <Link to='/add'>Product Add</Link>
            </li>
        </ul>
    </div>
  )
}

export default Header
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <ul>
            <li>
                <Link to='/admin'>Dashboard</Link>
            </li>
            
            <li>
                <Link to='/admin/add'>Product Add</Link>
            </li>
        </ul>
    </div>
  )
}

export default Header
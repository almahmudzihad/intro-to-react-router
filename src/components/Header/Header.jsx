import React from 'react'
import { Link } from 'react-router'
import './header.css'

function Header() {
    return (
        <div>
            <h1>Header Component</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/laptops">Laptops</Link>
                <Link to="/mobile">Mobile</Link>
            </nav>
        </div>
    )
}

export default Header

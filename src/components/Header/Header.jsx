import React from 'react'
import { Link, NavLink } from 'react-router'
import './header.css'

function Header() {
    return (
        <div>
            <h1>Header Component</h1>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/laptops">Laptops</NavLink>
                <NavLink to="/mobile">Mobile</NavLink>
                <NavLink to="/users">Users</NavLink>
                <NavLink to="/users2">Users2</NavLink>
                <NavLink to="/posts">Post</NavLink>
            </nav>
        </div>
    )
}

export default Header

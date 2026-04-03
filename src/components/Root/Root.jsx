import React from 'react'
import Header from '../Header/Header'
import { Outlet } from 'react-router'
import Footer from '../Footer/Footer'
import Sidebar from '../Sidebar/sidebar'
import './root.css'


function Root() {
    return (
        <div>
            <Header />
            <div className='root-main'>
                <Sidebar />
                <Outlet />
            </div>
            
            <Footer />
        </div>
    )
}

export default Root

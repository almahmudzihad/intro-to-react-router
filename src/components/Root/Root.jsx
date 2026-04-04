import React from 'react'
import Header from '../Header/Header'
import { Outlet, useNavigation } from 'react-router'
import Footer from '../Footer/Footer'
import Sidebar from '../Sidebar/sidebar'
import './root.css'


function Root() {
    const navigation = useNavigation();
    const isNavigating = Boolean(navigation.location);
    return (
        <div>
            <Header />
            <div className='root-main'>

                <Sidebar />
                {isNavigating && <h1>Loding...</h1>}
                <Outlet />
            </div>
            
            <Footer />
        </div>
    )
}

export default Root

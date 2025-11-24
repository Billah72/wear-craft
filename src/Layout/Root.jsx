import React from 'react'
import { Outlet } from 'react-router'
import MinHeader from '../Components/SharedComponents/Header/MinHeader'
import Mainheader from '../Components/SharedComponents/Header/mainHeader'
import Footer from '../Components/SharedComponents/Footer/Footer'




const Root = () => {
    return (
        <div>
            <Mainheader/>
            <Outlet />
            <Footer></Footer>
        </div>
    )
}

export default Root

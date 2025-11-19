import React from 'react'
import { Outlet } from 'react-router'
import MinHeader from '../Components/SharedComponents/Header/MinHeader'
import Mainheader from '../Components/SharedComponents/Header/mainHeader'
import Hero from '../Page/Home/HomeComponents/Hero'


const Root = () => {
    return (
        <div>
            <Mainheader/>
            <Hero/>
            <Outlet />
            <footer>
                This is Footer
            </footer>
        </div>
    )
}

export default Root

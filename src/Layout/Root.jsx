import React from 'react'
import { Outlet } from 'react-router'
import MinHeader from '../Components/SharedComponents/Header/MinHeader'
import Mainheader from '../Components/SharedComponents/Header/mainHeader'


const Root = () => {
    return (
        <div>
            <Mainheader/>
            <Outlet />
            <footer>
                This is Footer
            </footer>
        </div>
    )
}

export default Root

import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { useDataLayerValue } from './DataLayer'
const NavbarSidebar = () => {
    const[{user}]= useDataLayerValue();
    console.log(user)
  return (
     <>
    <Navbar />
    <Sidebar />
    </> 
  )
}

export default NavbarSidebar

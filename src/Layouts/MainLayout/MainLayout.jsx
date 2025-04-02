import React from 'react'
import NavbarCom from '../../Components/NavbarComp/NavbarCom'
import { Outlet } from 'react-router-dom'

export default function MainLayout() {
  return (
    <>
    <NavbarCom/>
    <div className="container">
    <Outlet/>   
    </div>   
    </>
  )
}

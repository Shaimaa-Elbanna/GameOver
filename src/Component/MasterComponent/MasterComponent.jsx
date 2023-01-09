import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'

export default function MasterComponent({user,logout}) {
  return (
    <> <Navbar user={user} logout={logout}/>
    
    {/* <div className="container "> */}
      <Outlet/>
    {/* </div> */}
    </>
  )
}

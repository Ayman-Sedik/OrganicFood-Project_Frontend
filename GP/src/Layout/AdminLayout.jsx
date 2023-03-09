import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar/Navbar'
import style from './AdminLayout.module.css'
export default function AdminLayout() {
  return (
    <>
      <div className={`${style.header} fixed-top d-flex align-items-center justify-content-center fs-3 fw-semibold text-white`}>Admin Dashboard <i class="fa-solid fa-id-badge ms-3 "></i></div>
     
      <Outlet/>

     
    </>
  )
}

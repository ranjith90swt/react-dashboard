import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminNavigation from './AdminNavigation'
import AdminTopNav from './AdminTopNav'

const AdminLayout = () => {

  
  return (
    <div className='dashboard-container'>
        <aside className='sidebar'>
           <AdminNavigation/>  
        </aside>
        <main className='main-content'>
            <AdminTopNav/>
            <Outlet/>
        </main>
    </div>
  )
}

export default AdminLayout
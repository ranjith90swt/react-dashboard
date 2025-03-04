import React from 'react'
import { FaRegDotCircle } from "react-icons/fa";

const AdminNavigation = () => {
  return (
    <>
        <div className="logo">
            <FaRegDotCircle />
        </div>
        <h3>Pages </h3>

        <ul>
            <li> <a href="/dashboard">Dashboard</a></li>
            <li> <a href="/ecom">Ecommerce </a></li>
        </ul>
    </>
  )
}

export default AdminNavigation
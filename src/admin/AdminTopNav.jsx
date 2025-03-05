import React from 'react'

import { GoSearch } from "react-icons/go";
import { FaRegComments } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { CiBrightnessUp } from "react-icons/ci";
import { CiPaperplane } from "react-icons/ci";
import { FaRegDotCircle } from "react-icons/fa";

const AdminTopNav = () => {
  return (
    <div>
        <div className="top-nav">
            <div className="mobile-logo">
                <FaRegDotCircle />
            </div>
            <div className="notify-bx">
                <span><GoSearch /></span>
                <span><FaRegComments /></span>
                <span><IoMdTime /></span>
                <span><CiBrightnessUp /></span>
                <span className='user-btn'><CiPaperplane className='uicon'/> Acme Inc</span>
            </div>
        </div>
    </div>
  )
}

export default AdminTopNav
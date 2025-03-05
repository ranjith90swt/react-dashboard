import React from 'react'
import AcmePlus from './charts/AcmePlus'
import AcmeAdvanced from './charts/AcmeAdvanced'
import AcmeProfessional from './charts/AcmeProfessional'
import DirectIndirect from './charts/DirectIndirect'
import RealTimeValue from './charts/RealTimeValue'
import TopCountries from './charts/TopCountries'
import TopChannels from './charts/TopChannels'
import SalesOverTime from './charts/SalesOverTime'
import SalesVsRefund from './charts/SalesVsRefund'

import { BsThreeDots } from "react-icons/bs";
import { CiFilter } from "react-icons/ci";


const Dashboard = () => {
  return (
    <div>
      <div className='wrap'>
        <div className="box33"><h3 className="main-title">Dashboard   </h3></div>
        <div className="box67">
          <div className="title-head">
            <button className="light-btn"><CiFilter /></button>  <button className="light-btn">Jan 20 2024 - Feb 20 2025</button>  <button className="add-btn">add view</button>
          </div>
        </div>
               
      </div>

      {/* charts */}
      <div className="wrap">

        <div className="box33">
          <div className="card">
              <h4>Acme Plus <span><BsThreeDots /></span></h4>
              <AcmePlus/>
          </div>
        </div>

        <div className="box33">
          <div className="card">
              <h4>Acme Advanced <span><BsThreeDots /></span></h4>
              <AcmeAdvanced/>
          </div>
        </div>

        <div className="box33">
          <div className="card">
              <h4 >Google Map <span><BsThreeDots /></span></h4>
              <AcmeProfessional/>
          </div>
        </div>

      </div>

      <div className="wrap">
        <div className="box50">
          <div className="card">
              <h4 className='border-bottom'>Direct vs Indirect</h4>
              <DirectIndirect/>
          </div>
        </div>

        <div className="box50">
          <div className="card">
              <h4 className='border-bottom'>Real Time Value</h4>
              <RealTimeValue />
          </div>
        </div>
      </div>

      <div className="wrap">
        <div className="box33">
          <div className="card">
              <h4 className='border-bottom'>Top Countries</h4>
              <TopCountries />
          </div>
        </div>

        <div className="box67">
          <div className="card">
              <h4 className='border-bottom'>Top Channels</h4>
              <TopChannels/>
          </div>
        </div>
      </div>

      <div className="wrap">
        <div className="box50">
          <div className="card">
              <h4 className='border-bottom'>Sales Over Time</h4>
              <SalesOverTime/>
          </div>
        </div>

        <div className="box50">
          <div className="card">
              <h4 className='border-bottom'>Sales vs Refund</h4>
              <SalesVsRefund/>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Dashboard
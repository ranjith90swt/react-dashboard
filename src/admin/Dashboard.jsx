import React from 'react'
import AcmePlus from './charts/AcmePlus'
import AcmeAdvanced from './charts/AcmeAdvanced'
import AcmeProfessional from './charts/AcmeProfessional'
import DirectIndirect from './charts/DirectIndirect'
import RealTimeValue from './charts/RealTimeValue'
import TopCountries from './charts/TopCountries'

const Dashboard = () => {
  return (
    <div>
      <div className='title-head'>
        <h3 className="main-title">Dashboard </h3>
        <div> 
            <button className="light-btn">Jan 20 2024 - Feb 20 2025</button>  <button className="add-btn">add view</button>
        </div>
      </div>

      {/* charts */}
      <div className="wrap">

        <div className="box33">
          <div className="card">
              <h4>Google Map</h4>
              <AcmePlus/>
          </div>
        </div>

        <div className="box33">
          <div className="card">
              <h4>Google Map</h4>
              <AcmeAdvanced/>
          </div>
        </div>

        <div className="box33">
          <div className="card">
              <h4>Google Map</h4>
              <AcmeProfessional/>
          </div>
        </div>

      </div>

      <div className="wrap">
        <div className="box50">
          <div className="card">
              <h4>Google Map</h4>
              <DirectIndirect/>
          </div>
        </div>

        <div className="box50">
          <div className="card">
              <h4>Google Map</h4>
              <RealTimeValue />
          </div>
        </div>
      </div>

      <div className="wrap">
        <div className="box33">
          <div className="card">
              <h4>Google Map</h4>
              <TopCountries />
          </div>
        </div>
      </div>


    </div>
  )
}

export default Dashboard
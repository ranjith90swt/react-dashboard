import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { RiGoogleFill } from "react-icons/ri";
import { FaVimeoV } from "react-icons/fa";

const TopChannels = () => {
  return (
    <div>
       <div className="table-container">
            <table className="custom-table">
                <thead>
                    <tr>
                        <th>Source</th>
                        <th>Visitors</th>
                        <th>Revenue</th>
                        <th>Sales</th>
                        <th>Conversion</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td> 
                            <div className="socialmedia">
                            <FaGithub className='tdicon github'/> Githup
                            </div>
                        </td>
                        <td>2.5K</td> 
                        <td><span className='greentext'> $20.30 </span></td>
                        <td>564</td>
                        <td> <span className='bluetext'> 7.89%</span></td>
                    </tr>

                    <tr>
                        <td> <div className="socialmedia"><FaFacebook className='tdicon facebook'/> Facebook</div></td>
                        <td>2.9K</td> 
                        <td><span className='greentext'> $40.30 </span></td>
                        <td>444</td>
                        <td> <span className='bluetext'> 9.89%</span></td>
                    </tr>

                    <tr>
                        <td> <div className="socialmedia"><RiGoogleFill  className='tdicon google'/> Google</div></td>
                        <td>2.7K</td> 
                        <td><span className='greentext'> $44.30 </span></td>
                        <td>400</td>
                        <td> <span className='bluetext'> 7.09%</span></td>
                    </tr>

                    <tr>
                        <td> <div className="socialmedia"><FaVimeoV  className='tdicon vimeo'/> Vimeo</div></td>
                        <td>1.9K</td> 
                        <td><span className='greentext'> $20.30 </span></td>
                        <td>344</td>
                        <td> <span className='bluetext'> 5.89%</span></td>
                    </tr>

                
                
                </tbody>
            </table>
       </div>

    </div>
  )
}

export default TopChannels
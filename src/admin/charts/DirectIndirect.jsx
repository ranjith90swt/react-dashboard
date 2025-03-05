import React from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";
import { FaCircleNotch } from "react-icons/fa";

const DirectIndirect = () => {
  const data = [
    { month: "Jan 23", directSales: 300, indirectSales: 500 },
    { month: "Feb 23", directSales: 400, indirectSales: 700 },
    { month: "Mar 23", directSales: 350, indirectSales: 650 },
    { month: "Apr 23", directSales: 500, indirectSales: 800 },
    { month: "May 23", directSales: 350, indirectSales: 780 },
    
  ];
  const currencyFormatter = (value) => `$${value.toLocaleString()}`;
  return (
    <div>
     
      <h3 className='chart-title'><FaCircleNotch className='icon-secondary'/> $34,780 <span>Direct</span> <FaCircleNotch className='ml-10 icon-primary'/>  $32,780 <span>Indirect</span> </h3>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis  tickFormatter={currencyFormatter}  />
          <Tooltip />
          
          <Bar dataKey="directSales" fill="#64BEFF" name="Direct Sales" barSize={30}/>
          <Bar dataKey="indirectSales" fill="#826EFF" name="Indirect Sales" barSize={30}/>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default DirectIndirect
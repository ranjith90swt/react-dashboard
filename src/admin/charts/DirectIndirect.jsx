import React from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend, ResponsiveContainer } from "recharts";
import { FaCircleNotch } from "react-icons/fa";

const DirectIndirect = () => {
  const data = [
    { month: "Jan", directSales: 300, indirectSales: 500 },
    { month: "Feb", directSales: 400, indirectSales: 700 },
    { month: "Mar", directSales: 350, indirectSales: 650 },
    { month: "Apr", directSales: 500, indirectSales: 800 },
    { month: "May", directSales: 350, indirectSales: 780 },
    
  ];
  const currencyFormatter = (value) => `$${value.toLocaleString()}`;
  return (
    <div>
     
      <h3 className='chart-title'><FaCircleNotch className='icon'/> $34,780 <span>Direct</span> </h3>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis  tickFormatter={currencyFormatter}  />
          <Tooltip />
          
          <Bar dataKey="directSales" fill="#64BEFF" name="Direct Sales" />
          <Bar dataKey="indirectSales" fill="#826EFF" name="Indirect Sales" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default DirectIndirect
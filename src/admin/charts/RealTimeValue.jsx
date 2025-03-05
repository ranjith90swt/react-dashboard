import React, { useEffect, useState } from 'react'
import { AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

const generateSalesData = () => ({
    time: new Date().toLocaleTimeString().split(" ")[0], 
    sales: Math.floor(Math.random() * 1000) + 500, 
  });
const RealTimeValue = () => {

    const [data, setData] = useState([]);
    useEffect(() => {
      const interval = setInterval(() => {
        setData((prevData) => {
          const newData = [...prevData, generateSalesData()];
          return newData.length > 10 ? newData.slice(1) : newData; 
        });
      }, 1000); 
  
      return () => clearInterval(interval); 
    }, []);
    
  return (
    <div>
        <h3 className='chart-title'>$57.76 <div className="badge badge-danger">-0.10%</div></h3>
        <ResponsiveContainer width="100%" height={250}>
            <AreaChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" axisLine={false} tickLine={false}/>
                <YAxis tickFormatter={(value) => `$${value.toLocaleString()}`} axisLine={false} tickLine={false} />
                <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
                <Area type="monotone" dataKey="sales" stroke="#8884d8" fill="#8884d8" fillOpacity={0.3} animationDuration={300} />
            </AreaChart>
        </ResponsiveContainer>
        
    </div>
  )
}

export default RealTimeValue
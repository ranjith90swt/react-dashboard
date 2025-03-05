import React from 'react'
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

const TopCountries = () => {

    const data = [
        { name: "United States", value: 15000 },
        { name: "Italy", value: 9000 },
        { name: "Others", value: 7000 },
     
      ];
      
      const COLORS = ["#4330AA", "#7F6CFA", "#64BEFF"];

  return (
    <div>
      <div style={{ width: '100%', height: 265 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              outerRadius="80%"  
              innerRadius="60%"  
              fill="#8884d8">
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default TopCountries
import React from 'react'
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

const TopCountries = () => {

    const data = [
        { name: "USA", value: 15000 },
        { name: "Canada", value: 10000 },
        { name: "UK", value: 12000 },
        { name: "Germany", value: 11000 },
        { name: "India", value: 9000 },
        { name: "Australia", value: 8000 },
      ];
      
      const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A28EDB", "#FF6384"];

  return (
    <div>
          <ResponsiveContainer width="100%" height={400}>
    <PieChart>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        innerRadius={70}  // Creates the hole in the middle
        outerRadius={90}  // Defines the border width
        fill="none"  // No inside color
        strokeWidth={12}  // Adjusts border thickness
        dataKey="value"
        strokeOpacity={1}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} stroke={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
      <Legend />
    </PieChart>
  </ResponsiveContainer>

    </div>
  )
}

export default TopCountries
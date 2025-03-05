import React from 'react'
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from 'recharts';
const SalesOverTime = () => {

    const data = [
        { month: 'Jan', currentSales: 100, previousSales: 300 },
        { month: 'Feb', currentSales: 200, previousSales: 500 },
        { month: 'Mar', currentSales: 400, previousSales: 300 },
        { month: 'Apr', currentSales: 500, previousSales: 400 },
        { month: 'May', currentSales: 600, previousSales: 800 },
        { month: 'Jun', currentSales: 700, previousSales: 400 },
        { month: 'Jul', currentSales: 100, previousSales: 300 },
        { month: 'Aug', currentSales: 200, previousSales: 500 },
        { month: 'Sep', currentSales: 400, previousSales: 300 },
        { month: 'Oct', currentSales: 500, previousSales: 400 },
        { month: 'Nov', currentSales: 600, previousSales: 800 },
        { month: 'Dec', currentSales: 700, previousSales: 400 },
      ];

      const dollarFormatter = (value) => `$${value.toLocaleString()}`;

  return (
    <div>
        <h3 className='chart-title'>$28,780 <div className="badge badge-danger">-14%</div></h3>
        <div style={{ width: '100%', height: 250 }}>
        <ResponsiveContainer>
            <LineChart data={data}>
            <CartesianGrid vertical={false} horizontal={true} strokeDasharray="3 3" />
            <XAxis dataKey="month"></XAxis>
            <YAxis tickFormatter={dollarFormatter}></YAxis>
            <Line
                type="monotone"
                dataKey="currentSales"
                stroke="#82ca9d"
                activeDot={{ r: 8 }}
                name="Current Sales"
            />
            <Line
                type="monotone"
                dataKey="previousSales"
                stroke="#8884d8"
                name="Previous Sales"
            />
            <Tooltip formatter={(value) => dollarFormatter(value)} />
            </LineChart>
        </ResponsiveContainer>
        </div>
    </div>
  )
}

export default SalesOverTime
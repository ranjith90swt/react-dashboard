import React from 'react'
import { AreaChart, Area, ResponsiveContainer } from "recharts";

const AcmeAdvanced = () => {

    const data = [
        { month: "Jan", sales: 400, revenue: 2000 },
        { month: "Feb", sales: 1300, revenue: 3000 },
        { month: "Mar", sales: 800, revenue: 2000 },
        { month: "Apr", sales: 100, revenue: 3000 },
        { month: "May", sales: 1800, revenue: 1000 },
        { month: "Jun", sales: 2000, revenue: 2000 },
        { month: "Jul", sales: 1000, revenue: 5000 },
        { month: "Aug", sales: 900, revenue: 2000 },
        { month: "Sep", sales: 3000, revenue: 4400 },
        { month: "Oct", sales: 2300, revenue: 3000 },
        { month: "Nov", sales: 1000, revenue: 3000 },
        { month: "Dec", sales: 500, revenue: 1000 },
        { month: "Jan", sales: 400, revenue: 2000 },
        { month: "Feb", sales: 1300, revenue: 3000 },
        { month: "Mar", sales: 800, revenue: 2000 },
        { month: "Apr", sales: 100, revenue: 3000 },
        { month: "May", sales: 1800, revenue: 1000 },
        { month: "Jun", sales: 2000, revenue: 2000 },
        { month: "Jul", sales: 1000, revenue: 5000 },
        { month: "Aug", sales: 900, revenue: 2000 },
        { month: "Sep", sales: 3000, revenue: 4400 },
        { month: "Oct", sales: 300, revenue: 7000 },
        { month: "Nov", sales: 1000, revenue: 3000 },
        { month: "Dec", sales: 500, revenue: 1000 },
    ];

  return (
    <div>
        <h6 className='small-text'>Sales </h6>
        <h3 className='chart-title'>$28,780 <div className="badge badge-danger">-14%</div></h3>
        <div style={{ width: "100%", height: 120 }}>
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                <Area type="monotone" dataKey="sales" stroke="#826EFF" fill="RGB(130, 110, 255, 0.5)" />
                <Area type="monotone" dataKey="revenue" stroke="#A396F6" fill="RGB(130, 110, 255, 0.3)" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    </div>
  )
}

export default AcmeAdvanced
import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from 'recharts';
const SalesVsRefund = () => {

    const data = [
        { month: 'Jan 23', sales: 1800, refunds: 1200 },
        { month: 'Feb 23', sales: 2000, refunds: 1000 },
        { month: 'Mar 23', sales: 1800, refunds: 800 },
        { month: 'Apr 23', sales: 2000, refunds: 1500 },
        { month: 'May 23', sales: 1700, refunds: 1300 },
        { month: 'Jun 23', sales: 1300, refunds: 1100 },
    ];


  return (
    <div>
       <h3 className='chart-title'>+$6,780 <div className="badge badge-danger">-34%</div></h3>
       <div style={{ width: '100%', height: 250 }}>
            <ResponsiveContainer>
                <BarChart data={data} stackOffset="sign" barCategoryGap={10}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month"></XAxis>
                <YAxis></YAxis>
                <Bar dataKey="refunds" stackId="a" fill="#D2C8FF" name="Refunds" barSize={40}/>
                <Bar dataKey="sales" stackId="a" fill="#7B68F2" name="Sales" barSize={40} />
                <Tooltip />  
                </BarChart>
            </ResponsiveContainer>
        </div>
    </div>
  )
}

export default SalesVsRefund
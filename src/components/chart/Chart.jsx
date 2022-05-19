import './Chart.scss'
import { AreaChart, Area, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Chart = () => {
    const data = [
        {
          name: 'JAN',
          total: 1200,
         
        },
        {
          name: 'FEB',
          total: 3000,
         
        },
        {
          name: 'MAR',
          total: 2000,
          
        },
        {
          name: 'APR',
          total: 2780,
         
        },
        {
          name: 'MAY',
          total: 1890,
        
        },
        {
          name: 'JUN',
          total: 2390,
         
        },
      
      ];
  return (
    <div className='chart'>
        <h2 className='title'> Last 6 months (Rvenue)</h2>
         <ResponsiveContainer width="100%" aspect={2/1}>
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name"  stroke={'gray'} />
          
          <Tooltip />
          <Area type="monotone" dataKey="total" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart
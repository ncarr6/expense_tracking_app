import { CartesianGrid, Legend, Line, LineChart,
  ResponsiveContainer, XAxis, YAxis } from 'recharts';
import Title from './title';


  const test_data = [
    { label: "January", spent: 1394 },
    { label: "February", spent: 1293 },
    { label: "March", spent: 1800 },
    { label: "April", spent: 1800 },
  ]

function Chart() {
  
  return (
    <div className="w-full md:w-2/3">
      <Title title="Transaction Activity"/>

      <ResponsiveContainer width={"100%"} height={500} className="mt-5">
        <LineChart width={500} height={300} data={test_data}>
          <CartesianGrid strokeDasharray='3 3'/>
          <YAxis />
          <XAxis 
            dataKey="label" 
            type="category" 
          />
          <Legend />
          <Line 
          type="monotone" dataKey={"spent"} stroke="#8884d8"/>
        </LineChart>
      </ResponsiveContainer>
    </div>
  )

}

export default Chart
import { PieChart, Pie, Sector, Tooltip, ResponsiveContainer} from "recharts";
import Title from "./title";

  const test_data = [
      { name: "Transportation", amount: 100 },
      { name: "Food", amount: 250 },
      { name: "Rent", amount: 900 },
      { name: "Misc", amount: 210 },
  ]

  const COLORS = ["#E394A1", "#8E6C88", "#6E9DB5", "#E5A878", "#A99BC4", "#8EAD91", "#A6A0A2"]

function DoughnutChart( ) {

  
  return (
    <div className="w-full md:w-1/3 flex flex-col items-center bg-gray-50">
      <Title title="This Month's Summary"/>

      <ResponsiveContainer width={"100%"} height={500}/>
          <PieChart width={500} height={400}>
                <Tooltip />
                <Pie
                    data={test_data}
                    dataKey="amount"
                    outerRadius={170}
                    innerRadius={80}
                    
                    label={({ name, amount }) =>
                        `${name}: ${amount}`
                    }
        shape={(props) => {
          const { index } = props;
          return (
            <Sector
              {...props} 
              fill={COLORS[index % COLORS.length]} 
            />
          );
        }}
                     
                />

            </PieChart>
    </div>
  )

}

export default DoughnutChart



/* 

            <PieChart width={700} height={700}>
                <Tooltip />
                <Pie
                    data={data}
                    dataKey="students"
                    outerRadius={250}
                    innerRadius={150}
                    fill="green"
                    label={({ name, students }) =>
                        `${name}: ${students}`
                    }
                />
            </PieChart>

*/
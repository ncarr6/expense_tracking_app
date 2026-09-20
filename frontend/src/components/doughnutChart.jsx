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
    <div className="w-full md:w-1/3 flex flex-col items-center">
      <Title title="Spending by Category this Month"/>

      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Tooltip />
          <Pie
            data={test_data}
            dataKey="amount"
            outerRadius="90%"
            innerRadius="45%"
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
      </ResponsiveContainer>
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
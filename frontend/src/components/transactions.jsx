import Title from "./title"

const testData = [
  {
    date: "2026-07-21",
    category: "Grocery",
    name: "King Soopers",
    amount: "48.27"
  },
  {
    date: "2026-07-20",
    category: "Clothing",
    name: "Goodwill",
    amount: "12.10"
  },
]

function Transactions() {
  
  return (
    <div className="py-20 w-full md:w-2/3">
      
      <Title title ="Latest Transactions"/>

      <div className="overflow-x-auto mt-5">
        <table className="w-full">
          <thead className="w-full border-b border-solid border-gray-300">
            <tr className="w-full text-black text-left">
              <th className="py-2">Transaction Date</th>
              <th className="py-2">Name</th> 
              <th className="py-2">Amount</th>
            </tr>
          </thead>
          <tbody>
            {
              testData.map((item, index) => (
                <tr key={index} className="border-b border-gray-200 text-gray-600
                  hover:bg-gray-300/10">
                  <td className="px-2">{item.date}</td>
                  <td className="py-2 ">
                    <div>
                      <p className="text-black font-medium">{item.name}</p>
                      <span className="text-sm">{item.category}</span>
                    </div>
                    
                  </td>
                  <td className="py-2 px-2">${item.amount}</td>
                </tr>
              ))
            }
          </tbody>

        </table>

      </div>
    </div>
  )

}

export default Transactions
import Title from "./title"

function Transactions() {
  
  return (
    <div className="py-20 w-full md:w-2/3">
      
      <Title title ="Latest Transactions"/>

      <div className="overflow-x-auto mt-5">
        <table className="w-full">
          <thead className="w-full border-b border-solid border-gray-800">
            <tr className="w-full text-black text-left">
              <th className="py-2">Date</th>
              <th className="py-2">Name</th>
              <th className="py-2">Amount</th>
            </tr>
          </thead>

        </table>

      </div>
    </div>
  )

}

export default Transactions
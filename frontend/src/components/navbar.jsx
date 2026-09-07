import { useState } from "react";
const links = ["Dashboard", "Transactions", "Accounts", "Settings"];
import { FaMoneyBills } from "react-icons/fa6";

function Navbar() {

  
  const [selected, setSelected] = useState(0);
  return (

   
    <div className="w-full flex items-center justify-between py-6">
      <div className="flex items-center gap-2 cursor-pointer">
        <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-violet-700 rounded-xl">
          <FaMoneyBills className="text-white text-3xl hover:animate-bounce"/>
        </div>
        <span className="text-xl font-bold text-black dark:text-white">My Spending</span>
      </div>

      {/* hidden on small devices */}
      <div className="hidden md:flex items-center gap-4">
        {links.map((link, index) => (
          <div key={index} className={`${index === selected ?  "bg-black dark:bg-slate-800 text-white" 
            : "text-gray-700 dark:text-grey-500"} px-6 py-2 rounded-full`}
            
            >
            <a href="#">{link}</a>
          </div>

        ))}  
      </div>
    </div>
  )

}

export default Navbar

import { useState } from "react";
const links = ["Dashboard", "Transactions", "Accounts"];
import { FaMoneyBills } from "react-icons/fa6";
import { CatAvatar } from "../assets/index.js"
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

function Navbar() {

  
  const [selected, setSelected] = useState(0);
  return (

   
    <div className="w-full flex items-center justify-between py-6">
      <div className="flex items-center gap-2 cursor-pointer">
        <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-[#B85F70] rounded-xl">
          <FaMoneyBills className="text-white text-3xl hover:animate-bounce"/>
        </div>
        <span className="text-xl font-bold text-black ">My Spending</span>
      </div>

      {/* links hidden on small devices  */}
      <div className="hidden md:flex items-center gap-4">
        {links.map((link, index) => (
          <div key={index} className={`${index === selected ?  "bg-[#292528] text-white" 
            : "text-gray-700"} px-6 py-2 rounded-full`}
            onClick={()=> setSelected(index)}
            >
            <a href="#">{link}</a>
          </div>

        ))}  
      </div>

      <div className="flex items-center gap-10 2xl:gap-20">

        <div className="flex items-center gap-2">
         
          <img src={CatAvatar} alt="user image"
          className="w-10 md:w-12 h-10 md:h-12
          rounded-full object-cover cursor-pointer"/>

          <div className="hidden md:block">
            <p className="text-lg font-medium text-black">User Name!</p>
            <span className="text-sm text-gray-700">user@email.com</span>
          </div>

          <MdOutlineKeyboardArrowDown className="hidden md:block text-2xl
          text-gray-600 cursor-pointer"/>

        </div>
      </div>



    </div>
  )

}

export default Navbar

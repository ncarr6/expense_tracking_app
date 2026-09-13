import { BsCashCoin } from "react-icons/bs"
function Stats() {
  
  const testData = [
    {
      label: "Total Spent This Month",
      amount: "1,300.34",
      icon: <BsCashCoin size={26}/>
    },
    {
      label: "Total Spent This Year",
      amount: "15,092.65",
      icon: <BsCashCoin size={26}/>
    }

  ]

  const ICON_STYLES = [
    "bg-blue-300 text-blue-800",
  ]

  return (
    <div className="flex flex-col md:flex-row items-center justify-between
    gap-8 2xl:gap-40 mb-20">

      { testData.map((item, index)=>(
          <div key={index + item.label} className="w-full 2xl:min-w-96 flex items-center justify-between
          gap-5 px-4 md:px-8 py-12 rounded-lg bg-gray-50 border-gray-100">

            <div className="flex items-center gap-2">
              <div className={`w-12 h-12 flex items-center rounded-full ${ICON_STYLES[0]}` }>
                {item.icon}
              </div>
              <div className="space-y-3">
                <span className="text-gray-600 text-base
                md:text-lg">{item.label}</span>
                <p className="text-2xl 2xl:text-3xl font-medium text-black">${item.amount}</p>
              </div>
            </div>

          </div>
        ))}
      
    </div>
  )

}

export default Stats;
import Accounts from "./components/accounts";
import Chart from "./components/chart";
import DoughnutChart from "./components/doughnutChart";
import Info from "./components/info";
import Navbar from "./components/navbar";
import Stats from "./components/stats";
import Transactions from "./components/transactions";


function App() {
  return (
  
      <main className= "bg-[#FCF9F8] overflow-x-hidden">
        <div className="px-10">
          <Navbar />

          <div className="grid min-h-screen mx-auto w-full px-6 md:px-4">
            <Info
              title="Dashboard"
              subTitle="Analyze your spending"
            />

            <Stats />

            <div className="flex w-full flex-col gap-20 md:flex-row md:items-start">
              <Chart />
              <DoughnutChart />
            </div>

            <div className="flex flex-col-reverse gap-10 md:flex-row">
              <Transactions />
              <Accounts />
            </div>
          </div>
        </div>
      </main>
    )

}

export default App

import Accounts from "./components/accounts";
import Chart from "./components/chart";
import DoughnutChart from "./components/doughnutChart";
import Info from "./components/info";
import Navbar from "./components/navbar";
import Stats from "./components/stats";
import Transactions from "./components/transactions";


function App() {
  const theme = "light";
  return (
  
      <main className={theme}>
        <div className="px-10 min-h-screen bg-[#FCF9F8] dark:bg-slate-900">
          <Navbar />

          <div className="grid h-screen mx-auto w-full px-6 md:px-4">
            <Info
              title="Dashboard"
              subTitle="Analyze your spending"
            />

            <Stats />

            <div className="flex w-full flex-col-reverse items-center gap-10 md:flex-row">
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

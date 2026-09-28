import Chart from "./components/chart";
import DoughnutChart from "./components/doughnut-chart";
import Info from "./components/info";
import Navbar from "./components/navbar";
import Stats from "./components/stats";
import Transactions from "./components/transactions";
import {Navigate, Outlet, Route, Routes } from "react-router-dom";

import SignIn from "./pages/auth/sign-in";
import SignUp from "./pages/auth/sign-up";
import Dashboard from "./pages/dashboard";
import Settings from "./pages/settings";
//import AccountPage from "./pages/acount-page";
//import Transactions from "./pages/transactions";

//if there isn't a user, make them log in
const RootLayout = ()=> {
  const user = null;
  return !user ? (<Navigate to="sign-in" replace={true}/>)  : 
  (
      <>
        <div>
          <Outlet />
        </div>
      </>
  )

}

function App() {
  return (

    <main className="min-h-screen overflow-x-hidden bg-[#FCF9F8]">
      <div>
      <Routes>
        <Route element={<RootLayout/>}>
          <Route path="/" element={<Navigate to="/overview" />} />
          <Route path="/overview" element={<Dashboard />}/>
          <Route path="/settings" element={<Settings />}/>
         


        </Route>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />

      </Routes>

      </div>

      <div className="px-6 md:px-10">
        <Navbar />

        <div className="grid min-h-screen w-full">
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
          </div>
        </div>
      </div>
    </main>
  );
}

export default App

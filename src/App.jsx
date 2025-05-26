import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Dashboard from "../pages/Dashboard";
import Navbar from "../components/Navbar";
import { Route, Routes } from "react-router-dom";
import VisitedCountriesList from "../pages/VisitedCountriesList";
import TravelLogDetails from "../pages/TravelLogDetails";
import VisitedCountriesCard from "../components/VisitedCountriesCard";
import AddPage from "../pages/AddPage";
/* import TravelLogEditForm from "../components/TravelLogEditForm"; */

function App() {
  const [count, setCount] = useState(0);

  return (
    <div id="main-app">
      <Navbar />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/visitedcountries" element={<VisitedCountriesList />} />
        {/* <Route path="travelLogs/:id" element={<VisitedCountriesCard />} /> */}
        <Route path="/travelLogs/:travellogid" element={<TravelLogDetails />} />
        <Route path="/travelLogs/addpage" element={<AddPage />} />
        {/*   <Route
          path="/travelLogs/:travellogid/edit"
          element={<TravelLogEditForm />}
        /> */}
      </Routes>
    </div>
  );
}

export default App;

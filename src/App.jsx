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
import TravelLogEditForm from "../components/TravelLogEditForm";
import WishList from "../pages/WishList";
import WishlistDetails from "../pages/WishlistDetails";
import WishlistEditForm from "../components/WishlistEditForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div id="main-app">
      <Navbar />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/visitedcountries" element={<VisitedCountriesList />} />
        <Route path="/travelLogs/:travellogid" element={<TravelLogDetails />} />
        <Route path="/wishlist/:wishlistId" element={<WishlistDetails />} />
        <Route path="/travelLogs/:logType/add" element={<AddPage />} />
        <Route
          path="/travelLogs/:travellogid/edit"
          element={<TravelLogEditForm />}
        />
        <Route
          path="/wishlist/:wishlistId/edit"
          element={<WishlistEditForm />}
        />
        <Route path="/wishlist" element={<WishList />} />
      </Routes>
    </div>
  );
}

export default App;

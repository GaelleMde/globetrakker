import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "../pages/Dashboard";
import MyNavbar from "../components/Navbar";
import { Route, Routes } from "react-router-dom";
import VisitedCountriesList from "../pages/VisitedCountriesList";
import TravelLogDetails from "../pages/TravelLogDetails";
import AddPage from "../pages/AddPage";
import TravelLogEditForm from "../pages/TravelLogEditForm";
import WishList from "../pages/WishList";
import WishlistDetails from "../pages/WishlistDetails";
import WishlistEditForm from "../pages/WishlistEditForm";
import AboutMe from "../pages/AboutMe";
import NotFound from "../pages/NotFound";

function App() {
  return (
    <div id="main-app">
      <MyNavbar />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/visitedcountries" element={<VisitedCountriesList />} />
        <Route path="/wishlist" element={<WishList />} />
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
        <Route path="/AboutMe" element={<AboutMe />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

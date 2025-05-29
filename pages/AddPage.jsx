import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import axios from "axios";
import Addform from "../components/Addform";

function AddPage() {
  const [countries, setCountries] = useState([]);
  const [searchInputValue, setSearchInputValue] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5005/countries")
      .then((response) => {
        console.log(response);
        setCountries(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(countries);

  if (selectedCountry) {
    console.log(selectedCountry);
    return <Addform selectedCountry={selectedCountry} />;
  }

  return (
    <div id="addpage-ctn">
      <SearchBar
        setSearchInputValue={setSearchInputValue}
        searchInputValue={searchInputValue}
      />

      <div className="country-list-wrapper">
        {countries
          .filter((eachCountry) => {
            if (searchInputValue === "") {
              return true;
            }
            return eachCountry.name
              .toLowerCase()
              .startsWith(searchInputValue.toLowerCase());
          })
          .map((eachCountry) => {
            return (
              <div
                className="country-list"
                onClick={() => setSelectedCountry(eachCountry)}
                key={eachCountry.id}
              >
                <img
                  src={eachCountry.flag}
                  alt={`Flag of ${eachCountry.name}`}
                  style={{
                    width: "35px",
                    height: "25px",
                    objectFit: "cover",
                    borderRadius: "6px",
                  }}
                />
                <p style={{ margin: 0 }}> {eachCountry.name}</p>
                {/* <p>{eachCountry.isPurchased === true ? "✅" : "🟡"}</p> */}
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default AddPage;

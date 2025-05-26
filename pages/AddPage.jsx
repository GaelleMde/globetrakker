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
    <div>
      Choose a country
      <SearchBar
        setSearchInputValue={setSearchInputValue}
        searchInputValue={searchInputValue}
      />
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
              onClick={() => setSelectedCountry(eachCountry)}
              key={eachCountry.id}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "8px",
              }}
            >
              <img
                src={eachCountry.flag}
                alt={`Flag of ${eachCountry.name}`}
                style={{ width: "30px", height: "20px", objectFit: "cover" }}
              />
              <p>{eachCountry.name}</p>
              {/* <p>{eachCountry.isPurchased === true ? "✅" : "🟡"}</p> */}
            </div>
          );
        })}
    </div>
  );
}

export default AddPage;

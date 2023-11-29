import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input, Button } from "./styleFlags";
import "../../src/App.css";

import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const Flags = () => {
  const [allFlags, setAllFlags] = useState([]);
  const [filteredFlags, setFilteredFlags] = useState([]);
  const [input, setInput] = useState("");

  const [dropdownOpen, setOpenDropdown] = useState(false);

  const toggleDropdown = () => {
    setOpenDropdown(!dropdownOpen);
  };

  const navigate = useNavigate();

  const getFlags = async () => {
    const response = await axios.get("https://restcountries.com/v3.1/all");
    setAllFlags(response?.data);
  };

  useEffect(() => {
    getFlags();
  }, []);

  useEffect(() => {
    const filtered = allFlags.filter((item) =>
      item.name?.common.toLowerCase().includes(input.toLowerCase())
    );
    setFilteredFlags(filtered);
  }, [input, allFlags]);


  const filterDropdown = (selectedRegion) => {
    setOpenDropdown(!dropdownOpen);
  
    if (selectedRegion) {
      const filtered = allFlags.filter((item) =>
        item.region.toLowerCase().includes(selectedRegion.toLowerCase())
      );
      setFilteredFlags(filtered);
    }
  };
  


  return (
    <div>
      <div className="search-filter">
        <Input
          type="text"
          placeholder="Search for a country..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        ></Input>

        <DropdownButton 
          id="dropdown-basic-button"
          title={dropdownOpen ? "Select Region" : "Filter by Region"}
          show={dropdownOpen}
          onClick={toggleDropdown}
        >
          <div style={{ backgroundColor: "#FFF5C2", width: 111 }}>
            <Dropdown.Item
              style={{ textDecoration: "none", color: "#000", padding: 10 }} onClick={() => filterDropdown("Africa")}
            >
              Africa
            </Dropdown.Item>
            <br />
            <Dropdown.Item
              style={{ textDecoration: "none", color: "#000", padding: 10 }} onClick={() => filterDropdown("America")}
            >
              America
            </Dropdown.Item>
            <br />
            <Dropdown.Item
              style={{ textDecoration: "none", color: "#000", padding: 10 }} onClick={() => filterDropdown("Asia")}
            >
              Asia
            </Dropdown.Item>
            <br />
            <Dropdown.Item
              style={{ textDecoration: "none", color: "#000", padding: 10 }} onClick={() => filterDropdown("Europe")}
            >
              Europe
            </Dropdown.Item>
            <br />
            <Dropdown.Item
              style={{ textDecoration: "none", color: "#000", padding: 10 }} onClick={() => filterDropdown("Oceania")}
            >
              Oceania
            </Dropdown.Item>
          </div>
        </DropdownButton>
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 10,
          justifyContent: "center",
          margin: 20,
          marginTop: 40
        }}
      >
        {filteredFlags.map((item, index) => (
          <div className="flags-wrapper" key={index}>
            <div>
              <img src={item.flags?.png} alt="" style={{ width: "15rem" }} />
            </div>
            <h2>{item.name?.common}</h2>
            <p>Population: {item.population}</p>
            <p>Region: {item.region}</p>
            <p>Capital: {item.capital}</p>
            <Button onClick={() => navigate(`/flags/${item.name?.common}`)}>
              Details
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Flags;

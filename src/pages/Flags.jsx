import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input, Button } from "./styleFlags";
import "../../src/App.css";

const Flags = () => {
  const [allFlags, setAllFlags] = useState([]);
  const [filteredFlags, setFilteredFlags] = useState([]);
  const [input, setInput] = useState("");

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
      item.region.toLowerCase().includes(input.toLowerCase())
    );
    setFilteredFlags(filtered);
  }, [input, allFlags]);

  return (
    <div>
      <div className="search">
        <Input
          type="text"
          placeholder="Search for a region..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        ></Input>
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 10,
          justifyContent: "center",
          margin: 20,
        }}
      >
        {filteredFlags.map((item, index) => (
          <div className="flags-wrapper" key={index}>
            <div>
              <img src={item.flags?.png} alt="" style={{ width: "15rem" }} />
            </div>
            <h2>Common: {item.name?.common}</h2>
            <p>Population: {item.population}</p>
            <p>Region: {item.region}</p>
            <p>Capital: {item.capital}</p>
            <Button onClick={() => navigate(`/flags/${item?.name?.common}`)}>
              Details
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Flags;

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../src/App.css";

const FlagDetail = () => {
  const { region } = useParams();

  const [country, setCountry] = useState({});

  const getFlag = async () => {
    try {
      const res = await axios.get(
        `https://restcountries.com/v3.1/name/${region}`
      );
      console.log(res?.data[0]);
      setCountry(res?.data[0]);
    } catch (err) {
      console.log(err);
    }
  };

  //   console.log(Object.entries(country?.currencies));

  useEffect(() => {
    getFlag();
  }, []);

  // if (!country.common) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div className="details-wrapper">
      <div className="image">
        <img src={country.flags?.png} alt="" style={{ width: "15rem" }} />
      </div>
      <div className="flag-content">
        <h1 style={{ fontSize: 30 }}>{country?.name?.common}</h1>
        <div className="left">
          {/* <p>Native Name: {country.nativeName?.nld?.common}</p> */}
          <p style={{ fontSize: 20 }}>Population: {country?.population}</p>
          <p style={{ fontSize: 20 }}>Region: {country.region}</p>
          <p style={{ fontSize: 20 }}>Sub Region: {country.subregion}</p>
          {country?.capital?.map((c) => (
            <p style={{ fontSize: 20 }}>Capital: {c?.capital}</p>
          ))}
        </div>
        <div className="right">
          {Object.entries[country?.currencies]}
          {/* <p>Currencies: {country?.currencies}</p> */}
          {/* <p>Languages: {country.languages}</p> */}
        </div>
      </div>
    </div>
  );
};

export default FlagDetail;

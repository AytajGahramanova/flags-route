import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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

  //   if (!flag.common) {
  //     return <div>Loading...</div>;
  //   }

  return (
    <div>
      <div className="image">
        <img src={country.flags?.png} alt="" style={{ width: "15rem" }} />
      </div>
      <div className="flag-content">
        <h3>{country?.name?.common}</h3>
        <div className="left">
          {/* <p>Native Name: {country.nativeName?.nld?.common}</p> */}
          <p>Population: {country?.population}</p>
          <p>Region: {country.region}</p>
          <p>Sub Region: {country.subregion}</p>
          {country?.capital?.map((c) => (
            <p>Capital: {c?.capital}</p>
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

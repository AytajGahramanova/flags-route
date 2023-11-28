import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const FlagDetail = () => {
  const { region } = useParams();

  const [flag, setFlag] = useState({});

  const getFlag = async () => {
    try {
      const res = await axios.get(
        `https://restcountries.com/v3.1/all/${region}`
      );
      setFlag(res?.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getFlag();
  }, [region]);

  if (!flag.common) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <div className="image">
        <img src={flag.flags?.png} alt="" style={{ width: "15rem" }} />
      </div>
      <div className="flag-content">
        <h3>{flag.common}</h3>
        <div className="left">
          <p>Native Name: {flag.nativeName?.nld?.common}</p>
          <p>Population: {flag.population}</p>
          <p>Region: {flag.region}</p>
          <p>Sub Region: {flag.subregion}</p>
          <p>Capital: {flag.capital}</p>
        </div>
        <div className="right">
          <p>Currencies: {flag.currencies}</p>
          <p>Languages: {flag.languages}</p>
        </div>
      </div>
    </div>
  );
};

export default FlagDetail;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function Details() {
  const { cId } = useParams();
  //   console.log("This is params ", cId);
  const baseURL = `https://restcountries.com/v3.1/alpha/${cId}`;
  const [APIData, setAPIData] = useState([]);

  useEffect(() => {
    axios
      .get(baseURL)
      .then((res) => {
        setAPIData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [baseURL]);

  return (
    <div>
      {APIData.map((data, index) => {
        return (
          <div key={index}>
            <ul className="country-info">
              <h1> {data.name.common} </h1>
              <br />
              <img className="imgCountry" src={data.coatOfArms.png} alt="..." />
              <li>The Capital City : {data.capital}</li>
              <li>Population : {data.population.toLocaleString("en-US")}</li>
              <li>Start of Week : {data.startOfWeek.toUpperCase()}</li>
              <li>Sub Region : {data.subregion}</li>
              <li>Time Zone : {data.timezones}</li>
              <li>Car Side : {data.car.side}</li>
              {/* <li>Borders : {data.borders.join(" , ")}</li> */}
              <br />
              <Link to="/data">
                <button className="btn btn-success"> Back to coutnries </button>
              </Link>
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default Details;

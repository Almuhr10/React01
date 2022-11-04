import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";
import { Link } from "react-router-dom";

function GetMethodAPI() {
  //   const baseURL = "https://anime-facts-rest-api.herokuapp.com/api/v1";
  const baseURL = "https://restcountries.com/v3.1/subregion/asia";
  const [state, setState] = useState([]);
  useEffect(() => {
    axios.get(baseURL).then((res) => {
      setState(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <div className="Cards">
      {state.map((e, index) => (
        <div key={index} className="card">
          <img className="imgRes" src={e.flags.svg} alt="..." />
          <div className="caption">
            <h5>{e.name.common}</h5>
            <Link to="/details">
              <button
                className="btn btn-success"
                onClick={() => {
                  localStorage.setItem("id", e.ccn3);
                }}
              >
                More details
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default GetMethodAPI;

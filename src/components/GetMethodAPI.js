import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";

function GetMethodAPI() {
  const baseURL = "https://anime-facts-rest-api.herokuapp.com/api/v1";
  const [state, setState] = useState([]);
  useEffect(() => {
    axios.get(baseURL).then((res) => {
      setState(res.data.data);
      console.log(res.data.data);
    });
  }, []);

  return (
    <div className="Cards">
      {state.map((e) => (
        <div className="card">
          <img className="imgRes" src={e.anime_img} alt="..." />
          <div className="caption">
            <h5>{e.anime_name}</h5>
          </div>
        </div>
      ))}
    </div>
  );
}

export default GetMethodAPI;

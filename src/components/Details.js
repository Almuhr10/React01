import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Details() {
  const params = useParams();
  const baseURL = "https://restcountries.com/v3.1/subregion/asia";
  const [id, setId] = useState("");
  const [APIData, setAPIData] = useState([]);

  useEffect(() => {
    axios.get(baseURL).then((res) => {
      setAPIData(res.data);
      setId(localStorage.getItem("id"));
    });
  }, [params]);

  //   const updateData = () => {
  axios
    .get(baseURL)
    .then((res) => {
      console.log(id);
    })
    .catch((err) => {
      console.log(err);
    });
  //   };

  return (
    <div>
      {APIData.map((data, index) => {
        return (
          <div key={index}>
            <p>Population is : {data.population}</p>
            {/* <p>LName: {data.lName}</p> */}
          </div>
        );
      })}
    </div>
  );
}

export default Details;

import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./card";

function Wrapper() {
  const [nasaData, setData] = useState({});

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=dCT5VofNFrUAI6zPXdKUHtAOKgSyRyzhOR6WanbC"
      )
      .then(res => {
        setData(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Card data={nasaData} />;
    </>
  );
}

export default Wrapper;

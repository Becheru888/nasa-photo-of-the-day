import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./card";

function Wrapper() {
  useEffect(() => {
    axios
      .get("https://api.nasa.gov/#apod")
      .then(res => {
          console.log(res)
      })
      .catch();
  }, []);

  return <Card />;
}

export default Wrapper;

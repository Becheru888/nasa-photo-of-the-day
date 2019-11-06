import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./card";
import styled from "styled-components";

function Wrapper() {
  const [nasaData, setData] = useState({});
  const [inputDate, setInput] = useState('')
  
  const api = "https://api.nasa.gov/planetary/apod?api_key=dCT5VofNFrUAI6zPXdKUHtAOKgSyRyzhOR6WanbC"
  useEffect(() => {
    axios
      .get(api)
      .then(res => {
        setData(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <CardWrapper>
      <Card data={nasaData} />
      <form onSubmit={e => {
          e.preventDefault();
          axios.get(`https://api.nasa.gov/planetary/apod?api_key=dCT5VofNFrUAI6zPXdKUHtAOKgSyRyzhOR6WanbC&date=${inputDate}`).then(res => {
              setData(res.data)
          })
      }}>
      <input type='text' onChange={e => {
          setInput(e.target.value)
      }}/>
      <button type='submit'>Find By Date</button>
      </form>
      
    </CardWrapper>
  );
}

export default Wrapper;

const CardWrapper = styled.div`
  margin: 0 auto;
  width:30%;  
  border: 2px dashed red;
  padding:20px;
`;

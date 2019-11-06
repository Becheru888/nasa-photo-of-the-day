import React from "react";
import styled from "styled-components";

function Card(props) {
  if (!props.data) {
    return <h3>Please wait...</h3>;
  } else {
    return (
      <StyledCard>
        <img src={props.data.url} alt="space-img" />
        <div className="details">
          <h1>{props.data.title}</h1>
          <p>{props.data.date}</p>
          <p>{props.data.explenation}</p>
        </div>
      </StyledCard>
    );
  }
}

export default Card;

const StyledCard = styled.div`
  img {
    width: 100%;
    height:300px;
  }
  div {
      height:100%;
  }
`;

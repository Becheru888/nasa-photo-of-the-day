import React from "react";

function Card(props) {
  console.log(props.data);

  if (!props.data){
    return (<h1>Please wait...</h1>)
  }else{
    return (
        <div>
          <img src={props.data.url} alt="space-img" />
          <div className="details">
              <h1>{props.data.title}</h1>
              <p>{props.data.date}</p>
              <p>{props.data.explenation}</p>
          </div>
        </div>
      );
  }
 
}

export default Card;

import React from 'react';
import "./index.css";

const Card=({details})=>{
    return(
      <div className="post-page">
          <div className="row">
              <h1>{details?.title}</h1>
              <p>{details?.body}</p>
          </div>
      </div>
    );
};
export default Card;
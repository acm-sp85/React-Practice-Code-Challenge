import React, { Fragment } from "react";

const Sushi = (props) => {
  const props_ = props.sushiDetails;
  return (
    <div className="sushi">
      <div className="plate" onClick={(event) => props.eatSushi(event)}>
        {props_.id == false ? null : (
          <img src={props_.img_url} width="100%" id={props_.id} />
        )}
      </div>

      <h4 className="sushi-details">
        {props.sushiDetails.name} - ${props.sushiDetails.price}
      </h4>
    </div>
  );
};

export default Sushi;

import React, { Fragment } from "react";
import MoreButton from "../components/MoreButton";
import Sushi from "../components/Sushi";

const SushiContainer = (props) => {
  return (
    <React.Fragment>
      <div className="belt">
        {props.sushi.map((sushi) => (
          <Sushi
            sushiDetails={sushi}
            eatSushi={props.eatSushi}
            key={sushi.id}
          />
        ))}
        <MoreButton
          nextFourItems={props.nextFourItems}
          lastItemId={props.sushi[3]}
        />
      </div>
    </React.Fragment>
  );
};

export default SushiContainer;

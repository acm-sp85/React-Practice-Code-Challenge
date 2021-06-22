import React from "react";

const MoreButton = (props) => {
  return (
    <button onClick={() => props.nextFourItems(props.lastItemId)}>
      More sushi!
    </button>
  );
};

export default MoreButton;

import React from "react";
import Header, { Props } from "./Header";

const Basket = (props: Props) => {
  return (
    <div>
      <Header {...props} />
      <div>
        <h2>Basket</h2>
      </div>
    </div>
  );
};

export default Basket;

import React from "react";
import { useNavigate } from "react-router-dom";
import Header, { Props } from "./Header";

const Home = (props: Props) => {
  let navigate = useNavigate();
  return (
    <div>
      <Header {...props} />
      <div>
        {[...new Array(300)]
          .map(
            () => `Cras mattis consectetur purus sit amet fermentum.
            Cras justo odio, dapibus ac facilisis in, egestas eget quam.
            Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
          )
          .join("\n")}
      </div>
    </div>
  );
};

export default Home;

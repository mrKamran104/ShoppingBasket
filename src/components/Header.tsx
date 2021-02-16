import React from "react";
import DenseAppBar from "./DenseAppBar";
import TopScroll from "./TopScroll";

export interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactElement;
}

const Header = (props: Props) => {
  return (
    <div>
      <div id="back-to-top-anchor">
        <DenseAppBar />
      </div>
      <TopScroll {...props} />
    </div>
  );
};

export default Header;

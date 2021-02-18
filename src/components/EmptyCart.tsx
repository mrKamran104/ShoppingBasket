import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

const EmptyCart = () => {
  return (
    <div style={{ marginTop: "10%" }}>
      <h1>
        Your <span style={{ color: "red" }}>Online Shop</span> Cart is empty.
      </h1>
      <Link to="/products" style={{ textDecoration: "none" }}>
        <Button variant="contained" color="secondary">
          Go Back to Our Product Page
        </Button>
      </Link>
    </div>
  );
};

export default EmptyCart;

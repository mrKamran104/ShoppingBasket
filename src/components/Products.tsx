import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductItem } from "../interface/global";
import { add } from "../store/basketSlice";
import { ButtonBase } from "@material-ui/core";
import Header, { Props } from "./Header";
import Paper from "@material-ui/core/Paper";

const Products = (props: Props) => {
  const dispatch = useDispatch();
  const products = useSelector((state: ProductItem[]) => state);
  console.log(products);
  return (
    <div>
      <Header {...props} />
      <div>
        <h2>All Products</h2>
      </div>
      <div className="">
        <Paper elevation={3}>hhhhh</Paper>
      </div>
      {/* <ButtonBase
        focusRipple
      key={product.id}
      className={classes.image}
      focusVisibleClassName={classes.focusVisible}
      disabled={product.added}
       onClick={() => dispatch(add(product))}
        style={{
          width: `${100 / products.length}%`
        }}
      > */}
    </div>
  );
};

export default Products;

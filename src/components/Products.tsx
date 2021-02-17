import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductItem } from "../interface/global";
import { add } from "../store/basketSlice";
import { ButtonBase } from "@material-ui/core";
import Header, { Props } from "./Header";
import Paper from "@material-ui/core/Paper";
import { Container, Grid } from "@material-ui/core";

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
      <Container fixed className="cardHeader">
        <Grid
          container
          direction="row"
          // justify="center"
          // alignItems="center"
        >
          {products.map((product, ind) => {
            return (
              <figure className="blur3" key={product.id}>
                <Paper elevation={3} className="card">
                  <button className="btn" onClick={()=>dispatch(add(product))}>Button</button>
                  <img src={product.imageUrl} width="200" height="200" />
                  <figcaption>
                    <div className="rowJustify">
                      <p style={{ fontWeight: "bold" }}>{product.title}</p>
                      <p style={{ fontWeight: "bold" }}>${product.price}</p>
                    </div>
                    {product.description}
                  </figcaption>
                </Paper>
              </figure>
            );
          })}
        </Grid>
      </Container>
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

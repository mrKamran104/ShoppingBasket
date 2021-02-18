import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductItem } from "../interface/global";
import { add } from "../store/basketSlice";
import Header, { Props } from "./Header";
import Paper from "@material-ui/core/Paper";
import { Container, Grid } from "@material-ui/core";

const Products = (props: Props) => {
  const dispatch = useDispatch();
  const products = useSelector((state: ProductItem[]) => state);
  // console.log(products);
  return (
    <div>
      <Header {...props} />
      <div>
        <h2>All Products</h2>
      </div>
      <Container fixed className="cardHeader">
        <Grid container direction="row">
          {products.map((product, ind) => {
            return (
              <div className="hcard" key={product.id}>
                <figure className="blur3">
                  <Paper elevation={3} className="card">
                    <img src={product.imageUrl} width="200" height="200" alt={product.title} />
                    <figcaption>
                      <div className="rowJustify">
                        <p style={{ fontWeight: "bold" }}>{product.title}</p>
                        <p style={{ fontWeight: "bold" }}>${product.price}</p>
                      </div>
                      {product.description}
                    </figcaption>
                  </Paper>
                </figure>
                <button className="btn" onClick={() => dispatch(add(product))}>
                  {product.added? "Added" : "Add to Cart"}
                </button>
              </div>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
};

export default Products;

import React from "react";
import Header, { Props } from "./Header";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import {
  ListItem,
  Divider,
  ListItemAvatar,
  IconButton,
  Avatar,
  Typography,
  Container,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { remove, inc, dec } from "../store/basketSlice";
import { useDispatch, useSelector } from "react-redux";
import { ProductItem } from "../interface/global";
import EmptyCart from "./EmptyCart";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      backgroundColor: theme.palette.background.paper,
    },
    root1: {
      padding: theme.spacing(1, 1, 0),
      backgroundColor: theme.palette.background.default,
    },
    inline: {
      display: "inline",
    },
    listItem: {
      padding: theme.spacing(1, 0),
      justifyContent: "flex-end",
    },
    total: {
      fontWeight: theme.typography.fontWeightBold,
      fontSize: theme.typography.fontSize * 2,
    },
    fontBold: {
      fontWeight: "bold"
    }
  })
);

const Basket = (props: Props) => {
  const classes = useStyles({});
  const dispatch = useDispatch();
  const products = useSelector((state: ProductItem[]) => state);

  return (
    <div>
      <Header {...props} />
      <Container fixed>
        {products.filter((product) => product.added).length === 0 ? (
          <EmptyCart />
        ) : (
          <div className={classes.root}>
            <h3 style={{textAlign: "start"}}>You have <span style={{color: "green"}}>{products.filter((product) => product.added).length}</span> items in your cart.</h3>
            {products
              .filter((product) => product.added)
              .map((product, ind) => (
                <div className={classes.root1} key={product.id}>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <ListItemAvatar>
                        <Avatar alt="Product" src={product.imageUrl} />
                      </ListItemAvatar>
                    </div>
                    <div style={{ flexGrow: 1 }}>
                      <div style={{ display: "flex" }}>
                        <div
                          style={{
                            textAlign: "start",
                            paddingLeft: 12,
                            flexGrow: 1,
                          }}
                          className={classes.fontBold}
                        >
                          {product.title}
                        </div>
                        <div style={{}}>Price: &#36;{(product.price).toFixed(2)}</div>
                      </div>
                      <div style={{ display: "flex" }}>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            flexGrow: 1,
                          }}
                        >
                          <div style={{ padding: 12, marginRight: "15px" }}>
                            Total Quantity: {product.total_quantity}
                          </div>
                          <IconButton
                            onClick={() => dispatch(inc({ id: product.id }))}
                          >
                            <AddIcon />
                          </IconButton>
                          <div style={{ padding: 12 }}>{product.quantity}</div>
                          <IconButton
                            onClick={() => dispatch(dec({ id: product.id }))}
                          >
                            <RemoveIcon />
                          </IconButton>
                        </div>
                        <div>
                          <IconButton
                            onClick={() => dispatch(remove({ id: product.id }))}
                          >
                            <DeleteIcon />
                          </IconButton>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Divider />
                </div>
              ))}
            <ListItem className={classes.listItem}>
              <Typography variant="subtitle1" className={classes.total}>
                &#36;
                {products
                  .filter((product) => product.added)
                  .reduce(
                    (acc, current) => (acc += current.price * current.quantity),
                    0
                  )
                  .toFixed(2)}
              </Typography>
            </ListItem>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Basket;

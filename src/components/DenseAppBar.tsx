import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import MenuIcon from "@material-ui/icons/Menu";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import {
  Toolbar,
  Typography,
  IconButton,
  Button,
  Badge,
} from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { ProductItem } from "../interface/global";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      marginBottom: theme.spacing(2),
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      cursor: "pointer",
    },
  })
);

export default function DenseAppBar() {
  const classes = useStyles();
  let navigate = useNavigate();
  const products = useSelector((state: ProductItem[]) => state);
  const totalProduct = products.filter((product) => product.added).length;

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            color="inherit"
            className={classes.title}
            onClick={() => navigate("/")}
          >
            Online Shop
          </Typography>
          <Button color="inherit" onClick={() => navigate("/")}>
            Home
          </Button>
          <Button color="inherit" onClick={() => navigate("/products")}>
            Products
          </Button>
          <IconButton
            edge="end"
            className={classes.menuButton}
            color="inherit"
            aria-label="shopping_cart"
            onClick={() => navigate("/basket")}
          >
            <Badge badgeContent={totalProduct} color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

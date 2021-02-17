import React from "react";
import Header, { Props } from "./Header";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import {
  List,
  ListItem,
  Divider,
  ListItemText,
  ListItemAvatar,
  ListItemSecondaryAction,
  IconButton,
  Avatar,
  Typography,
  Container,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { remove } from "../store/basketSlice";
import { useDispatch, useSelector } from "react-redux";
import { ProductItem } from "../interface/global";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      backgroundColor: theme.palette.background.paper,
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
        <List className={classes.root}>
          {products
            .filter((product) => product.added)
            .map((product, ind) => (
              <React.Fragment key={product.id}>
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar alt="Product" src={product.imageUrl} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={product.title}
                    secondary={
                      <React.Fragment>
                        {` — ${product.description}`}
                      </React.Fragment>
                    }
                  />
                  <ListItemSecondaryAction>
                    <IconButton
                      edge="end"
                      aria-label="delete"
                      onClick={() => dispatch(remove({ id: product.id }))}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider variant="inset" component="li" />
              </React.Fragment>
            ))}
          <ListItem className={classes.listItem}>
            <Typography variant="subtitle1" className={classes.total}>
              &#36;
              {products
                .filter((product) => product.added)
                .reduce((acc, current) => (acc += current.price), 0)
                .toFixed(2)}
            </Typography>
          </ListItem>
        </List>
      </Container>
    </div>
  );
};

export default Basket;

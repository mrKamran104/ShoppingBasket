import { ProductItem } from "../interface/global";
import fullSleeveBlacktshirt from "./images/fullSleeveBlack-tshirt.jpg";
import halfSleeveYellowtshirt from "./images/halfSleeveYellow-tshirt.jpg";
import fullSleeveRedtshirt from "./images/fullSleeveRed-tshirt.jpg";
import halfSleeveGraytshirt from "./images/halfSleeveGray-tshirt.jpg";
import halfSleeveWhitetshirt from "./images/halfSleeveWhite-tshirt.jpg";

const INITIAL_STATE: ProductItem[] = [
  {
    id: "111",
    title: "Black t-shirt",
    description:
      "No fancy sizing charts here, one t-shirt size to rule them all",
    imageUrl: fullSleeveBlacktshirt,
    price: 180,
    total_quantity: 10,
    quantity: 0
  },
  {
    id: "222",
    title: "Yellow t-shirt",
    description:
      "This unique t-shirt is guaranteed to fit nobody, not even new born babies",
    imageUrl: halfSleeveYellowtshirt,
    price: 260,
    total_quantity: 10,
    quantity: 0
  },
  {
    id: "333",
    title: "Red t-shirt",
    description:
      "The only product on our site that might actually be worth buying",
    imageUrl: fullSleeveRedtshirt,
    price: 380,
    total_quantity: 10,
    quantity: 0
  },
  {
    id: "444",
    title: "Gray t-shirt",
    description:
      "The only product on our site that might actually be worth buying",
    imageUrl: halfSleeveGraytshirt,
    price: 450,
    total_quantity: 10,
    quantity: 0
  },
  {
    id: "555",
    title: "White t-shirt",
    description:
      "The only product on our site that might actually be worth buying",
    imageUrl: halfSleeveWhitetshirt,
    price: 500,
    total_quantity: 10,
    quantity: 0
  },
];

export { INITIAL_STATE };

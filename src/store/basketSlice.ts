import { createSlice } from "@reduxjs/toolkit";
import { INITIAL_STATE } from "./state";

export const basketSlice = createSlice({
  name: "basket",
  initialState: INITIAL_STATE,
  reducers: {
    add: (state, action) => {
      return state.map((item) => {
        if (item.id !== action.payload.id) {
          return item;
        } else if (item.added) {
          return item;
        }
        // console.log(action);
        return {
          ...item,
          added: true,
          quantity: item.quantity + 1,
        };
      });
    },

    remove: (state, action) => {
      return state.map((item) => {
        if (item.id !== action.payload.id) {
          return item;
        }
        return {
          ...item,
          added: false,
          quantity: 0,
        };
      });
    },

    inc: (state, action) => {
      return state.map((item) => {
        if (item.id !== action.payload.id) {
          return item;
        } else if (item.quantity === item.total_quantity) {
          return item;
        }
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      });
    },

    dec: (state, action) => {
      return state.map((item) => {
        if (item.id !== action.payload.id) {
          return item;
        } else if (item.quantity === 1) {
          return item;
        }
        return {
          ...item,
          quantity: item.quantity - 1,
        };
      });
    },
  },
});

export const { add, remove, inc, dec } = basketSlice.actions;

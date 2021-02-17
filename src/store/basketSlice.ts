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
        }
        console.log(action);
        return {
          ...item,
          added: true,
          quantity: item.quantity + 1,
          // item.total_quantity -
          // (item.total_quantity - item.quantity === 0 ? 1 : item.quantity),
        };
      });
    },

    remove: (state, action) => {
      return state.map((item) => {
        if (item.id !== action.payload.id) {
          return item;
        } else if (item.total_quantity <= 1) {
          return {
            ...item,
            quantity: 0,
            added: false,
          };
        }
        return {
          ...item,
          quantity: item.quantity ? item.quantity + 1 : 0,
        };
      });
    },

    clear: (state, action) => {
      return state.map((item) => {
        if (item.id !== action.payload.id) {
          return item;
        }
        return {
          ...item,
          quantity: 0,
          added: false,
        };
      });
    },

    inc: (state, action) => {
      return state.map((item) => {
        if (item.id !== action.payload.id) {
          return item;
        }
        return {
          ...item,
          quantity: item.total_quantity + 1,
        };
      });
    },
  },
});

export const { add, remove, clear, inc } = basketSlice.actions;

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
        return {
          ...item,
          added: true,
          quantity: item.total_quantity - 1,
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
          quantity: item.total_quantity - 1,
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

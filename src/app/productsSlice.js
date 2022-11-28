import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [{ name: "cards", amount: "50", price: "22" }],
  status: "idle",
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addItem: (state, action) => {
      const itemToAdd = action.payload;
      let products = [...state.products];

      let product = products.find((p) => p.name === itemToAdd.name);

      if (product === undefined) {
        const {...object} = itemToAdd
        products.push(object);
      } else {
        product.amount += action.payload.amount;
        product.price = action.payload.price;
      }
      state.products = products;
    },

    buyItem: (state = initialState, action) => {
      const itemName = action.payload;

      console.log("LLLLLLLLLL");
      console.log(state.products.products);

        let products = [...state.products];
        let product = products.find((p) => p.name === itemName);

        product.amount -= 1;
        state.products = products;
    },
  },
});

export const { addItem, buyItem } = productsSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectProducts = (state) => state.products.products;

export default productsSlice.reducer;

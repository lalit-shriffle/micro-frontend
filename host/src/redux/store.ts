import { configureStore, createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: [1, 2, 3, 4] },
  reducers: {
    addItem: (state: any, action: any) => {
      state.items.push(action.payload);
    },
    removeItem: (state: any, action: any) => {
      state.items = state.items.filter((item: any) => item.id !== action.payload);
    }
  }
});

export const { addItem, removeItem } = cartSlice.actions;

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer
  }
});

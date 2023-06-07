import { createSlice } from "@reduxjs/toolkit"
import products from "../data/products"

const initialState = {
  products,
  selectedProduct: null
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setSelectedProduct: (state, action) => {
      state.selectedProduct = state.products.find(product => product.id === action.payload)
    }
  }
})
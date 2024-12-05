import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const response = await fetch('https://fakestoreapi.com/products');
  return await response.json();
});

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    filters: { search: '', category: '' },
  },
  reducers: {
    setSearch(state, action) {
      state.filters.search = action.payload;
    },
    setCategory(state, action) {
      state.filters.category = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.items = action.payload;
    });
  },
});

export const { setSearch, setCategory } = productsSlice.actions;
export default productsSlice.reducer;

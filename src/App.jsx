import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchProducts } from './store/productsSlice';
import Filters from './components/Filters';
import ProductList from './components/ProductList';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-500 text-white p-4 text-center">
        <h1 className="text-xl font-bold">Product List</h1>
      </header>
      <div className="flex">
        <aside className="w-1/4 p-4">
          <Filters />
        </aside>
        <main className="w-3/4">
          <ProductList />
        </main>
      </div>
    </div>
  );
};

export default App;

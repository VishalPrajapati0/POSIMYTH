import { useDispatch } from 'react-redux';
import { setSearch, setCategory } from '../store/productsSlice';

const Filters = () => {
  const dispatch = useDispatch();

  return (
    <div className="p-4 space-y-4">
      <input
        type="text"
        placeholder="Search..."
        className="border p-2 w-full"
        onChange={(e) => dispatch(setSearch(e.target.value))}
      />
      <select
        className="border p-2 w-full"
        onChange={(e) => dispatch(setCategory(e.target.value))}
      >
        <option value="">All Categories</option>
        <option value="electronics">Electronics</option>
        <option value="jewelery">Jewelery</option>
        <option value="men's clothing">Men's Clothing</option>
        <option value="women's clothing">Women's Clothing</option>
      </select>
    </div>
  );
};

export default Filters;

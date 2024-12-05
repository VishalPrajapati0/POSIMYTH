import { useSelector } from 'react-redux';
import ProductCard from './ProductCard';

const ProductList = () => {
  const { items, filters } = useSelector((state) => state.products);
  const filteredProducts = items.filter((product) =>
    product.title.toLowerCase().includes(filters.search.toLowerCase()) &&
    (filters.category ? product.category === filters.category : true)
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;

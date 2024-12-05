const ProductCard = ({ product }) => (
    <div className="border p-4 rounded shadow">
      <h2 className="font-bold">{product.title}</h2>
      <p>${product.price}</p>
      <p className="text-sm text-gray-600">{product.category}</p>
    </div>
  );
  
  export default ProductCard;
  
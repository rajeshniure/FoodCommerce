

const ProductCard = ({ product }) => {
  return (
    <div className=" rounded-lg overflow-hidden">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full aspect-square object-cover rounded-b-2xl"
        />
        <button className="relative bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-200 text-sm px-4 py-2 rounded-3xl hover:bg-gray-300 flex gap-1">
          <img src="assets/images/icon-add-to-cart.svg" alt="" />
          Add to Cart
        </button>
      </div>
      <div className="px-4">
        <h2 className="text-shadow-amber-200 text-gray-400">{product.description}</h2>
        <p className="text-sm text-gray-800 font-bold">{product.name}</p>
        <p className="text-md font-bold text-orange-400 ">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;

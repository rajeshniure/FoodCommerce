type Product = {
  id?: number;
  name: string;
  description: string;
  price: number;
  image: string;
};

type ProductCardProps = {
  product: Product;
  quantity: number;
  onAddToCart: () => void;
  onIncrement: () => void;
  onDecrement: () => void;
};

const ProductCard = ({ product,quantity, onAddToCart, onIncrement, onDecrement }: ProductCardProps) => {
  return (
    <div className="rounded-lg overflow-hidden">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full aspect-square object-cover rounded-b-2xl"
        />
        {quantity === 0 ? (
  <button 
    onClick={onAddToCart}
    className="relative bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-100 text-sm px-4 py-2 rounded-3xl hover:bg-gray-200 flex gap-1 cursor-pointer border border-gray-400"
  >
    <img src="/assets/images/icon-add-to-cart.svg" alt="" />
    Add to Cart
  </button>
) : (
  <button 
    className="relative bottom-4 left-1/2 transform -translate-x-1/2 bg-orange-500 text-sm px-4 py-2 rounded-3xl hover:bg-orange-600 flex gap-6 items-center cursor-pointer"
  >
    <button
      onClick={onDecrement}
      className="w-4 h-4 border rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-300"
    >
      <img className="filter invert-0 brightness-0 " src="/assets/images/icon-decrement-quantity.svg" alt="" />
    </button>
    <span className="font-semibold">{quantity}</span>
    <button
      onClick={onIncrement}
      className="w-4 h-4 border rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-300"
    >
      <img className="filter invert-0 brightness-0" src="/assets/images/icon-increment-quantity.svg" alt="" />
    </button>
  </button>
)}

        
      </div>
      <div className="px-4">
        <h2 className="text-shadow-amber-200 text-gray-400">{product.description}</h2>
        <p className="text-sm text-gray-800 font-bold">{product.name}</p>
        <p className="text-md font-bold text-orange-400">${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProductCard;

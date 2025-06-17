type CartCardProps = {
  count?: number;
  image: string;
  description: string;
};

const CartCard = ({ count = 0, }: CartCardProps) => {
  return (
    <div className="w-80 bg-white  rounded-xl overflow-hidden ">
      <div className="p-4">
        <h2 className="text-lg font-bold text-orange-400">
          Your Cart ({count})
        </h2>
      </div>
      <div className="flex justify-center p-4">
        <img
          src="/assets/images/illustration-empty-cart.svg"
          alt="Cart Item"
          className="w-32 h-32 object-cover rounded-md"
        />
      </div>
      <div className="px-4 pb-4 text-center">
        <p className="text-gray-500 text-sm">Your added item will appear here</p>
      </div>
    </div>
  );
};

export default CartCard;

type CartCardProps = {
  count?: number
  items?: {
    name: string
    price: number
    quantity: number
  }[]
  onRemoveItem?: (index: number) => void
  onConfirmOrder?: () => void
}

const CartCard = ({
  count = 0,
  items = [],
  onRemoveItem,
  onConfirmOrder,
}: CartCardProps) => {
  const calculateTotal = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  return (
    <>
      <div className="w-80 bg-white rounded-xl overflow-hidden">
        <div className="p-3">
          <h2 className="text-lg font-bold text-orange-400">
            Your Cart ({count})
          </h2>
        </div>

        {items.length === 0 ? (
          <>
            <div className="flex justify-center p-4">
              <img
                src="/assets/images/illustration-empty-cart.svg"
                alt="Empty Cart"
                className="w-32 h-32 object-cover rounded-md"
              />
            </div>
            <div className="px-4 pb-4 text-center">
              <p className="text-gray-500 text-sm">
                Your added item will appear here
              </p>
            </div>
          </>
        ) : (
          <div className="px-4 py-2">
            {items.map((item, index) => (
              <div key={index} className="mb-4 border-b border-gray-200">
                <div className="flex justify-between items-center mb-2 ">
                  <span className="font-medium">{item.name}</span>
                  <button
                    onClick={() => onRemoveItem?.(index)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <img
                      src="/assets/images/icon-remove-item.svg"
                      alt="Remove"
                      className="w-4 h-4 cursor-pointer border-2 border-gray-300  rounded-full"
                    />
                  </button>
                </div>
              </div>
            ))}

            <div className=" pt-3">
              <div className="flex justify-between items-center mb-4">
                <span className="font-medium">Order Total</span>
                <span className="font-bold">
                  ${calculateTotal().toFixed(2)}
                </span>
              </div>

              <div className="flex items-center gap-2 mb-4">
                <img
                  src="/assets/images/icon-carbon-neutral.svg"
                  alt="Carbon Neutral"
                  className="w-5 h-5"
                />
                <span className="text-sm text-gray-600 border border-gray-100 p-1 rounded-2xl">
                  This is a carbon-neutral delivery
                </span>
              </div>

              <button
                onClick={onConfirmOrder}
                className="w-full bg-orange-400 text-white py-2 rounded-lg hover:bg-orange-500 transition-colors cursor-pointer"
              >
                Confirm Order
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default CartCard

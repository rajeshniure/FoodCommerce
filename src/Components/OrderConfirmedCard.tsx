import { useEffect } from 'react'

type OrderConfirmedProps = {
  items: Array<{
    name: string
    price: number
    quantity: number
    image: string
  }>
  onStartNewOrder: () => void
}

const OrderConfirmedCard = ({
  items,
  onStartNewOrder,
}: OrderConfirmedProps) => {

    useEffect(() => {
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = originalOverflow
    }
  }, [])

  const calculateTotal = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-xs flex items-center justify-center z-50">
      <div className="bg-white rounded-xl w-110 p-6 shadow-2xl max-h-[90vh] overflow-y-auto transform transition-all">
        <div className=" mb-4">
          <img
            src="/assets/images/icon-order-confirmed.svg"
            alt="Order Confirmed"
            className="w-9 h-9"
          />
        </div>
        
        <h2 className="text-3xl font-bold text-black ">
          Order Confirmed
        </h2>
        <p className="text-gray-500 mb-6">We hope you enjoy your food!</p>
        <div className="bg-rose-50 rounded-lg">
        <div className="space-y-4 rounded-lg px-4 py-2">
          {items.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-4 border-b border-gray-200 pb-3 last:border-b-0"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-12 h-12 object-cover rounded"
              />
              <div className="flex-1">
                <p className="font-semibold">{item.name}</p>
                <p className="text-gray-500 text-sm">
                  {item.quantity} × ${item.price.toFixed(2)}
                </p>
              </div>
              <p className="font-semibold">
                ${(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-between  text-gray-700 px-4 py-4 border-t border-gray-300">
          <span>Order Total</span>
          <span className="text-lg text-black font-bold">${calculateTotal().toFixed(2)}</span>
        </div>
</div>
        <button
          onClick={onStartNewOrder}
          className="mt-6 w-full bg-orange-400 hover:bg-orange-500 text-white py-3 rounded-lg transition-colors font-semibold cursor-pointer"
        >
          Start New Order
        </button>
      </div>
    </div>
  )
}

export default OrderConfirmedCard

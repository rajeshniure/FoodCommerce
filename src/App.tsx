import { useState } from 'react';
import ProductCard from './Components/ProductCard';
import products from './data/products'; 
import CartCard from './Components/CartCard';
import OrderConfirmedCard from './Components/OrderConfirmedCard';

type CartItem = {
  name: string;
  price: number;
  quantity: number;
};

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isOrderConfirmed, setIsOrderConfirmed] = useState(false);

const handleConfirmOrder = () => {
  setIsOrderConfirmed(true);
};

const handleStartNewOrder = () => {
  setCartItems([]);
  setIsOrderConfirmed(false);
};

  

  const addToCart = (product: 
    { name: string; 
      price: number 
    }) => {
    setCartItems(prevItems => {
      const existingItemIndex = prevItems.findIndex(item => item.name === product.name);
      
      if (existingItemIndex >= 0) {
        // If item exists, increment quantity
        const newItems = [...prevItems];
        const existingItem = newItems[existingItemIndex];
        if (existingItem) {
          newItems[existingItemIndex] = {
            ...existingItem,
            quantity: existingItem.quantity + 1
          };
        }
        return newItems;
      } else {
        // If item doesn't exist, add new item
        return [...prevItems, { name: product.name, price: product.price, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (index: number) => {
    setCartItems(prevItems => prevItems.filter((_, i) => i !== index));
  };

  const updateQuantity = (index: number, newQuantity: number) => {
    if (newQuantity < 0) return;
    setCartItems(prevItems => {
      const newItems = [...prevItems];
      if (newQuantity === 0) {
        // Remove item when quantity becomes zero
        return prevItems.filter((_, i) => i !== index);
      }
      const item = newItems[index];
      if (item) {
        newItems[index] = { ...item, quantity: newQuantity };
      }
      return newItems;
    });
  };


  return (
    <div className="min-h-screen bg-rose-50 p-8">
      <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
        {/* Left side - Heading + Product Cards */}
        <div className="flex-1 flex flex-col">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Desserts</h1>
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <ProductCard
                key={index}
                product={{
                  image: product.image.desktop,
                  name: product.name,
                  description: product.category,
                  price: product.price
                }}
                quantity={
                  cartItems.find(item => item.name === product.name)?.quantity || 0
                }
                onAddToCart={() => addToCart({
                  name: product.name,
                  price: product.price
                })}
                onIncrement={() => updateQuantity(
                 cartItems.findIndex(item => item.name === product.name),
                 (cartItems.find(item => item.name === product.name)?.quantity || 0) + 1
                )}
                onDecrement={() => updateQuantity(
                  cartItems.findIndex(item => item.name === product.name),
                  (cartItems.find(item => item.name === product.name)?.quantity || 0) - 1
                )}
              />
            ))}
          </div>
        </div>

        {/* Right side - Cart */}
        <div className="w-full lg:w-80">
          <CartCard
            count={cartItems.reduce((total, item) => total + item.quantity, 0)}
            items={cartItems}
            onRemoveItem={removeFromCart}
            onUpdateQuantity={updateQuantity}
            onConfirmOrder={handleConfirmOrder}
          />

              {isOrderConfirmed && (
                <OrderConfirmedCard
                  items={cartItems.map(item => ({
                    ...item,
                    image: products.find(p => p.name === item.name)?.image.desktop || ''
                  }))}
                  onStartNewOrder={handleStartNewOrder}
              />
            )}
        </div>
      </div>
    </div>
  );
}

export default App;
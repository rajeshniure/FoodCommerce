import ProductCard from './Components/ProductCard';
import products from './data/products'; 
import CartCard from './Components/CartCard';


function App() {
  return (
    <div className="min-h-screen bg-rose-50 p-8">
      <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto ">

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
            />
          ))}
        </div>
        </div>

        {/* Right side - Cart */}
        <div className="w-full lg:w-80">
          <CartCard
            count={1}
            image="/assets/images/image-waffle-desktop.jpg"
            description="Waffle with Berries - $6.50"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
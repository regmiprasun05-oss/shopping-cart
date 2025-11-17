import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import { useCart } from "../context/CartContext";
                                                 
interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
}
                                                          
const Shop = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const { addToCart } = useCart();

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => setProducts(res.data));
  }, []);
      
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 ">Shop Our Products</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};                                                                                    

export default Shop;
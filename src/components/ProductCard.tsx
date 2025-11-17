import React, { useState } from "react";
import type { CartItem } from "../context/CartContext";
                            
interface ProductCardProps {
  product: { id: number; title: string; price: number; image: string };
  addToCart: (item: CartItem) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, addToCart }) => {
  const [quantity, setQuantity] = useState(1);
                                                                             
  return (
    <div className="bg-white rounded-xl shadow p-4 flex flex-col gap-3 w-72">
      <img
        src={product.image}
        alt={product.title}
        className="h-40 object-contain mx-auto"
      />

      <h4 className="font-semibold text-gray-700">{product.title}</h4>
      <p className="text-xl font-bold text-blue-600">${product.price}</p>

      <div className="flex items-center gap-2">
        <button
          className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
          onClick={() => setQuantity(Math.max(quantity - 1, 1))}
        >
          -
        </button>
        <input
          type="number"
          className="w-14 border rounded px-2 py-1 text-center"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        />
             
        <button
          className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
          onClick={() => setQuantity(quantity + 1)}
        >
          +
        </button>
      </div>

      <button
        onClick={() =>
          addToCart({
            id: product.id,
            title: product.title,
            image: product.image,
            price: product.price,
            quantity,
          })
        }
        className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
      >
        Add To Cart
      </button>
    </div>
  );
};

export default ProductCard;
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, updateQuantity, removeFromCart } = useCart();

  return (
    <div className="p-6 max-w-3xl mx-auto bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-4">Your Cart</h2>

      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between bg-white shadow p-4 mb-4 rounded-lg"
          >
            <img src={item.image} alt={item.title} className="h-20 object-contain" />

            <div className="flex-1 ml-4">
              <h4 className="font-semibold">{item.title}</h4>
              <p className="text-blue-600 font-bold">${item.price}</p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => updateQuantity(item.id, -1)}
                className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
              >
                - 
              </button>

              <span>{item.quantity}</span>

              <button
                onClick={() => updateQuantity(item.id, 1)}
                className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
              >
                +
              </button>
            </div>

            <button
              onClick={() => removeFromCart(item.id)}
              className="ml-4 text-red-600 hover:underline"
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
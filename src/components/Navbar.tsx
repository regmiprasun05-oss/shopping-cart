import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { getTotalItems } = useCart();

  return (
    <nav className="bg-blue-200 shadow-md px-10 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-blue-700">🛍️ MyShop</h1>

      <ul className="flex gap-10 text-lg font-medium">
        <li>
          <Link to="/" className="hover:text-blue-700 transition">
            Home
          </Link>
        </li>

        <li>
          <Link to="/shop" className="hover:text-blue-700 transition">
            Shop
          </Link>
        </li>

        <li>
          <Link to="/cart" className="hover:text-blue-700 font-semibold transition">
            Cart ({getTotalItems()})
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

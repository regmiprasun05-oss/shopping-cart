import banner from "../assets/images/shop-banner.jpg";

const Home = () => (
  <div className="p-6 text-center bg-gray-100 min-h-screen">
    <h1 className="text-4xl font-bold mb-4 text-blue-700">
      Welcome to MyShop 🛍️
    </h1>

    <p className="text-gray-700 text-lg mb-6">
      Discover amazing deals and quality products.
    </p>

    <img
      src={banner}
      alt="Shop Banner"
      className="rounded-xl shadow-lg mx-auto max-w-2xl"
    />
  </div>
);

export default Home;

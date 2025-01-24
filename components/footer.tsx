import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-6">
        {/* Brand Section */}
        <div>
          <img src="/iphone.jpeg" alt="iPhone Logo" className="w-36 mb-4" />
          <p className="text-sm text-gray-400">
            Elevating technology with seamless design and performance. Your
            trusted partner in innovation.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white text-lg font-bold mb-6 border-b-2 border-blue-500 inline-block pb-1">
            Quick Links
          </h3>
          <ul className="space-y-4">
            <li>
              <a
                href="#home"
                className="text-gray-400 hover:text-white transition-all duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#products"
                className="text-gray-400 hover:text-white transition-all duration-300"
              >
                Products
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-gray-400 hover:text-white transition-all duration-300"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-gray-400 hover:text-white transition-all duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Search Section */}
        <div>
          <h3 className="text-white text-lg font-bold mb-6 border-b-2 border-blue-500 inline-block pb-1">
            Search
          </h3>
          <form className="relative">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full px-4 py-3 bg-gray-800 text-gray-300 rounded-full focus:ring-4 focus:ring-blue-500 focus:outline-none transition-all duration-300"
            />
            <button
              type="submit"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-all duration-300"
            >
              Search
            </button>
          </form>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-white text-lg font-bold mb-6 border-b-2 border-blue-500 inline-block pb-1">
            Follow Us
          </h3>
          <div className="flex space-x-4">
            <a
              href="#"
              className="w-12 h-12 flex items-center justify-center bg-gray-800 rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300"
            >
              <FaFacebook className="text-2xl" />
            </a>
            <a
              href="#"
              className="w-12 h-12 flex items-center justify-center bg-gray-800 rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300"
            >
              <FaTwitter className="text-2xl" />
            </a>
            <a
              href="#"
              className="w-12 h-12 flex items-center justify-center bg-gray-800 rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300"
            >
              <FaInstagram className="text-2xl" />
            </a>
            <a
              href="#"
              className="w-12 h-12 flex items-center justify-center bg-gray-800 rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300"
            >
              <FaYoutube className="text-2xl" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-16 border-t border-gray-700 pt-6 text-center">
        <p className="text-sm text-gray-500">
          © 2025 iPhone Store. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

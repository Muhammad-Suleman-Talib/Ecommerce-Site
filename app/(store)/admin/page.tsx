// 'use client'
// import React, { useState } from "react";
// import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
// import App from "./data";

// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");
//   const adminEmail = "suleman36ah@gmail.com";
//   const adminPassword = "suleman6666";

//   const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if (email === adminEmail && password === adminPassword) {
//       setIsLoggedIn(true);
//     } else {
//       setErrorMessage("Invalid Email or Password. Please try again.");
//     }
//   };

//   if (isLoggedIn) {
//     return <App />;
//   }

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
//       <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-lg">
//         <h2 className="text-3xl font-bold text-center text-gray-800">Admin Login</h2>
//         {errorMessage && (
//           <p className="text-sm text-red-600 text-center">{errorMessage}</p>
//         )}
//         <form onSubmit={handleLogin} className="space-y-4">
//           <div>
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Enter your email"
//               className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//               required
//             />
//           </div>
//           <div className="relative">
//             <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//               Password
//             </label>
//             <input
//               type={showPassword ? "text" : "password"}
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="Enter your password"
//               className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//               required
//             />
//             <div
//               className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
//               onClick={() => setShowPassword(!showPassword)}
//             >
//               {showPassword ? (
//                 <AiOutlineEyeInvisible className="text-gray-500" size={20} />
//               ) : (
//                 <AiOutlineEye className="text-gray-500" size={20} />
//               )}
//             </div>
//           </div>
//           <button
//             type="submit"
//             className="w-full px-4 py-2 text-white bg-gradient-to-r from-green-500 to-blue-600 rounded-lg hover:from-green-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
//           >
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }
'use client';



// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useUser } from '@clerk/nextjs';

// const API_URL = 'https://6789dfdadd587da7ac27e74a.mockapi.io/Ecommerce';

// export default function AdminDashboard() {
//   const [activePage, setActivePage] = useState('dashboard');

//   return (
//     <div className="flex h-screen bg-gray-100">
//       {/* Sidebar */}
//       <div className="w-64 bg-gray-900 text-white p-5">
//         <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
//         <nav>
//           <ul className="space-y-4">
//             {['Dashboard', 'All Products', 'Manage Products', 'View Orders', 'Users'].map((name) => (
//               <li key={name}>
//                 <button 
//                   onClick={() => setActivePage(name.toLowerCase().replace(/ /g, ''))}
//                   className={`w-full text-left p-2 rounded ${activePage === name.toLowerCase().replace(/ /g, '') ? 'bg-gray-700' : 'hover:bg-gray-700'}`}
//                 >
//                   {name}
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </nav>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 p-6">
//         {activePage === 'dashboard' && <DashboardContent />}
//         {activePage === 'allproducts' && <ProductsList />}
//         {activePage === 'manageproducts' && <ManageProducts />}
//         {activePage === 'vieworders' && <ViewOrders />}
//         {activePage === 'users' && <UsersList />}
//       </div>
//     </div>
//   );
// }

// function DashboardContent() {
//   return (
//     <div>
//       <h1 className="text-2xl font-bold mb-4">Welcome to Admin Dashboard</h1>
//       <div className="grid grid-cols-2 gap-4">
//         <div className="bg-white p-4 shadow rounded">Total Products: 120</div>
//         <div className="bg-white p-4 shadow rounded">Total Orders: 50</div>
//         <div className="bg-white p-4 shadow rounded">Total Users: 300</div>
//         <div className="bg-white p-4 shadow rounded">Total Revenue: $25,000</div>
//       </div>
//     </div>
//   );
// }

// function ProductsList() {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     axios.get(API_URL)
//       .then((response) => setProducts(response.data))
//       .catch((error) => console.error('Error fetching products', error))
//       .finally(() => setLoading(false));
//   }, []);

//   if (loading) return <p>Loading products...</p>;

//   return (
//     <div>
//       <h1 className="text-2xl font-bold">All Products</h1>
//       <div className="grid grid-cols-2 gap-4 mt-4">
//         {products.map(product => (
//           <div key={product.id} className="bg-white p-4 shadow rounded">
//             <img src={product.image} alt={product.title} className="w-24 h-24 object-cover mx-auto" />
//             <h2 className="text-lg font-bold mt-2">{product.title}</h2>
//             <p className="text-gray-600">${product.price}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// function ManageProducts() {
//   const [products, setProducts] = useState([]);
//   const [form, setForm] = useState({ title: '', price: 0, description: '', image: '', category: '', stock: 0 });

//   useEffect(() => {
//     axios.get(API_URL)
//       .then((response) => setProducts(response.data))
//       .catch((error) => console.error('Error fetching products', error));
//   }, []);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios.post(API_URL, form)
//       .then((response) => setProducts([...products, response.data]))
//       .catch((error) => console.error('Error adding product', error));
//   };

//   return (
//     <div>
//       <h1 className="text-2xl font-bold">Manage Products</h1>
//       <form onSubmit={handleSubmit} className="bg-white p-4 shadow rounded mt-4">
//         <input type="text" name="title" value={form.title} onChange={handleChange} placeholder="Title" className="w-full p-2 border rounded mb-2" required />
//         <input type="number" name="price" value={form.price} onChange={handleChange} placeholder="Price" className="w-full p-2 border rounded mb-2" required />
//         <textarea name="description" value={form.description} onChange={handleChange} placeholder="Description" className="w-full p-2 border rounded mb-2" required />
//         <input type="text" name="image" value={form.image} onChange={handleChange} placeholder="Image URL" className="w-full p-2 border rounded mb-2" required />
//         <input type="text" name="category" value={form.category} onChange={handleChange} placeholder="Category" className="w-full p-2 border rounded mb-2" required />
//         <input type="number" name="stock" value={form.stock} onChange={handleChange} placeholder="Stock" className="w-full p-2 border rounded mb-2" required />
//         <button type="submit" className="bg-blue-500 text-white p-2 rounded">Add Product</button>
//       </form>
//     </div>
//   );
// }

// function UsersList() {
//   const { user } = useUser();
//   return (
//     <div>
//       <h1 className="text-2xl font-bold">Users List</h1>
//       <div className="bg-white p-4 shadow rounded mt-4">
//         <p><strong>Name:</strong> {user?.fullName}</p>
//         <p><strong>Email:</strong> {user?.emailAddresses[0]?.emailAddress}</p>
//       </div>
//     </div>
//   );
// }

// function ViewOrders() {
//   const orders = [
//     { id: 1, customer: "John Doe", total: "$120", status: "Shipped" },
//     { id: 2, customer: "Jane Smith", total: "$250", status: "Processing" },
//     { id: 3, customer: "Alice Johnson", total: "$80", status: "Delivered" },
//     { id: 4, customer: "Bob Brown", total: "$150", status: "Pending" },
//   ];

//   return (
//     <div>
//       <h1 className="text-2xl font-bold">View Orders</h1>
//       <table className="w-full mt-4 bg-white shadow rounded">
//         <thead>
//           <tr className="bg-gray-200">
//             <th className="p-2">Order ID</th>
//             <th className="p-2">Customer</th>
//             <th className="p-2">Total</th>
//             <th className="p-2">Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {orders.map(order => (
//             <tr key={order.id} className="border-t">
//               <td className="p-2">{order.id}</td>
//               <td className="p-2">{order.customer}</td>
//               <td className="p-2">{order.total}</td>
//               <td className="p-2">{order.status}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useUser } from '@clerk/nextjs';
// import { FaEdit, FaTrash } from 'react-icons/fa';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


// const API_URL = 'https://6789dfdadd587da7ac27e74a.mockapi.io/Ecommerce';

// export default function AdminDashboard() {
//   const [activePage, setActivePage] = useState('dashboard');

//   return (
//     <div className="flex h-screen bg-blue-50">
//       {/* Sidebar */}
//       <div className="w-64 bg-blue-900 text-white p-5">
//         <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
//         <nav>
//           <ul className="space-y-4">
//             {['Dashboard', 'All Products', 'Manage Products', 'View Orders', 'Users'].map((name) => (
//               <li key={name}>
//                 <button 
//                   onClick={() => setActivePage(name.toLowerCase().replace(/ /g, ''))}
//                   className={`w-full text-left p-2 rounded ${activePage === name.toLowerCase().replace(/ /g, '') ? 'bg-blue-700' : 'hover:bg-blue-600'}`}
//                 >
//                   {name}
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </nav>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 p-6">
//         {activePage === 'dashboard' && <DashboardContent />}
//         {activePage === 'allproducts' && <ProductsList />}
//         {activePage === 'manageproducts' && <ManageProducts />}
//         {activePage === 'vieworders' && <ViewOrders />}
//         {activePage === 'users' && <UsersList />}
//       </div>
//     </div>
//   );
// }

// function DashboardContent() {
//   return (
//     <div>
//       <h1 className="text-2xl font-bold text-blue-900">Welcome to Admin Dashboard</h1>
//       <div className="grid grid-cols-2 gap-4 mt-4">
//         <div className="bg-white p-4 shadow rounded">Total Products: 120</div>
//         <div className="bg-white p-4 shadow rounded">Total Orders: 50</div>
//         <div className="bg-white p-4 shadow rounded">Total Users: 300</div>
//         <div className="bg-white p-4 shadow rounded">Total Revenue: $25,000</div>
//       </div>
//     </div>
//   );
// }

// function ProductsList() {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     axios.get(API_URL)
//       .then((response) => setProducts(response.data))
//       .catch((error) => console.error('Error fetching products', error))
//       .finally(() => setLoading(false));
//   }, []);

//   const handleDelete = (id) => {
//     axios.delete(`${API_URL}/${id}`)
//       .then(() => setProducts(products.filter(product => product.id !== id)))
//       .catch((error) => console.error('Error deleting product', error));
//   };

//   if (loading) return <p>Loading products...</p>;

//   return (
//     <div className="max-w-3xl max-h-[500px] mx-auto p-4 bg-gray-100 overflow-auto">
//       <h1 className="text-2xl font-bold text-blue-900 text-center">All Products</h1>
//       <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 mt-4">
//         {products.map(product => (
//           <div key={product.id} className="bg-white p-4 shadow rounded text-center">
//             <div className="w-full flex justify-center">
//               <img src={product.image} alt={product.title} className="w-32 h-32 object-cover rounded-lg" />
//             </div>
//             <h2 className="text-lg font-bold mt-2 text-blue-800 break-words">{product.title}</h2>
//             <p className="text-gray-600">${product.price}</p>
//             <div className="flex justify-center mt-2 space-x-3 flex-wrap">
//               <button className="text-blue-600 hover:text-blue-800">
//                 <FaEdit size={18} />
//               </button>
//               <button onClick={() => handleDelete(product.id)} className="text-red-600 hover:text-red-800">
//                 <FaTrash size={18} />
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
  
// }


// function ManageProducts() {
//   const [products, setProducts] = useState([]);
//   const [form, setForm] = useState({ title: '', price: 0, description: '', image: '', category: '', stock: 0 });
//   const [imageFile, setImageFile] = useState(null);

//   useEffect(() => {
//     axios.get(API_URL)
//       .then((response) => setProducts(response.data))
//       .catch((error) => console.error('Error fetching products', error));
//   }, []);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleImageChange = (e) => {
//     setImageFile(e.target.files[0]);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     if (imageFile) {
//       const formData = new FormData();
//       formData.append('file', imageFile);
//       formData.append('upload_preset', 'your_preset_here');
      
//       try {
//         const uploadResponse = await axios.post('https://6789dfdadd587da7ac27e74a.mockapi.io/Ecommerce', formData);
//         const imageUrl = uploadResponse.data.secure_url;
//         form.image = imageUrl;
//       } catch (error) {
//         console.error('Error uploading image', error);
//         return;
//       }
//     }

//     axios.post(API_URL, form)
//       .then((response) => setProducts([...products, response.data]))
//       .catch((error) => console.error('Error adding product', error));
//   };

//   return (
//     <div>
//       <h1 className="text-2xl font-bold text-blue-900">Manage Products</h1>
//       <form onSubmit={handleSubmit} className="bg-white p-4 shadow rounded mt-4">
//         <input type="text" name="title" value={form.title} onChange={handleChange} placeholder="Title" className="w-full p-2 border rounded mb-2" required />
//         <input type="number" name="price" value={form.price} onChange={handleChange} placeholder="Price" className="w-full p-2 border rounded mb-2" required />
//         <textarea name="description" value={form.description} onChange={handleChange} placeholder="Description" className="w-full p-2 border rounded mb-2" required />
//         <input type="file" onChange={handleImageChange} className="w-full p-2 border rounded mb-2" required />
//         <input type="text" name="category" value={form.category} onChange={handleChange} placeholder="Category" className="w-full p-2 border rounded mb-2" required />
//         <input type="number" name="stock" value={form.stock} onChange={handleChange} placeholder="Stock" className="w-full p-2 border rounded mb-2" required />
//         <button type="submit" className="bg-blue-600 text-white p-2 rounded">Add Product</button>
//       </form>
//     </div>
//   );
// }

// function UsersList() {
//   const { user } = useUser();
//   return (
//     <div>
//       <h1 className="text-2xl font-bold text-blue-900">Users List</h1>
//       <div className="bg-white p-4 shadow rounded mt-4">
//         <p><strong>Name:</strong> {user?.fullName}</p>
//         <p><strong>Email:</strong> {user?.emailAddresses[0]?.emailAddress}</p>
//       </div>
//     </div>
//   );
// }

// function ViewOrders() {
//   const orders = [
//     { id: 1, customer: "John Doe", total: "$120", status: "Shipped" },
//     { id: 2, customer: "Jane Smith", total: "$250", status: "Processing" },
//     { id: 3, customer: "Alice Johnson", total: "$80", status: "Delivered" },
//     { id: 4, customer: "Bob Brown", total: "$150", status: "Pending" },
//   ];

//   return (
//     <div>
//       <h1 className="text-2xl font-bold text-blue-900">View Orders</h1>
//       <table className="w-full mt-4 bg-white shadow rounded">
//         <thead>
//           <tr className="bg-blue-200">
//             <th className="p-2">Order ID</th>
//             <th className="p-2">Customer</th>
//             <th className="p-2">Total</th>
//             <th className="p-2">Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {orders.map(order => (
//             <tr key={order.id} className="border-t">
//               <td className="p-2">{order.id}</td>
//               <td className="p-2">{order.customer}</td>
//               <td className="p-2">{order.total}</td>
//               <td className="p-2">{order.status}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }



import { useState, useEffect } from 'react';
import axios from 'axios';
import { useUser } from '@clerk/nextjs';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { ShoppingCart, Package, Users, DollarSign } from 'lucide-react';
import Loader from '@/components/loader';


const API_URL = 'https://6789dfdadd587da7ac27e74a.mockapi.io/Ecommerce';

export default function AdminDashboard() {
  const [activePage, setActivePage] = useState('dashboard');
  
  return (
    <div className="flex h-screen bg-blue-50">
      {/* Sidebar */}
      <div className="w-64 bg-blue-900 text-white p-5">
        <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
        <nav>
          <ul className="space-y-4">
            {['Dashboard', 'All Products', 'Manage Products', 'View Orders', 'Users'].map((name) => (
              <li key={name}>
                <button 
                  onClick={() => setActivePage(name.toLowerCase().replace(/ /g, ''))}
                  className={`w-full text-left p-2 rounded ${activePage === name.toLowerCase().replace(/ /g, '') ? 'bg-blue-700' : 'hover:bg-blue-600'}`}
                >
                  {name}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 overflow-y-auto">
        {activePage === 'dashboard' && <DashboardContent />}
        {activePage === 'allproducts' && <ProductsList />}
        {activePage === 'manageproducts' && <ManageProducts />}
        {activePage === 'vieworders' && <ViewOrders />}
        {activePage === 'users' && <UsersList />}
      </div>
      <ToastContainer />
    </div>
  );
}

function DashboardContent() {
  const data = [
    { name: 'Jan', revenue: 5000 },
    { name: 'Feb', revenue: 7000 },
    { name: 'Mar', revenue: 6500 },
    { name: 'Apr', revenue: 8000 },
    { name: 'May', revenue: 7500 },
    { name: 'Jun', revenue: 9000 },
  ];
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-blue-900 text-center mb-6">Admin Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 shadow-lg rounded-2xl flex items-center gap-4">
          <Package className="text-blue-500 w-10 h-10" />
          <div>
            <p className="text-gray-600">Total Products</p>
            <h2 className="text-xl font-bold">120</h2>
          </div>
        </div>

        <div className="bg-white p-6 shadow-lg rounded-2xl flex items-center gap-4">
          <ShoppingCart className="text-green-500 w-10 h-10" />
          <div>
            <p className="text-gray-600">Total Orders</p>
            <h2 className="text-xl font-bold">50</h2>
          </div>
        </div>

        <div className="bg-white p-6 shadow-lg rounded-2xl flex items-center gap-4">
          <Users className="text-purple-500 w-10 h-10" />
          <div>
            <p className="text-gray-600">Total Users</p>
            <h2 className="text-xl font-bold">300</h2>
          </div>
        </div>

        <div className="bg-white p-6 shadow-lg rounded-2xl flex items-center gap-4">
          <DollarSign className="text-yellow-500 w-10 h-10" />
          <div>
            <p className="text-gray-600">Total Revenue</p>
            <h2 className="text-xl font-bold">$25,000</h2>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 shadow-lg rounded-2xl mt-8">
        <h2 className="text-xl font-bold text-gray-700 mb-4">Revenue Trend</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis dataKey="name" stroke="#4A5568" />
            <YAxis stroke="#4A5568" />
            <Tooltip />
            <Bar dataKey="revenue" fill="#3182CE" radius={[5, 5, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

function ProductsList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(API_URL);
      setProducts(response.data);
    } catch (error) {
      toast.error('Error fetching products');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setProducts(products.filter(product => product.id !== id));
      toast.success('Product deleted successfully');
    } catch (error) {
      toast.error('Error deleting product');
    }
  };

  if (loading) return <p><Loader/></p>;

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-blue-900 text-center">All Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
        {products.map(product => (
          <div key={product.id} className="bg-white p-4 shadow rounded text-center">
            <div className="w-full flex justify-center">
              <img src={product.image} alt={product.title} className="w-32 h-32 object-cover rounded-lg" />
            </div>
            <h2 className="text-lg font-bold mt-2 text-blue-800 break-words">{product.title}</h2>
            <p className="text-gray-600">${product.price}</p>
            <div className="flex justify-center mt-2 space-x-3">
              <button className="text-blue-600 hover:text-blue-800">
                <FaEdit size={18} />
              </button>
              <button onClick={() => handleDelete(product.id)} className="text-red-600 hover:text-red-800">
                <FaTrash size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ManageProducts() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({ title: '', price: 0, description: '', image: '', category: '', stock: 0 });

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(API_URL);
      setProducts(response.data);
    } catch (error) {
      toast.error('Error fetching products');
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(API_URL, form);
      setProducts([...products, response.data]);
      toast.success('Product added successfully');
      setForm({ title: '', price: 0, description: '', image: '', category: '', stock: 0 }); // Reset form
    } catch (error) {
      toast.error('Error adding product');
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-blue-900">Manage Products</h1>
      <form onSubmit={handleSubmit} className="bg-white p-4 shadow rounded mt-4">
        <input type="text" name="title" value={form.title} onChange={handleChange} placeholder="Title" className="w-full p-2 border rounded mb-2" required />
        <input type="number" name="price" value={form.price} onChange={handleChange} placeholder="Price" className="w-full p-2 border rounded mb-2" required />
        <textarea name="description" value={form.description} onChange={handleChange} placeholder="Description" className="w-full p-2 border rounded mb-2" required />
        <input type="text" name="image" value={form.image} onChange={handleChange} placeholder="Image URL" className="w-full p-2 border rounded mb-2" required />
        <input type="text" name="category" value={form.category} onChange={handleChange} placeholder="Category" className="w-full p-2 border rounded mb-2" required />
        <input type="number" name="stock" value={form.stock} onChange={handleChange} placeholder="Stock" className="w-full p-2 border rounded mb-2" required />
        <button type="submit" className="bg-blue-600 text-white p-2 rounded">Add Product</button>
      </form>
    </div>
  );
}

function UsersList() {
  const { user } = useUser();
  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-blue-900">Users List</h1>
      <div className="bg-white p-4 shadow rounded mt-4">
        <p><strong>Name:</strong> {user?.fullName}</p>
        <p><strong>Email:</strong> {user?.emailAddresses[0]?.emailAddress}</p>
      </div>
    </div>
  );
}

function ViewOrders() {
  const orders = [
    { id: 1, customer: "John Doe", total: "$120", status: "Shipped" },
    { id: 2, customer: "Jane Smith", total: "$250", status: "Processing" },
    { id: 3, customer: "Alice Johnson", total: "$80", status: "Delivered" },
    { id: 4, customer: "Bob Brown", total: "$150", status: "Pending" },
  ];

  return (
    <div className="max-w-7xl mx-auto p-8">
    <h1 className="text-2xl font-bold text-blue-900 mb-6">View Orders</h1>
    <div className="overflow-x-auto">
      <table className="w-full mt-4 bg-white shadow rounded mx-auto">
        <thead>
          <tr className="bg-blue-200 sticky top-0">
            <th className="p-2 text-center">Order ID</th>
            <th className="p-2 text-center">Customer</th>
            <th className="p-2 text-center">Total</th>
            <th className="p-2 text-center">Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id} className="border-t hover:bg-gray-100">
              <td className="p-2 text-center">{order.id}</td>
              <td className="p-2 text-center">{order.customer}</td>
              <td className="p-2 text-center">{order.total}</td>
              <td className="p-2 text-center">{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  );
}
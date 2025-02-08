

// 'use client';


// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useUser } from '@clerk/nextjs';
// import { FaEdit, FaTrash } from 'react-icons/fa';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
// import { ShoppingCart, Package, Users, DollarSign } from 'lucide-react';
// import Loader from '@/components/loader';


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
//       <div className="flex-1 p-6 overflow-y-auto">
//         {activePage === 'dashboard' && <DashboardContent />}
//         {activePage === 'allproducts' && <ProductsList />}
//         {activePage === 'manageproducts' && <ManageProducts />}
//         {activePage === 'vieworders' && <ViewOrders />}
//         {activePage === 'users' && <UsersList />}
//       </div>
//       <ToastContainer />
//     </div>
//   );
// }

// function DashboardContent() {
//   const data = [
//     { name: 'Jan', revenue: 5000 },
//     { name: 'Feb', revenue: 7000 },
//     { name: 'Mar', revenue: 6500 },
//     { name: 'Apr', revenue: 8000 },
//     { name: 'May', revenue: 7500 },
//     { name: 'Jun', revenue: 9000 },
//   ];
//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <h1 className="text-3xl font-bold text-blue-900 text-center mb-6">Admin Dashboard</h1>
      
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//         <div className="bg-white p-6 shadow-lg rounded-2xl flex items-center gap-4">
//           <Package className="text-blue-500 w-10 h-10" />
//           <div>
//             <p className="text-gray-600">Total Products</p>
//             <h2 className="text-xl font-bold">120</h2>
//           </div>
//         </div>

//         <div className="bg-white p-6 shadow-lg rounded-2xl flex items-center gap-4">
//           <ShoppingCart className="text-green-500 w-10 h-10" />
//           <div>
//             <p className="text-gray-600">Total Orders</p>
//             <h2 className="text-xl font-bold">50</h2>
//           </div>
//         </div>

//         <div className="bg-white p-6 shadow-lg rounded-2xl flex items-center gap-4">
//           <Users className="text-purple-500 w-10 h-10" />
//           <div>
//             <p className="text-gray-600">Total Users</p>
//             <h2 className="text-xl font-bold">300</h2>
//           </div>
//         </div>

//         <div className="bg-white p-6 shadow-lg rounded-2xl flex items-center gap-4">
//           <DollarSign className="text-yellow-500 w-10 h-10" />
//           <div>
//             <p className="text-gray-600">Total Revenue</p>
//             <h2 className="text-xl font-bold">$25,000</h2>
//           </div>
//         </div>
//       </div>

//       <div className="bg-white p-6 shadow-lg rounded-2xl mt-8">
//         <h2 className="text-xl font-bold text-gray-700 mb-4">Revenue Trend</h2>
//         <ResponsiveContainer width="100%" height={300}>
//           <BarChart data={data}>
//             <XAxis dataKey="name" stroke="#4A5568" />
//             <YAxis stroke="#4A5568" />
//             <Tooltip />
//             <Bar dataKey="revenue" fill="#3182CE" radius={[5, 5, 0, 0]} />
//           </BarChart>
//         </ResponsiveContainer>
//       </div>
//     </div>
//   );
// }

// function ProductsList() {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     try {
//       const response = await axios.get(API_URL);
//       setProducts(response.data);
//     } catch (error) {
//       toast.error('Error fetching products');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`${API_URL}/${id}`);
//       setProducts(products.filter(product => product.id !== id));
//       toast.success('Product deleted successfully');
//     } catch (error) {
//       toast.error('Error deleting product');
//     }
//   };

//   if (loading) return <p><Loader/></p>;

//   return (
//     <div className="max-w-7xl mx-auto p-4">
//       <h1 className="text-2xl font-bold text-blue-900 text-center">All Products</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
//         {products.map(product => (
//           <div key={product.id} className="bg-white p-4 shadow rounded text-center">
//             <div className="w-full flex justify-center">
//               <img src={product.image} alt={product.title} className="w-32 h-32 object-cover rounded-lg" />
//             </div>
//             <h2 className="text-lg font-bold mt-2 text-blue-800 break-words">{product.title}</h2>
//             <p className="text-gray-600">${product.price}</p>
//             <div className="flex justify-center mt-2 space-x-3">
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

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     try {
//       const response = await axios.get(API_URL);
//       setProducts(response.data);
//     } catch (error) {
//       toast.error('Error fetching products');
//     }
//   };

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post(API_URL, form);
//       setProducts([...products, response.data]);
//       toast.success('Product added successfully');
//       setForm({ title: '', price: 0, description: '', image: '', category: '', stock: 0 }); // Reset form
//     } catch (error) {
//       toast.error('Error adding product');
//     }
//   };

//   return (
//     <div className="max-w-7xl mx-auto p-4">
//       <h1 className="text-2xl font-bold text-blue-900">Manage Products</h1>
//       <form onSubmit={handleSubmit} className="bg-white p-4 shadow rounded mt-4">
//         <input type="text" name="title" value={form.title} onChange={handleChange} placeholder="Title" className="w-full p-2 border rounded mb-2" required />
//         <input type="number" name="price" value={form.price} onChange={handleChange} placeholder="Price" className="w-full p-2 border rounded mb-2" required />
//         <textarea name="description" value={form.description} onChange={handleChange} placeholder="Description" className="w-full p-2 border rounded mb-2" required />
//         <input type="text" name="image" value={form.image} onChange={handleChange} placeholder="Image URL" className="w-full p-2 border rounded mb-2" required />
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
//     <div className="max-w-7xl mx-auto p-4">
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
//     <div className="max-w-7xl mx-auto p-8">
//     <h1 className="text-2xl font-bold text-blue-900 mb-6">View Orders</h1>
//     <div className="overflow-x-auto">
//       <table className="w-full mt-4 bg-white shadow rounded mx-auto">
//         <thead>
//           <tr className="bg-blue-200 sticky top-0">
//             <th className="p-2 text-center">Order ID</th>
//             <th className="p-2 text-center">Customer</th>
//             <th className="p-2 text-center">Total</th>
//             <th className="p-2 text-center">Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {orders.map(order => (
//             <tr key={order.id} className="border-t hover:bg-gray-100">
//               <td className="p-2 text-center">{order.id}</td>
//               <td className="p-2 text-center">{order.customer}</td>
//               <td className="p-2 text-center">{order.total}</td>
//               <td className="p-2 text-center">{order.status}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   </div>
//   );
// }





'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import { useUser } from '@clerk/nextjs';
import { FaEdit, FaTrash, FaBars, FaTimes } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { ShoppingCart, Package, Users, DollarSign } from 'lucide-react';
import Loader from '@/components/loader';

const API_URL = 'https://6789dfdadd587da7ac27e74a.mockapi.io/Ecommerce';

export default function AdminDashboard() {
  const [activePage, setActivePage] = useState('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen bg-blue-50">
      {/* Hamburger Menu */}
      <button
        onClick={toggleSidebar}
        className="md:hidden fixed top-1 left-1 z-50 p-2 bg-blue-900 text-white rounded"
      >
        {isSidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={`w-64 bg-blue-900 text-white p-5 fixed md:relative h-screen transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 transition-transform duration-200 ease-in-out z-40`}
      >
        <h2 className="text-xl font-bold mb-6 ml-4 px-2">Admin Panel</h2>
        <nav>
          <ul className="space-y-4">
            {['Dashboard', 'All Products', 'Manage Products', 'View Orders', 'Users'].map((name) => (
              <li key={name}>
                <button
                  onClick={() => {
                    setActivePage(name.toLowerCase().replace(/ /g, ''));
                    setIsSidebarOpen(false); // Close sidebar on item click
                  }}
                  className={`w-full text-left p-2 rounded ${
                    activePage === name.toLowerCase().replace(/ /g, '') ? 'bg-blue-700' : 'hover:bg-blue-600'
                  }`}
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
    <div className="max-w-7xl mx-auto p-6">
  <h1 className="text-3xl font-extrabold text-blue-900 mb-4">Users List</h1>
  <div className="bg-white p-6 shadow-lg rounded-lg border border-gray-200 overflow-auto">
    <div className="flex items-center space-x-4">
      <div className="bg-blue-100 text-blue-900 font-semibold px-4 py-2 rounded-md">
        Name:
      </div>
      <p className="text-lg text-gray-700">{user?.fullName || "N/A"}</p>
    </div>
    <div className="flex items-center space-x-4 mt-3 ">
      <div className="bg-green-100 text-green-900 font-semibold px-4 py-2 rounded-md">
        Email:
      </div>
      <p className="text-lg text-gray-700 ">
        {user?.emailAddresses[0]?.emailAddress || "N/A"}
      </p>
    </div>
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
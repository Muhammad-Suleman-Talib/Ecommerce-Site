// 'use client'
// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const App = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [editingProduct, setEditingProduct] = useState(null);
//   const [form, setForm] = useState({
//     title: "",
//     price: "",
//     description: "",
//     image: "",
//     category: "",
//   });

//   // Fetch products
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get("https://6789dfdadd587da7ac27e74a.mockapi.io/Ecommerce");
//         setProducts(response.data);
//       } catch (error) {
//         console.error("Error fetching products", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchProducts();
//   }, []);

//   // Handle form input change
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm({ ...form, [name]: value });
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setForm({ ...form, image: reader.result });
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   // Handle create or update
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (editingProduct) {
//         // Update product
//         await axios.put(`https://6789dfdadd587da7ac27e74a.mockapi.io/Ecommerce/${editingProduct.id}`, form);
//         setProducts(
//           products.map((product) =>
//             product.id === editingProduct.id ? { ...product, ...form } : product
//           )
//         );
//       } else {
//         // Create new product
//         const response = await axios.post("https://6789dfdadd587da7ac27e74a.mockapi.io/Ecommerce", form);
//         setProducts([...products, response.data]);
//       }
//       resetForm();
//     } catch (error) {
//       console.error("Error submitting form", error);
//     }
//   };

//   // Handle delete
//   const deleteProduct = async (id) => {
//     try {
//       await axios.delete(`https://6789dfdadd587da7ac27e74a.mockapi.io/Ecommerce/${id}`);
//       setProducts(products.filter((product) => product.id !== id));
//     } catch (error) {
//       console.error("Error deleting product", error);
//     }
//   };

//   // Reset form
//   const resetForm = () => {
//     setForm({ title: "", price: "", description: "", image: "", category: "" });
//     setEditingProduct(null);
//   };

//   // Handle edit
//   const handleEdit = (product) => {
//     setEditingProduct(product);
//     setForm(product);
//   };

//   if (loading) return <p className="text-center">Loading...</p>;

//   return (
//     <div className="container mx-auto p-6">
//       <h1 className="text-4xl font-extrabold text-center mb-8 text-gray-800">Admin Dashboard - FakeStore Products</h1>

//       {/* Form Section */}
//       <form onSubmit={handleSubmit} className="space-y-4 max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
//         <div className="flex space-x-4">
//           <input
//             type="file"
//             accept="image/*"
//             onChange={handleImageChange}
//             className="block w-1/4 p-2 border rounded"
//           />
//           {form.image && (
//             <img src={form.image} alt="Product Preview" className="w-16 h-16 object-cover rounded" />
//           )}
//         </div>
        
//         <div className="space-y-2">
//           <input
//             type="text"
//             name="title"
//             value={form.title}
//             onChange={handleChange}
//             placeholder="Product Title"
//             className="block w-full p-2 border rounded shadow-sm"
//           />
//           <input
//             type="text"
//             name="price"
//             value={form.price}
//             onChange={handleChange}
//             placeholder="Price"
//             className="block w-full p-2 border rounded shadow-sm"
//           />
//           <input
//             type="text"
//             name="category"
//             value={form.category}
//             onChange={handleChange}
//             placeholder="Category"
//             className="block w-full p-2 border rounded shadow-sm"
//           />
//           <textarea
//             name="description"
//             value={form.description}
//             onChange={handleChange}
//             placeholder="Product Description"
//             rows="4"
//             className="block w-full p-2 border rounded shadow-sm"
//           />
//         </div>
        
//         <div className="flex items-center space-x-4">
//           <button className="px-6 py-2 bg-blue-600 text-white rounded shadow-md hover:bg-blue-700 transition">
//             {editingProduct ? "Update Product" : "Add Product"}
//           </button>
//           {editingProduct && (
//             <button
//               type="button"
//               onClick={resetForm}
//               className="px-6 py-2 bg-gray-600 text-white rounded shadow-md hover:bg-gray-700 transition"
//             >
//               Cancel
//             </button>
//           )}
//         </div>
//       </form>

//       {/* Product List Section */}
//       <div className="space-y-6 mt-8">
//         {products.map((product) => (
//           <div
//             key={product.id}
//             className="flex justify-between items-center p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition"
//           >
//             <div className="flex items-center space-x-4">
//               <img
//                 src={product.image}
//                 alt={product.title}
//                 className="w-16 h-16 object-cover rounded"
//               />
//               <div>
//                 <h2 className="font-bold text-xl text-gray-800">{product.title}</h2>
//                 <p className="text-gray-600">${product.price}</p>
//                 <p className="text-gray-500 text-sm">{product.category}</p>
//                 <p className="text-gray-400 text-sm">{product.description}</p>
//               </div>
//             </div>
//             <div className="flex items-center space-x-4">
//               <button
//                 onClick={() => handleEdit(product)}
//                 className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
//               >
//                 Edit
//               </button>
//               <button
//                 onClick={() => deleteProduct(product.id)}
//                 className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default App;

'use client'
import React, { useEffect, useState } from "react";
import axios from "axios";

interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
  stock: number;
}

const App = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [form, setForm] = useState<Product>({
    title: "",
    price: 0,
    description: "",
    image: "",
    category: "",
    stock: 0,
  } as Product);
  // Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get<Product[]>("https://6789dfdadd587da7ac27e74a.mockapi.io/Ecommerce");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products", error);
      } finally {
        setLoading(false);
      }

    
    };
    fetchProducts();
  }, []);

  // Handle form input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) {
      alert("Error: Could not read file");
      return;
    }
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setForm({ ...form, image: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle create or update
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Validation: Ensure all fields are filled before submitting
    if (!form.title || !form.price || !form.category || !form.stock) {
      alert("Please fill all required fields");
      return;
    }

    try {
      if (editingProduct) {
        // Update product
        await axios.put<Product>(`https://6789dfdadd587da7ac27e74a.mockapi.io/Ecommerce/${editingProduct.id}`, form);
        setProducts(
          products.map((product) =>
            product.id === editingProduct.id ? { ...product, ...form } : product
          )
        );
      } else {
        // Create new product
        const response = await axios.post<Product>("https://6789dfdadd587da7ac27e74a.mockapi.io/Ecommerce", form);
        setProducts([...products, response.data]);
      }
      resetForm();
    } catch (error) {
      console.error("Error submitting form", error);
    }
  };

  // Handle delete
  const deleteProduct = async (id: string) => {
    try {
      await axios.delete(`https://6789dfdadd587da7ac27e74a.mockapi.io/Ecommerce/${id}`);
      setProducts(products.filter((product) => product.id !== id));
    } catch (error) {
      console.error("Error deleting product", error);
    }
  };

  // Reset form
  const resetForm = () => {
    setForm({id: "", title: "", price: 0, description: "", image: "", category: "", stock: 0 });
    setEditingProduct(null);
  };

  // Handle edit
  const handleEdit = (product: Product) => {
    setEditingProduct(product);
    setForm({ ...product }); // Use a spread to ensure the form is updated with the current product's data
  };

  if (loading) return <p className="text-center">Loading...</p>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-extrabold text-center mb-8 text-gray-800">Admin Dashboard - FakeStore Products</h1>

      {/* Form Section */}
      <form onSubmit={handleSubmit} className="space-y-4 max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
        <div className="flex space-x-4">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="block w-1/4 p-2 border rounded"
          />
          {form.image && (
            <img src={form.image} alt="Product Preview" className="w-16 h-16 object-cover rounded" />
          )}
        </div>
        
        <div className="space-y-2">
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Product Title"
            className="block w-full p-2 border rounded shadow-sm"
          />
          <input
            type="number"
            name="price"
            value={form.price}
            onChange={handleChange}
            placeholder="Price"
            className="block w-full p-2 border rounded shadow-sm"
          />
          <input
            type="text"
            name="category"
            value={form.category}
            onChange={handleChange}
            placeholder="Category"
            className="block w-full p-2 border rounded shadow-sm"
          />
          <input
            type="number"
            name="stock"
            value={form.stock}
            onChange={handleChange}
            placeholder="Stock Quantity"
            className="block w-full p-2 border rounded shadow-sm"
          />
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Product Description"
            rows={4}
            className="block w-full p-2 border rounded shadow-sm"
          />
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="px-6 py-2 bg-blue-600 text-white rounded shadow-md hover:bg-blue-700 transition">
            {editingProduct ? "Update Product" : "Add Product"}
          </button>
          {editingProduct && (
            <button
              type="button"
              onClick={resetForm}
              className="px-6 py-2 bg-gray-600 text-white rounded shadow-md hover:bg-gray-700 transition"
            >
              Cancel
            </button>
          )}
        </div>
      </form>

      {/* Product List Section */}
      <div className="space-y-6 mt-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex justify-between items-center p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition"
          >
            <div className="flex items-center space-x-4">
              <img
                src={product.image}
                alt={product.title}
                className="w-16 h-16 object-cover rounded"
              />
              <div>
                <h2 className="font-bold text-xl text-gray-800">{product.title}</h2>
                <p className="text-gray-600">${product.price}</p>
                <p className="text-gray-500 text-sm">{product.category}</p>
                <p className="text-gray-400 text-sm">{product.description}</p>
                <p className="text-gray-500 text-sm">Stock: {product.stock}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => handleEdit(product)}
                className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
              >
                Edit
              </button>
              <button
                onClick={() => deleteProduct(product.id)}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;


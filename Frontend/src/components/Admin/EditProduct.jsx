import React, { useState } from "react";

const EditProduct = () => {
  const [productData, setProductData] = useState({
    name: "",
    description: "",
    price: 0,
    countInStock: 0,
    sku: "",
    category: "",
    brand: "",
    sizes: "",
    colors: "",
    collections: "",
    material: "",
    gender: "",
    images: [
      { url: "https://picsum.photos/150?random=1" },
      { url: "https://picsum.photos/150?random=2" },
    ],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    console.log(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Product Data:", productData);
    setProductData({
      name: "",
      description: "",
      price: 0,
      countInStock: 0,
      sku: "",
      category: "",
      brand: "",
      sizes: "",
      colors: "",
      collections: "",
      material: "",
      gender: "",
      images: [],
    });
  };

  return (
    <div className="max-w-5xl mx-auto p-6 shadow-md rounded-md">
      <h2 className="text-3xl font-bold mb-3">Edit Product</h2>
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-full">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={productData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md mb-3"
              required
            />
          </div>
          <div className="mb-3">
            <label className="block text-gray-700">Description</label>
            <textarea
              name="description"
              value={productData.description}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md mb-3"
              rows={4}
              required
            ></textarea>
          </div>
          <div className="mb-3">
            <label className="block text-gray-700">Price</label>
            <input
              type="number"
              name="price"
              value={productData.price}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md mb-3"
            />
          </div>

          <div className="mb-3">
            <label className="block text-gray-700">Count in Stock</label>
            <input
              type="number"
              name="countInStock"
              value={productData.countInStock}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md mb-3"
            />
          </div>

          <div className="mb-3">
            <label className="block text-gray-700">SKU</label>
            <input
              type="text"
              name="sku"
              value={productData.sku}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md mb-3"
            />
          </div>

          <div className="mb-3">
            <label className="block text-gray-700">
              Sizes (comma-separated)
            </label>
            <input
              type="text"
              name="sizes"
              value={productData.sizes}
              onChange={(e) =>
                setProductData((prevData) => ({
                  ...prevData,
                  sizes: e.target.value.split(",").map((size) => size.trim()),
                }))
              }
              className="w-full p-2 border border-gray-300 rounded-md mb-3"
            />
          </div>
          <div className="mb-3">
            <label className="block text-gray-700">
              Colors (comma-separated)
            </label>
            <input
              type="text"
              name="colors"
              value={productData.colors}
              onChange={(e) =>
                setProductData((prevData) => ({
                  ...prevData,
                  colors: e.target.value
                    .split(",")
                    .map((color) => color.trim()),
                }))
              }
              className="w-full p-2 border border-gray-300 rounded-md mb-3"
            />
          </div>

          <div className="mb-3">
            <label className="block text-gray-700">Upload Image</label>
            <input
              type="file"
              onChange={handleImageUpload}
              className="w-full p-2 border border-gray-300 rounded-md mb-3"
            />
            <div className="flex gap-4 mt-4 mb-3">
              {productData.images.map((image, index) => (
                <div key={index}>
                  <img
                    src={image.url}
                    alt={image.altText || "Product Image"}
                    className="w-20 h-20 object-cover rounded-md shadow-md"
                  />
                </div>
              ))}
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700"
          >
            Update Product
          </button>
        </form>
      </div>
    </div>
  );
};
export default EditProduct;
import React, { useState } from "react";
import { toast } from "sonner";

const selectProduct = {
  name: "Stylish Jacket",
  price: 120,
  originalPrice: 150,
  description: "This is a stylish Jacket perfect for any occasion",
  brand: "FashionBrand",
  material: "Leather",
  sizes: ["S", "M", "L", "XL"],
  colors: ["Red", "Black"],
  images: [
    { url: "https://picsum.photos/500/500?random=1", altText: "Stylish Jacket 1" },
    { url: "https://picsum.photos/500/500?random=2", altText: "Stylish Jacket 2" },
    { url: "https://picsum.photos/500/500?random=3", altText: "Stylish Jacket 3" },
  ],
};

const ProductsDetail = () => {
  const [selectedImage, setSelectedImage] = useState(selectProduct.images[0]);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      toast.error("Please select both color and size.");
      return;
    }

    setIsButtonDisabled(true); // Disable button
    toast.success("Item added to cart successfully!");

    setTimeout(() => {
      setIsButtonDisabled(false); // Enable button after 2 seconds
    }, 2000);
  };

  return (
    <div className="p-6">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Thumbnails */}
          <div className="hidden md:flex flex-col space-y-4 mr-6">
            {selectProduct.images.map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={image.altText || `Thumbnail ${index}`}
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border-2 ${
                  selectedImage.url === image.url ? "border-gray-800" : "border-gray-300"
                }`}
                onClick={() => setSelectedImage(image)}
              />
            ))}
          </div>

          {/* Main Image */}
          <div className="md:w-1/2">
            <img
              src={selectedImage.url}
              alt={selectedImage.altText || "Selected Product"}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>

          {/* Product Details */}
          <div className="md:w-1/2 space-y-4">
            <h2 className="text-2xl font-bold">{selectProduct.name}</h2>
            <p className="text-gray-600">{selectProduct.description}</p>

            {/* Color Options */}
            <div>
              <p className="text-gray-700">Color:</p>
              <div className="flex gap-2 mt-2">
                {selectProduct.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(prevColor => prevColor === color ? "" : color)}
                    className={`w-8 h-8 rounded-full border ${
                      selectedColor === color ? "border-4 border-black" : "border-gray-300"
                    }`}
                    style={{ backgroundColor: color.toLowerCase() }}
                  ></button>
                ))}
              </div>
            </div>

            {/* Size Options */}
            <div className="mb-4">
              <h3 className="font-semibold">Sizes:</h3>
              <div className="flex space-x-2 mt-2">
                {selectProduct.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(prevSize => prevSize === size ? "" : size)}
                    className={`px-3 py-1 rounded border ${
                      selectedSize === size ? "bg-black text-white" : "border-gray-400 text-black bg-gray-100"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="mb-6">
              <h3 className="text-gray-700">Quantity:</h3>
              <div className="flex space-x-2 mt-2">
                <button
                  className="px-3 py-1 bg-gray-200 rounded"
                  onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                >
                  -
                </button>
                <span className="text-lg px-4">{quantity}</span>
                <button
                  className="px-3 py-1 bg-gray-200 rounded"
                  onClick={() => setQuantity((prev) => prev + 1)}
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
            onClick={handleAddToCart}
           className="py-2 px-6 rounded w-full mb-4 text-white bg-black"
           >
           {isButtonDisabled ? "Adding..." : "Add to Cart"}
            </button>

            {/* Product Characteristics */}
            <div className="mt-10 text-gray-700">
              <h3 className="text-xl font-bold mb-4">Characteristics:</h3>
              <table className="w-full text-left text-sm text-gray-600">
                <tbody>
                  <tr>
                    <td className="pr-4 font-semibold">Brand</td>
                    <td>{selectProduct.brand}</td>
                  </tr>
                  <tr>
                    <td className="pr-4 font-semibold">Material</td>
                    <td>{selectProduct.material}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetail;

import React, { useEffect, useRef, useState } from 'react'
import { FaFilter } from 'react-icons/fa'
import FilterSidebar from '../components/Products/FilterSidebar';
import ProductGrid from '../components/Products/ProductGrid';
import SortOption from './SortOption';

const CollectionPage = () => {
  const [products, setProducts] = useState([]);
  const sidebarRef = useRef(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Toggle Sidebar
  const toggleSideBar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Close Sidebar When Clicking Outside
  const handleClickOutside = (e) => {
    if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
      setIsSidebarOpen(false);
    }
  };

  // Add Event Listener to Close Sidebar on Click Outside
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup Function to Remove Event Listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Fetch Products (Simulated with setTimeout)
  useEffect(() => {
    setTimeout(() => {
      const fetchedProducts = [
        {
          _id: 4,
          name: 'Product 4',
          price: 100,
          images: [{ url: "https://picsum.photos/500/500?random=6" }]
        },
        {
          _id: 5,
          name: 'Product 5',
          price: 100,
          images: [{ url: "https://picsum.photos/500/500?random=7" }]
        },
        {
          _id: 6,
          name: 'Product 6',
          price: 100,
          images: [{ url: "https://picsum.photos/500/500?random=8" }]
        },
        {
          _id: 7,
          name: 'Product 7',
          price: 100,
          images: [{ url: "https://picsum.photos/500/500?random=9" }]
        },
        {
          _id: 8,
          name: 'Product 7',
          price: 100,
          images: [{ url: "https://picsum.photos/500/500?random=10" }]
        },
        {
          _id: 9,
          name: 'Product 8',
          price: 100,
          images: [{ url: "https://picsum.photos/500/500?random=11" }]
        },
        {
          _id: 10,
          name: 'Product 88',
          price: 100,
          images: [{ url: "https://picsum.photos/500/500?random=12" }]
        },
        {
          _id: 44,
          name: 'Product 99',
          price: 100,
          images: [{ url: "https://picsum.photos/500/500?random=13" }]
        }
      ];
      setProducts(fetchedProducts);
    }, 1000);
  }, []);

  return (
    <div className='flex flex-col lg:flex-row'>
      {/* Filter Button (Mobile) */}
      <button
        onClick={toggleSideBar}
        className='lg:hidden border p-2 flex justify-center items-center'
      >
        <FaFilter className='mr-2' />
        Filter
      </button>

      {/* Filter Sidebar */}
      <div
        ref={sidebarRef}
        className={`${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} 
        fixed inset-y-0 z-50 left-0 w-64 bg-white overflow-y-auto transition-transform duration-300 
        lg:static lg:translate-x-0`}
      >
        <FilterSidebar />
      </div>

      {/* Product List */}
      <div className="flex-grow p-4">
        <h2 className="text-2xl uppercase mb-4">All Collection</h2>

        {/* sort option */}
        <SortOption/>
        {/* product gird */}
        <ProductGrid products={products}/>
      </div>
    </div>
  );
}

export default CollectionPage;

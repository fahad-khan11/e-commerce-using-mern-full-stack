import React from 'react'

const checkoutItems = {
  _id: '123456',
  createdAt: new Date(),
  checkoutItems: [
    {
      productId: "1",
      name: "Jacket",
      color: "black",
      size: "M",
      price: 150,
      quantity: 1,
      image: "https://picsum.photos/150?random=1"
    },
    {
      productId: "2",
      name: "T-shirt",
      color: "black",
      size: "M",
      price: 120,
      quantity: 1,
      image: "https://picsum.photos/150?random=1"
    }
  ],
  shippingAdress : {
    address : "ilyasi abbottobad",
    city : 'Abbottobad',
    country : 'Pakistan'
  }
}
const OrderConfirmation = ({ checkout }) => {
      return (
        <div className="max-w-4xl mx-auto p-6 bg-white">
          <h1 className="text-4xl font-bold text-center text-emerald-700 mb-8">
            Thank You for Your Order!
          </h1>
    
          {checkout && (
            <div className="p-6 rounded-lg border">
              <div className="flex justify-between mb-20">
                {/* Order ID and Date */}
                <div>
                  <h2 className="text-xl font-semibold">
                    Order ID: {checkout._id}
                  </h2>
                  <p className='text-gray-500'>Order Date : {new Date(checkout.createdAt).toLocaleString()}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      );
    };
    
    export default OrderConfirmation;
    


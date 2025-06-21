// import { productList } from '@/app/data/productList';
import React from 'react'

export default async function ProductPage({ params }: { params: { productId: string } }) {
  const res = await fetch('http://localhost:5000/api/products');
  const data = await res.json();

  const productId = params.productId
  const product = data.find(p => p.id === productId);
  return (
    <>
      <h1 className="text-4xl font-extrabold text-gray-900 text-center mt-5">
        Product Details
      </h1>
      <div className="flex flex-col lg:flex-row bg-white rounded-lg shadow-xl overflow-hidden max-w-6xl w-full  mx-auto">
        {/* Product Image Section */}
        <div className="lg:w-1/2 p-6 flex items-center justify-center bg-gray-50">
          <div className="relative w-full max-w-md aspect-square rounded-lg overflow-hidden shadow-md">
            {/* Product Image */}
            <img
              src={product?.imageUrl}
              alt="Product Image"
              className="w-full h-full object-cover rounded-lg"
            />
            {/* Heart icon for wishlist, top right */}
            <button className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md hover:scale-105 transition-transform">
              <svg className="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Product Details Section */}
        <div className="lg:w-1/2 p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
          {/* Product Name */}
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4 leading-tight">{product?.name}</h1>

          {/* Price Information */}
          <div className="flex items-center mb-4">
            <p className="text-2xl font-semibold text-gray-900 mr-4">₹{product?.price}</p>
          </div>

          {/* Shipping Information */}
          <p className="text-sm text-gray-600 mb-6">
            <span className="font-medium">Shipping</span> and discounts calculated at checkout.
          </p>

          {/* Price Breakup Button */}
          <button className="flex items-center justify-between w-full px-4 py-3 bg-gray-100 rounded-lg text-left text-gray-700 font-medium hover:bg-gray-200 transition-colors mb-6">
            <span>Price Breakup</span>
            <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
          {/* Buy Now Button */}
          <button className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 transition-all shadow-md hover:shadow-lg">
            Buy Now
          </button>
        </div>
      </div>
    </>
  )
}

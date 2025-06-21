'use client'

import { ProductListProps } from '@/app/data/productList';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';


// ProductCard component: Renders an individual product in a card format.
const ProductCard = ({ id, name, price, imageUrl }: ProductListProps) => {
    const router = useRouter();
    return (
        <div
            onClick={() => { router.push(`./productDetails/${id}`) }}
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col h-full cursor-pointer">
            {/* Product Image */}
            <img
                src={imageUrl}
                alt={name}
                className="w-full h-48 object-cover rounded-t-xl"
                onError={(e) => {
                    e.currentTarget.onerror = null; // Prevent infinite loop
                    e.currentTarget.src = "https://placehold.co/400x240/cccccc/000000?text=Image+Error";
                }}
            />
            <div className="p-4 flex flex-col flex-grow">
                <h3 className="font-semibold text-lg text-gray-800 mb-2">{name}</h3>
                <p className="text-indigo-600 font-bold text-xl">₹{price}</p>
            </div>
        </div>
    );
};


export const ClientView = ({ productList }: { productList: ProductListProps[] }) => {

    const [searchTerm, setSearchTerm] = useState('');
    const [filteredProducts, setFilteredProducts] = useState<ProductListProps[]>([]);
    useEffect(() => {
        const lowerCaseSearchTerm = searchTerm.toLowerCase();
        const results = productList.filter(product =>
            product.name.toLowerCase().includes(lowerCaseSearchTerm)
        );
        setFilteredProducts(results);
    }, [searchTerm, productList]);

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };
    return (
        <>
            <div className="flex flex-col md:flex-row justify-between items-center mb-10 px-4 mt-4 gap-6">
                <h1 className="text-4xl font-extrabold text-gray-900 text-center md:text-left w-full md:w-1/2">
                    Our Featured Products
                </h1>

                <div className="w-full md:w-1/2">
                    <input
                        type="text"
                        placeholder="Search products by name..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                        className="w-full p-4 text-lg border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    />
                </div>
            </div>
            <div className="min-h-screen bg-gray-100 p-8 font-sans flex items-center justify-center">
                <div className="mx-auto max-w-7xl w-full">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 px-4">
                        {filteredProducts.length > 0 ? (
                            filteredProducts.map((product) => (
                                <ProductCard
                                    key={product.id}
                                    id={product.id}
                                    name={product.name}
                                    price={product.price}
                                    imageUrl={product.imageUrl}
                                />
                            ))
                        ) : (
                            <p className="col-span-full text-center text-gray-600 text-lg">No products found matching your search.</p>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ClientView; // Export the App component as the default.

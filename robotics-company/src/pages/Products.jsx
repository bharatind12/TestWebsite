// src/pages/Products.jsx
import React from 'react';

const Products = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Products
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Coming Soon
          </p>
        </div>

        {/* Placeholder Content */}
        <div className="mt-16 bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="px-6 py-12 text-center">
            <div className="text-6xl mb-6">🚧</div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Product Catalog Under Development
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're currently working on bringing you our latest innovative robotics products. 
              Check back soon to explore our cutting-edge solutions designed to transform your business.
            </p>
          </div>
        </div>

        {/* Interest Form */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900">
            Interested in our upcoming products?
          </h3>
          <p className="mt-4 text-lg text-gray-600">
            Contact us to learn more about our upcoming product line and be the first to know when they launch.
          </p>
          <a
            href="/contact"
            className="mt-8 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Products;
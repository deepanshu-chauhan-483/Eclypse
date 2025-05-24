import React from 'react'

function Cart() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8 ">
      <div className="max-w-6xl mx-auto mt-[150px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Shipping Address Section */}
          <div className="bg-white border-2 border-gray-200 rounded-lg p-6 md:p-8 shadow-lg">
            {/* Header */}
            <div className="flex items-center mb-6">
              <button className="mr-4">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 12H5M12 19l-7-7 7-7"/>
                </svg>
              </button>
              <h2 className="text-xl font-medium">Shipping Address</h2>
            </div>

            {/* Add New Address Option */}
            <div className="mb-6">
              <label className="flex items-center">
                <input 
                  type="radio" 
                  name="address" 
                  className="w-4 h-4 text-red-500 border-gray-300 focus:ring-red-500"
                  defaultChecked
                />
                <span className="ml-3 text-gray-900">Add New Address</span>
              </label>
            </div>

            {/* Form Fields */}
            <div className="space-y-4">
              {/* First Name and Last Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Street Address */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Street Address
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>

              {/* Apt Number, State, Zip */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Apt Number
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    State
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Zip
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button className="flex-1 px-6 py-3 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors">
                cancel
              </button>
              <button className="flex-1 px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition-colors">
                Save This Address
              </button>
            </div>
          </div>

          {/* Order Summary Section */}
          <div className="bg-gray-100 border-gray-200 rounded-lg shadow-lg p-6 md:p-8">
            {/* Privacy Notice */}
            <div className="mb-6 text-sm text-gray-600">
              By placing your order, you agree to our company{' '}
              <span className="font-medium text-black">Privacy policy</span> and{' '}
              <span className="font-medium text-black">Conditions of use</span>.
            </div>

            {/* Order Summary */}
            <div className="mb-8">
              <h3 className="text-lg font-medium mb-6">Order Summary</h3>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Items - Silhouette No. 1 – Vermilion</span>
                  <span>7,999</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping and handling:</span>
                  <span>200</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Before tax:</span>
                  <span>6,599</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax Collected:</span>
                  <span>1,400</span>
                </div>
              </div>
            </div>

            {/* Order Total */}
            <div className="border-t border-gray-300 pt-4 mb-8">
              <div className="flex justify-between text-lg font-medium">
                <span>Order Total:</span>
                <span>8,199</span>
              </div>
            </div>

            {/* Place Order Button */}
            <button className="w-full bg-black text-white py-4 rounded-md text-lg font-medium hover:bg-gray-800 transition-colors">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
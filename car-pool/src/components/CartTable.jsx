import React from "react";

const CartTable = ({ cartItems, totalPrice, handleRemoveFromCart }) => {
  return (
    <div className="bg-white p-5 rounded-lg shadow-md ml-10 mt-10 transform hover:scale-105 transition-transform duration-300">
      <h2 className="text-4xl font-bold mb-3 text-center">Your Cart</h2>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Part
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Price
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10">
                    <img
                      className="h-10 w-10 rounded-full"
                      src={item.image}
                      alt={item.name}
                    />
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">
                      {item.name}
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                ₹{item.price}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button
                  onClick={() => handleRemoveFromCart(item.id)}
                  className="bg-red-500 text-white p-2 rounded-lg"
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-lg font-semibold">
              Total
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-lg font-semibold text-gray-900">
              ₹{totalPrice}
            </td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CartTable;

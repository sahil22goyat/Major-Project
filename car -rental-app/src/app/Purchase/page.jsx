"use client";
import React, { useState } from "react";

const parts = [
  { id: 1, name: "Air filter", image: "/part1.jpg" },
  { id: 2, name: "black rubber gasket", image: "/part2.jpg" },
  { id: 3, name: "catalytic converter", image: "/part3.jpg" },
  { id: 4, name: "headlights", image: "/part4.jpg" },
  // Add more parts as needed
];
const PurchaseSection = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleAddToCart = (part) => {
    alert(`${part.name} added to cart successfully!`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoggedIn(true);
    alert(`You are logged in ${username}. Welcome!`);
  };

  const handleViewMore = () => {
    alert("Please wait while we are loading...");
  };

  return (
    <div className="container mx-auto p-5">
      {/* Login Form */}
      <div className="flex justify-center items-center min-h-screen">
        <form
          onSubmit={handleSubmit}
          className="bg-gray-100 p-5 rounded-lg shadow-md mb-10 relative"
          style={{ width: "500px", height: "500px" }}
        >
          <h2 className="text-2xl font-bold mb-5 text-center">{loggedIn ? "Logged In" : "Login"}</h2>
          {!loggedIn && (
            <>
              <div className="mb-4">
                <label className="block text-gray-700">Username</label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                  required
                />
              </div>
              <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-lg">
                Login
              </button>
            </>
          )}
          {loggedIn && (
            <div className="absolute inset-0 flex flex-col justify-center items-center">
              <p className="text-green-500">You are logged in as {username}</p>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVgFjrG_0zAzNLWLo6OULuFynY2haCp9RgrQ&s"
                alt="Smile"
                className="mt-4"
                style={{ width: "200px", height: "200px" }}
              />
            </div>
          )}
        </form>
      </div>

      {/* Parts for Purchase */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {parts.map((part) => (
          <div key={part.id} className="bg-white shadow-md rounded-lg overflow-hidden relative">
            <img
              src={part.image}
              alt={part.name}
              className="w-full h-48 object-cover transition-transform duration-300 transform hover:scale-110"
            />
            <div className="p-4">
              <h3 className="font-bold text-lg">{part.name}</h3>
              <button
                onClick={() => handleAddToCart(part)}
                className="mt-2 w-full bg-green-500 text-white p-2 rounded-lg"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <div className="flex justify-center mt-6">
        <button
          onClick={handleViewMore}
          className="bg-blue-500 text-white p-3 rounded-lg shadow-md"
        >
          View More
        </button>
      </div>
    </div>
  );
};

export default PurchaseSection;

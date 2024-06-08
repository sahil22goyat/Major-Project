// Import necessary libraries


"use client"
import React, { useState, useEffect } from "react";
import Datastore from "nedb";

// Initialize NeDB database
const db = new Datastore({ filename: "./src/purchasing-detail/database.db", autoload: true, persistence: true });

// Define the parts data
const parts = [
  { id: 1, name: "Air filter", image: "/part1.jpg" },
  { id: 2, name: "black rubber gasket", image: "/part2.jpg" },
  { id: 3, name: "catalytic converter", image: "/part3.jpg" },
  { id: 4, name: "headlights", image: "/part4.jpg" },
  { id: 5, name: "bonet", image: "/part5.jpg" },
  { id: 6, name: "engine cover", image: "/part6.jpg" },
  { id: 7, name: "car dustbin", image: "/part7.jpg" },
  { id: 8, name: "gear box cover", image: "/part8.jpg" },
];

// Define the PurchaseSection component
const PurchaseSection = () => {
  // Define state variables
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [showAllParts, setShowAllParts] = useState(false);
  const [addedParts, setAddedParts] = useState({});

  // Function to handle adding a part to the cart
  const handleAddToCart = (part) => {
    if (!loggedIn) {
      alert("Please log in first!");
    } else {
      // Save the username, email, and part information to the NeDB database
      db.insert({ username, email, partId: part.id }, (error, doc) => {
        if (error) {
          console.error("Error saving data to NeDB:", error);
        } else {
          console.log("Data saved to NeDB:", doc);
          setAddedParts((prev) => ({ ...prev, [part.id]: true }));
          alert(`${part.name} added to cart successfully!`);
        }
      });
    }
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoggedIn(true);
    alert(`You are logged in as ${username}. Welcome!`);
  };

  // Function to handle viewing more parts
  const handleViewMore = () => {
    setShowAllParts(true);
    alert("Please wait while we are loading...");
  };

  // Function to handle logging out
  const handleLogout = () => {
    setUsername("");
    setEmail("");
    setLoggedIn(false);
    setAddedParts({});
    alert("You have been logged out.");
  };
  useEffect(() => {
    // Load user data from the database when the component mounts
    db.find({}, (error, docs) => {
      if (error) {
        console.error("Error retrieving user data:", error);
      } else {
        console.log("Retrieved user data:", docs);
        if (docs.length > 0) {
          const userData = docs[0]; // Assuming only one user for simplicity
          setUsername(userData.username);
          setEmail(userData.email);
          setLoggedIn(true);
        }
      }
    });
  }, []);


  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center p-5"
      style={{ backgroundImage: "url('/purchaseback.png')" }}
    >
      {/* Login Form */}
      <div className="flex justify-center items-center min-h-screen">
        <form
          onSubmit={handleSubmit}
          className="bg-gray-100 bg-opacity-80 p-5 rounded-lg shadow-md mb-10 relative"
          style={{ width: "500px", height: "500px" }}
        >
          <h2 className="text-2xl font-bold mb-5 text-center">
            {loggedIn ? "Logged In" : "Login"}
          </h2>
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
              <button
                type="submit"
                className="w-full bg-blue-500 text-white p-2 rounded-lg"
              >
                Login
              </button>
            </>
          )}
          {loggedIn && (
            <div className="absolute inset-0 flex flex-col justify-center items-center">
              <p className="text-green-500">You are logged in as {username}</p>
              <img
                src="https://t4.ftcdn.net/jpg/01/36/70/67/240_F_136706734_KWhNBhLvY5XTlZVocpxFQK1FfKNOYbMj.jpg"
                alt="Smile"
                className="mt-4"
                style={{ width: "200px", height: "200px" }}
              />
              <button onClick={handleLogout} className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg">
                Logout
              </button>
            </div>
          )}
        </form>
      </div>

      {/* Parts for Purchase */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {parts.slice(0, showAllParts ? parts.length : 4).map((part) => (
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
                className={`mt-2 w-full ${
                  addedParts[part.id] ? "bg-gray-500" : "bg-green-500"
                } text-white p-2 rounded-lg`}
                disabled={addedParts[part.id]}
              >
                {addedParts[part.id] ? "Added" : "Add to Cart"}
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

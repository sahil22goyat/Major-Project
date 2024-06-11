"use client";
import React, { useState, useEffect } from 'react';
import Datastore from 'nedb';
import Footer from '@/components/Subfooter';
import CartTable from '@/components/CartTable'; // Import CartTable component
import Notification from '@/components/Notification'; // Adjust the path as per your project structure

// Initialize NeDB database
const db = new Datastore({
  filename: './src/purchasing-detail/database.db',
  autoload: true,
  persistence: true,
});

// Define the parts data
const parts = [
  { id: 1, name: 'Air filter ₹120', price: 120, image: '/part1.jpg' },
  { id: 2, name: 'black rubber gasket ₹70', price: 70, image: '/part2.jpg' },
  { id: 3, name: 'catalytic converter ₹600', price: 600, image: '/part3.jpg' },
  { id: 4, name: 'headlights ₹250', price: 250, image: '/part4.jpg' },
  { id: 5, name: 'bonet ₹350', price: 350, image: '/part5.jpg' },
  { id: 6, name: 'engine cover ₹180', price: 180, image: '/part6.jpg' },
  { id: 7, name: 'car dustbin ₹25', price: 25, image: '/part7.jpg' },
  { id: 8, name: 'gear box cover ₹280', price: 280, image: '/part8.jpg' },
];

// Define the Header component
const Header = () => (
  <header className="bg-g-800 text-white p-5 rounded-lg shadow-md mb-5 transform hover:scale-105 transition-transform duration-300">
    <h1 className="text-4xl font-bold mb-3 text-center">Car Parts Purchase</h1>
    <p className="text-lg">
      Welcome to our car parts purchasing section. Please log in to add parts to
      your cart. You can browse through our collection of high-quality car parts
      and add them to your cart for purchase.
    </p>
  </header>
);

// Define the PurchaseSection component
const PurchaseSection = () => {
  // Define state variables
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [showAllParts, setShowAllParts] = useState(false);
  const [addedParts, setAddedParts] = useState({});
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [notificationMessage, setNotificationMessage] = useState('');

  // Load cart items from NeDB on component mount
  useEffect(() => {
    loadCartItems();
  }, []);

  // Function to load cart items from NeDB
  const loadCartItems = () => {
    if (loggedIn) {
      db.find({ username }, (error, docs) => {
        if (error) {
          console.error('Error loading cart items:', error);
        } else {
          const partsInCart = docs.map((doc) => doc.partId);
          const cartItemsData = parts.filter((part) =>
            partsInCart.includes(part.id)
          );
          setCartItems(cartItemsData);
          calculateTotalPrice(cartItemsData);
        }
      });
    }
  };

  // Function to calculate total price of items in cart
  const calculateTotalPrice = (items) => {
    const total = items.reduce((acc, item) => acc + item.price, 0);
    setTotalPrice(total);
  };

  // Function to handle adding a part to the cart
  const handleAddToCart = (part) => {
    if (!loggedIn) {
      setNotificationMessage('Please log in first!');
    } else {
      // Save the username, email, and part information to the NeDB database
      db.insert({ username, email, partId: part.id }, (error, doc) => {
        if (error) {
          console.error('Error saving data to NeDB:', error);
        } else {
          console.log('Data saved to NeDB:', doc);
          setAddedParts((prev) => ({ ...prev, [part.id]: true }));
          setNotificationMessage(`${part.name} added to cart successfully!`);
          loadCartItems(); // Reload cart items after adding

          // Display notification for added to cart
          setTimeout(() => {
            setNotificationMessage('');
          }, 2000);
        }
      });
    }
  };

  // Function to handle removing a part from the cart
  const handleRemoveFromCart = (partId) => {
    db.remove({ username, partId }, {}, (error, numRemoved) => {
      if (error) {
        console.error('Error removing data from NeDB:', error);
      } else {
        console.log('Data removed from NeDB:', numRemoved);
        setAddedParts((prev) => {
          const updated = { ...prev };
          delete updated[partId];
          return updated;
        });
        setNotificationMessage('Part removed from cart.');
        loadCartItems(); // Reload cart items after removing

        // Display notification for removed from cart
        setTimeout(() => {
          setNotificationMessage('');
        }, 2000);
      }
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoggedIn(true);
    setNotificationMessage(`You are logged in as ${username}. Welcome!`);
    loadCartItems(); // Load cart items after login

    // Display notification for login
    setTimeout(() => {
      setNotificationMessage('');
    }, 2000);
  };

  // Function to handle viewing more parts
  const handleViewMore = () => {
    setShowAllParts(true);
  };

  // Function to handle logging out
  const handleLogout = () => {
    setUsername('');
    setEmail('');
    setLoggedIn(false);
    setAddedParts({});
    setCartItems([]);
    setTotalPrice(0);
    setNotificationMessage('You have been logged out.');

    // Display notification for logout
    setTimeout(() => {
      setNotificationMessage('');
    }, 2000);
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center p-5"
      style={{ backgroundImage: "url('/purchaseback.png')" }}
    >
      <Header />

      {/* Notification */}
      {notificationMessage && (
        <Notification message={notificationMessage} duration={2000} />
      )}

      <div className="flex justify-center items-center min-h-screen">
        {/* Login Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-gray-100 bg-opacity-80 p-5 rounded-lg shadow-md relative"
          style={{ width: '500px', height: '450px' }}
        >
          <h2 className="text-2xl font-bold mb-5 text-center">
            {loggedIn ? 'Logged In' : 'Login'}
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
                style={{ width: '200px', height: '200px' }}
              />
              <button
                onClick={handleLogout}
                className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg"
              >
                Logout
              </button>
            </div>
          )}
        </form>

        {/* Cart Table */}
        {loggedIn && cartItems.length > 0 && (
          <CartTable
            cartItems={cartItems}
            totalPrice={totalPrice}
            handleRemoveFromCart={handleRemoveFromCart} // Pass the remove handler
          />
        )}

        {/* Hurray Section */}
        <div className="bg-g-800 text-white p-5 rounded-lg shadow-md ml-10 mt-10 transform hover:scale-105 transition-transform duration-300">
          <h2 className="text-4xl font-bold mb-3 text-center">
            Hurray! Buy the parts you need!
          </h2>
          <div className="flex justify-center items-center flex-col">
            <img
              src="cartpartstopurchase.jpeg"
              alt="Parts to Purchase"
              className="mt-4"
              style={{ width: '550px', height: '380px' }}
            />
          </div>
        </div>
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
                  addedParts[part.id] ? 'bg-gray-500' : 'bg-green-500'
                } text-white p-2 rounded-lg`}
                disabled={addedParts[part.id]}
              >
                {addedParts[part.id] ? 'Added' : 'Add to Cart'}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* View More Button */}
{!showAllParts && (
  <button
    onClick={handleViewMore}
    className="bg-green-500 text-white px-4 py-2 rounded-lg mt-5"
    style={{ marginBottom: '20px' }} // Added inline style for bottom margin
  >
    View More 
  </button>
)}


    {/* Space after all pictures */}
    <div style={{ marginBottom: '50px' }}></div>


      {/* Footer */}
      <Footer />
    </div>
  );
};

export default PurchaseSection;

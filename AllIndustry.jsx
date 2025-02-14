import React, { useState } from "react";
import { CheckCircle, X, User, LogOut } from "lucide-react";

const Dashboard = () => {
  const [listings, setListings] = useState([
    { id: 1, farmer: "Raj Sharma", type: "Crop Residue", price: "₹2,000/ton", location: "Punjab, India", image: "/api/placeholder/150/150" },
    { id: 2, farmer: "Amit Verma", type: "Animal Waste", price: "₹1,500/ton", location: "Haryana, India", image: "/api/placeholder/150/150" },
    { id: 3, farmer: "Suresh Patel", type: "Fruit Peels", price: "₹1,200/ton", location: "Gujarat, India", image: "/api/placeholder/150/150" },
  ]);
  const [selectedWaste, setSelectedWaste] = useState(null);

  const handleReject = () => {
    // Remove the selected listing from the listings array
    setListings(listings.filter(waste => waste.id !== selectedWaste.id));
    // Close the popup
    setSelectedWaste(null);
  };

  return (
    <div className="relative min-h-screen bg-green-50 p-6">
      {/* Navbar */}
      <div className="flex justify-between items-center bg-green-700 shadow-md p-4 rounded-lg text-white">
        <h1 className="text-2xl font-bold">Industry Dashboard</h1>
        <div className="flex items-center space-x-4">
          <User className="h-6 w-6 cursor-pointer" />
          <LogOut className="h-6 w-6 cursor-pointer text-red-400" />
        </div>
      </div>

      {/* Listings Section */}
      <h2 className="text-xl font-semibold text-green-900 mt-6">Current Listings</h2>
      
      {/* Listings Grid */}
      <div className={`mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 transition ${selectedWaste ? "blur-md" : ""}`}>
        {listings.map((waste) => (
          <div
            key={waste.id}
            className="bg-white shadow-md rounded-lg p-5 hover:shadow-xl transition cursor-pointer border-l-4 border-green-600"
            onClick={() => setSelectedWaste(waste)}
          >
            <h2 className="text-lg font-semibold text-green-900">{waste.farmer}</h2>
            <p className="text-green-700">{waste.type}</p>
            <p className="text-green-800 font-bold">{waste.price}</p>
            <p className="text-green-600">{waste.location}</p>
          </div>
        ))}
      </div>

      {/* Popup Modal for Selected Waste */}
      {selectedWaste && (
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-red-500"
              onClick={() => setSelectedWaste(null)}
            >
              <X className="h-6 w-6" />
            </button>
            <img src={selectedWaste.image} alt={selectedWaste.type} className="w-full h-40 object-cover rounded-lg mb-2" />
            <h2 className="text-xl font-bold text-green-900">{selectedWaste.farmer}</h2>
            <p className="text-green-700">Waste Type: {selectedWaste.type}</p>
            <p className="text-green-800 font-semibold">Price: {selectedWaste.price}</p>
            <p className="text-green-600">Location: {selectedWaste.location}</p>
            <div className="mt-4 flex justify-between">
              <button className="flex items-center bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition">
                <CheckCircle className="h-5 w-5 mr-2" /> Approve
              </button>
              <button onClick={handleReject} className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition">
                Reject
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
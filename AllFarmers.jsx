import React, { useState } from 'react';
import { Plus, Bell, User, LogOut, Edit, Trash, Package, BarChart3, DollarSign } from 'lucide-react';

const FarmerDashboard = () => {
  const [listings, setListings] = useState([
    { 
      id: 1, 
      type: "Crop Residue", 
      price: "₹2,000/ton", 
      status: "Active", 
      location: "Punjab, India", 
      image: "/api/placeholder/400/300",
      created: "2024-02-10",
      interested: 3
    },
    { 
      id: 2, 
      type: "Animal Waste", 
      price: "₹1,500/ton", 
      status: "Pending", 
      location: "Punjab, India", 
      image: "/api/placeholder/400/300",
      created: "2024-02-12",
      interested: 1
    }
  ]);
  
  const [showAddModal, setShowAddModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [currentListing, setCurrentListing] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const stats = [
    { title: "Active Listings", value: "5", icon: Package, trend: "+2" },
    { title: "Total Revenue", value: "₹45,000", icon: DollarSign, trend: "+12%" },
    { title: "Interested Buyers", value: "8", icon: User, trend: "+3" }
  ];

  const handleEdit = (listing) => {
    setCurrentListing(listing);
    setEditModal(true);
  };

  const handleDelete = (id) => {
    setListings(listings.filter(listing => listing.id !== id));
  };

  const handleCreate = (newListing) => {
    setListings([...listings, { ...newListing, id: Date.now() }]);
    setShowAddModal(false);
  };

  const handleUpdate = (updatedListing) => {
    setListings(listings.map(listing => (listing.id === updatedListing.id ? updatedListing : listing)));
    setEditModal(false);
    setCurrentListing(null);
  };

  const filteredListings = listings.filter(listing => 
    listing.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100">
      {/* Navbar */}
      <nav className="bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-600">
            Farmer Portal
          </span>
          <div className="flex items-center space-x-6">
            <button className="relative">
              <Bell className="h-6 w-6 text-gray-600 hover:text-gray-800 transition-colors" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                3
              </span>
            </button>
            <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors">
              <User  className="h-6 w-6" />
              <span>Profile</span>
            </button>
            <button className="text-red-500 hover:text-red-600 transition-colors">
              <LogOut className="h-6 w-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Welcome Back, Farmer!</h1>
            <p className="text-gray-600 mt-1">Manage your waste listings and track interested buyers</p>
          </div>
          <button 
            onClick={() => setShowAddModal(true)}
            className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            <Plus className="h-5 w-5 mr-2" /> Add New Listing
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-medium text-gray-500">{stat.title}</h3>
                <stat.icon className="h-4 w-4 text-gray-500" />
              </div>
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <p className="text-sm text-green-600 mt-1">{stat.trend} from last month</p>
            </div>
          ))}
        </div>

        {/* Listings Grid */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Your Listings</h2>
            <div className="flex space-x-2">
              <input 
                type="text" 
                placeholder="Search listings..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent w-64"
              />
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                Filter
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredListings.map((listing) => (
              <div key={listing.id} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-200 border border-gray-100">
                <div className="p-4">
                  <img 
                    src={listing.image} 
                    alt={listing.type} 
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">{listing.type}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      listing.status === 'Active' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {listing.status}
                    </span>
                  </div>
                  <p className="text-2xl font-bold text-green-600 mb-2">{listing.price}</p>
                  <p className="text-sm text-gray-500 mb-4">{listing.location}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">
                      {listing.interested} interested buyers
                    </span>
                    <div className="flex space-x-2">
                      <button onClick={() => handleEdit(listing)} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                        <Edit className="h-4 w-4 text-gray-600" />
                      </button>
                      <button onClick={() => handleDelete(listing.id)} className="p-2 hover:bg-red-50 rounded-lg transition-colors">
                        <Trash className="h-4 w-4 text-red-500" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Add Listing Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Add New Listing</h2>
              <button 
                onClick={() => setShowAddModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Waste Type</label>
                <input 
                  type="text" 
                  placeholder="e.g., Crop Residue"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Price per Ton</label>
                <input 
                  type="text" 
                  placeholder="e.g., ₹2,000"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                <input 
                  type="text" 
                  placeholder="e.g., Punjab, India"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Upload Image</label>
                <input 
                  type="file" 
                  accept="image/*"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              <div className="flex justify-end space-x-2 pt-4">
                <button 
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button onClick={() => handleCreate({ type: "New Type", price: "₹0", location: "New Location", image: "new_image_url" })} className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                  Create Listing
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Edit Listing Modal */}
      {editModal && currentListing && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Edit Listing</h2>
              <button 
                onClick={() => setEditModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Waste Type</label>
                <input 
                  type="text" 
                  value={currentListing.type}
                  onChange={(e) => setCurrentListing({ ...currentListing, type: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Price per Ton</label>
                <input 
                  type="text" 
                  value={currentListing .price}
                  onChange={(e) => setCurrentListing({ ...currentListing, price: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                <input 
                  type="text" 
                  value={currentListing.location}
                  onChange={(e) => setCurrentListing({ ...currentListing, location: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Upload Image</label>
                <input 
                  type="file" 
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      const reader = new FileReader();
                      reader.onloadend = () => {
                        setCurrentListing({ ...currentListing, image: reader.result });
                      };
                      reader.readAsDataURL(file);
                    }
                  }}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              <div className="flex justify-end space-x-2 pt-4">
                <button 
                  onClick={() => setEditModal(false)}
                  className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button onClick={() => handleUpdate(currentListing)} className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                  Update Listing
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FarmerDashboard;
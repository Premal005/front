import React, { useState } from 'react';
import { Plus, Bell, User, LogOut, Edit, Trash, Package, BarChart3, DollarSign, Search, Filter, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
  const [showSearch, setShowSearch] = useState(false);

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

  const filteredListings = listings.filter(listing => 
    listing.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100">
      {/* Enhanced Navbar with Animations */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="bg-white border-b shadow-sm sticky top-0 z-50"
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between bg-gradient-to-r from-green-700 to-emerald-600 shadow-lg p-4">
          <motion.span 
            className="text-2xl font-bold text-white"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Farmer Portal
          </motion.span>
          <div className="flex items-center space-x-6">
            <motion.button 
              className="relative"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Bell className="h-6 w-6 text-white hover:text-white transition-colors" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                3
              </span>
            </motion.button>
            <motion.button 
              className="flex items-center space-x-2 text-white hover:text-white transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <User className="h-6 w-6" />
              <span>Profile</span>
            </motion.button>
            <motion.button 
              className="text-red-500 hover:text-red-600 transition-colors"
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.95 }}
            >
              <LogOut className="h-6 w-6" />
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Enhanced Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-between items-center mb-8"
        >
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Welcome Back, Farmer!</h1>
            <p className="text-gray-600 mt-1">Manage your waste listings and track interested buyers</p>
          </div>
          <motion.button 
            onClick={() => setShowAddModal(true)}
            className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Plus className="h-5 w-5 mr-2" /> Add New Listing
          </motion.button>
        </motion.div>

        {/* Enhanced Stats Grid with Hover Effects */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
              className="bg-white rounded-xl p-6 shadow-sm cursor-pointer"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-medium text-gray-500">{stat.title}</h3>
                <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                  <stat.icon className="h-4 w-4 text-gray-500" />
                </motion.div>
              </div>
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <p className="text-sm text-green-600 mt-1">{stat.trend} from last month</p>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Search and Filter Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-white rounded-xl p-6 shadow-sm mb-6"
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Your Listings</h2>
            <div className="flex space-x-2">
              <motion.div 
                initial={false}
                animate={{ width: showSearch ? "auto" : "40px" }}
                className="flex items-center bg-gray-50 rounded-lg"
              >
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowSearch(!showSearch)}
                  className="p-2"
                >
                  <Search className="h-5 w-5 text-gray-500" />
                </motion.button>
                <AnimatePresence>
                  {showSearch && (
                    <motion.input 
                      initial={{ width: 0, opacity: 0 }}
                      animate={{ width: "200px", opacity: 1 }}
                      exit={{ width: 0, opacity: 0 }}
                      type="text" 
                      placeholder="Search listings..." 
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="bg-transparent border-none focus:outline-none px-2"
                    />
                  )}
                </AnimatePresence>
              </motion.div>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Filter className="h-4 w-4" />
                <span>Filter</span>
              </motion.button>
            </div>
          </div>

          {/* Enhanced Listings Grid with Animations */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence>
              {filteredListings.map((listing) => (
                <motion.div
                  key={listing.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
                >
                  <div className="p-4">
                    <motion.img 
                      src={listing.image} 
                      alt={listing.type} 
                      className="w-full h-48 object-cover rounded-lg mb-4"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
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
                        <motion.button 
                          onClick={() => handleEdit(listing)}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                        >
                          <Edit className="h-4 w-4 text-gray-600" />
                        </motion.button>
                        <motion.button 
                          onClick={() => handleDelete(listing.id)}
                          whileHover={{ scale: 1.1, rotate: 20 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-2 hover:bg-red-50 rounded-lg transition-colors"
                        >
                          <Trash className="h-4 w-4 text-red-500" />
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </main>

      {/* Enhanced Modal System */}
      <AnimatePresence>
        {(showAddModal || editModal) && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-xl max-w-md w-full p-6"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">
                  {showAddModal ? 'Add New Listing' : 'Edit Listing'}
                </h2>
                <motion.button 
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => {
                    setShowAddModal(false);
                    setEditModal(false);
                  }}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="w-6 h-6" />
                </motion.button>
              </div>
              {/* Modal content remains the same */}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FarmerDashboard;
import React, { useState } from "react";
import { CheckCircle, X, User, LogOut, MapPin, DollarSign, Factory } from "lucide-react";

const Dashboard = () => {
  const [listings, setListings] = useState([
    { id: 1, farmer: "Raj Sharma", type: "Crop Residue", price: "₹2,000/ton", location: "Punjab, India", image: "/api/placeholder/150/150", quantity: "50 tons", availability: "Immediate", status: "pending" },
    { id: 2, farmer: "Amit Verma", type: "Animal Waste", price: "₹1,500/ton", location: "Haryana, India", image: "/api/placeholder/150/150", quantity: "30 tons", availability: "Next Week", status: "pending" },
    { id: 3, farmer: "Suresh Patel", type: "Fruit Peels", price: "₹1,200/ton", location: "Gujarat, India", image: "/api/placeholder/150/150", quantity: "25 tons", availability: "Immediate", status: "pending" },
  ]);
  const [selectedWaste, setSelectedWaste] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [approvedListings, setApprovedListings] = useState([]);

  const handleApprove = async () => {
    setIsLoading(true);
    
    // Update the status of the selected waste
    const updatedListings = listings.map(waste => 
      waste.id === selectedWaste.id 
        ? { ...waste, status: 'approved' }
        : waste
    );
    setListings(updatedListings);

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Add to approved listings
    setApprovedListings([...approvedListings, { 
      ...selectedWaste, 
      approvedDate: new Date().toLocaleDateString(),
      status: 'approved'
    }]);

    // Clear selection and loading state
    setSelectedWaste(null);
    setIsLoading(false);

    // Remove from main listings after animation
    setTimeout(() => {
      setListings(listings.filter(waste => waste.id !== selectedWaste.id));
    }, 500);
  };

  const handleReject = () => {
    setIsLoading(true);
    setTimeout(() => {
      setListings(listings.filter(waste => waste.id !== selectedWaste.id));
      setSelectedWaste(null);
      setIsLoading(false);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      {/* Navbar */}
      <div className="bg-gradient-to-r from-green-700 to-emerald-600 shadow-lg p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Factory className="h-8 w-8 text-white" />
            <h1 className="text-2xl font-bold text-white">EcoWaste Connect</h1>
          </div>
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-white hover:bg-green-600 p-2 rounded-lg transition-all cursor-pointer">
              <User className="h-5 w-5" />
              <span className="hidden sm:inline">Profile</span>
            </div>
            <div className="flex items-center space-x-2 text-red-300 hover:text-red-100 hover:bg-red-500 p-2 rounded-lg transition-all cursor-pointer">
              <LogOut className="h-5 w-5" />
              <span className="hidden sm:inline">Logout</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-6">
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-gray-500 text-sm">Pending Listings</h3>
            <p className="text-2xl font-bold text-green-600">{listings.length}</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-gray-500 text-sm">Approved Today</h3>
            <p className="text-2xl font-bold text-green-600">
              {approvedListings.filter(listing => 
                listing.approvedDate === new Date().toLocaleDateString()
              ).length}
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-gray-500 text-sm">Total Approved</h3>
            <p className="text-2xl font-bold text-green-600">{approvedListings.length}</p>
          </div>
        </div>

        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-green-900">Available Listings</h2>
          <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
            {listings.length} Active Listings
          </span>
        </div>

        {/* Listings Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {listings.map((waste) => (
            <div
              key={waste.id}
              className={`bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 ${
                waste.status === 'approved' ? 'scale-95 opacity-0' : ''
              }`}
              onClick={() => setSelectedWaste(waste)}
            >
              <img
                src={waste.image}
                alt={waste.type}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-semibold text-green-900 group-hover:text-green-700 transition-colors">
                    {waste.farmer}
                  </h3>
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-sm">
                    {waste.availability}
                  </span>
                </div>
                <div className="space-y-2">
                  <p className="flex items-center text-green-700">
                    <Factory className="h-4 w-4 mr-2" />
                    {waste.type}
                  </p>
                  <p className="flex items-center text-green-800 font-bold">
                    <DollarSign className="h-4 w-4 mr-2" />
                    {waste.price}
                  </p>
                  <p className="flex items-center text-green-600">
                    <MapPin className="h-4 w-4 mr-2" />
                    {waste.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Approved Listings Section */}
        {approvedListings.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-green-900 mb-6">Recently Approved</h2>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead className="bg-green-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-green-700 uppercase tracking-wider">Farmer</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-green-700 uppercase tracking-wider">Type</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-green-700 uppercase tracking-wider">Price</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-green-700 uppercase tracking-wider">Location</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-green-700 uppercase tracking-wider">Approved Date</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-green-100">
                    {approvedListings.map((listing) => (
                      <tr key={listing.id} className="hover:bg-green-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-green-900">{listing.farmer}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-green-700">{listing.type}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-green-700">{listing.price}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">{listing.location}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">{listing.approvedDate}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Modal */}
        {selectedWaste && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg max-w-md w-full p-6 relative animate-fade-in">
              <button
                onClick={() => setSelectedWaste(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              >
                <X className="h-6 w-6" />
              </button>
              
              <div className="space-y-4">
                <div className="relative">
                  <img
                    src={selectedWaste.image}
                    alt={selectedWaste.type}
                    className="w-full h-56 object-cover rounded-lg"
                  />
                  <span className="absolute top-2 right-2 bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">
                    {selectedWaste.availability}
                  </span>
                </div>
                
                <div className="space-y-3">
                  <h2 className="text-2xl font-bold text-green-900">{selectedWaste.farmer}</h2>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <p className="text-sm text-gray-500">Waste Type</p>
                      <p className="text-green-700 font-medium">{selectedWaste.type}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-gray-500">Price</p>
                      <p className="text-green-800 font-bold">{selectedWaste.price}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-gray-500">Location</p>
                      <p className="text-green-600">{selectedWaste.location}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-gray-500">Quantity</p>
                      <p className="text-green-700">{selectedWaste.quantity}</p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between pt-4">
                  <button
                    onClick={handleApprove}
                    disabled={isLoading}
                    className="flex items-center bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <CheckCircle className="h-5 w-5 mr-2" />
                    {isLoading ? "Processing..." : "Approve"}
                  </button>
                  <button
                    onClick={handleReject}
                    disabled={isLoading}
                    className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? "Processing..." : "Reject"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Dashboard;
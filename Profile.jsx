import React, { useState } from "react";
import { Bell, User, LogOut, X, Calendar, Package, Clock, CheckCircle, XCircle } from "lucide-react";
import { motion } from "framer-motion";
import BotPressChat from "./BotPressChat";

const initialFarmers = [
  { 
    id: 1, 
    name: "Rahul Sharma", 
    location: "Punjab, India", 
    contact: "9876543210", 
    email: "rahul.sharma@email.com",
    registrationDate: "2024-01-15",
    verificationStatus: "Verified",
    totalListings: 5,
    activeListings: 3,
    totalTransactions: 8,
    transactions: [
      { id: 1, date: "2024-02-10", type: "Crop Residue", amount: "5 tons", value: "₹10,000", status: "Completed", buyer: "GreenTech Ltd." },
      { id: 2, date: "2024-01-25", type: "Animal Waste", amount: "3 tons", value: "₹6,000", status: "Completed", buyer: "Eco Industries" }
    ],
    pendingRequests: [
      { id: 1, date: "2024-02-12", type: "Crop Residue", amount: "2 tons", status: "Pending", buyer: "Bio Energy Corp" },
      { id: 2, date: "2024-02-11", type: "Animal Waste", amount: "4 tons", status: "Under Review", buyer: "Green Solutions" }
    ]
  },
  { 
    id: 2, 
    name: "Amit Verma", 
    location: "Haryana, India", 
    contact: "9876541234", 
    email: "amit.verma@email.com",
    registrationDate: "2024-02-01",
    verificationStatus: "Pending",
    totalListings: 3,
    activeListings: 2,
    totalTransactions: 4,
    transactions: [
      { id: 1, date: "2024-02-08", type: "Crop Residue", amount: "3 tons", value: "₹6,000", status: "Completed", buyer: "Eco Industries" }
    ],
    pendingRequests: [
      { id: 1, date: "2024-02-13", type: "Animal Waste", amount: "2 tons", status: "Pending", buyer: "GreenTech Ltd." }
    ]
  }
];

const initialIndustries = [
  { 
    id: 1, 
    name: "GreenTech Ltd.", 
    location: "Delhi, India", 
    contact: "9876512345",
    email: "contact@greentech.com",
    registrationDate: "2024-01-10",
    verificationStatus: "Verified",
    purchases: 10,
    activePurchases: 4,
    totalSpent: "₹200,000",
    transactions: [
      { id: 1, date: "2024-02-10", type: "Crop Residue", amount: "5 tons", value: "₹10,000", status: "Completed", seller: "Rahul Sharma" },
      { id: 2, date: "2024-02-05", type: "Animal Waste", amount: "4 tons", value: "₹8,000", status: "Completed", seller: "Amit Verma" }
    ],
    pendingRequests: [
      { id: 1, date: "2024-02-13", type: "Animal Waste", amount: "2 tons", status: "Pending", seller: "Amit Verma" }
    ]
  },
  { 
    id: 2, 
    name: "Eco Industries", 
    location: "Mumbai, India", 
    contact: "9876598765",
    email: "info@ecoindustries.com",
    registrationDate: "2024-01-20",
    verificationStatus: "Verified",
    purchases: 7,
    activePurchases: 2,
    totalSpent: "₹150,000",
    transactions: [
      { id: 1, date: "2024-01-25", type: "Animal Waste", amount: "3 tons", value: "₹6,000", status: "Completed", seller: "Rahul Sharma" }
    ],
    pendingRequests: [
      { id: 1, date: "2024-02-12", type: "Crop Residue", amount: "3 tons", status: "Under Review", seller: "Rahul Sharma" }
    ]
  }
];

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("farmers");
  const [selectedDetail, setSelectedDetail] = useState(null);
  const [detailView, setDetailView] = useState("profile");

  const StatusBadge = ({ status }) => {
    const getStatusColor = (status) => {
      switch (status.toLowerCase()) {
        case "completed":
          return "bg-green-100 text-green-800";
        case "pending":
          return "bg-yellow-100 text-yellow-800";
        case "under review":
          return "bg-blue-100 text-blue-800";
        case "verified":
          return "bg-green-100 text-green-800";
        default:
          return "bg-gray-100 text-gray-800";
      }
    };

    return (
      <span className={`px-2 py-1 rounded-full text-sm ${getStatusColor(status)}`}>
        {status}
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-green-50 p-6 relative">
      <div className={`flex justify-between items-center bg-green-700 p-4 rounded-lg text-white shadow-md ${selectedDetail ? "blur-sm" : ""}`}>
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <div className="flex items-center space-x-4">
          <Bell className="h-6 w-6 cursor-pointer" />
          <User className="h-6 w-6 cursor-pointer" />
          <LogOut className="h-6 w-6 cursor-pointer text-red-400" />
        </div>
      </div>

      <div className={`mt-6 ${selectedDetail ? "blur-sm" : ""}`}>
        <div className="flex space-x-4">
          <button
            onClick={() => setActiveTab("farmers")}
            className={`px-4 py-2 rounded-lg ${activeTab === "farmers" ? "bg-green-600 text-white" : "bg-gray-200"}`}
          >Farmers</button>
          <button
            onClick={() => setActiveTab("industries")}
            className={`px-4 py-2 rounded-lg ${activeTab === "industries" ? "bg-green-600 text-white" : "bg-gray-200"}`}
          >Industry Buyers</button>
        </div>

        <div className="mt-4">
          {activeTab === "farmers" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {initialFarmers.map((farmer) => (
                <motion.div 
                  key={farmer.id} 
                  className="bg-white p-4 rounded-lg shadow-md border-l-4 border-green-600 cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  onClick={() => {
                    setSelectedDetail(farmer);
                    setDetailView("profile");
                  }}
                >
                  <h3 className="text-lg font-semibold text-green-900">{farmer.name}</h3>
                  <p className="text-green-700">Location: {farmer.location}</p>
                  <p className="text-green-700">Contact: {farmer.contact}</p>
                  <div className="mt-2 flex justify-between items-center">
                    <p className="text-green-700">Listings: {farmer.totalListings}</p>
                    <StatusBadge status={farmer.verificationStatus} />
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {initialIndustries.map((industry) => (
                <motion.div 
                  key={industry.id} 
                  className="bg-white p-4 rounded-lg shadow-md border-l-4 border-green-600 cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  onClick={() => {
                    setSelectedDetail(industry);
                    setDetailView("profile");
                  }}
                >
                  <h3 className="text-lg font-semibold text-green-900">{industry.name}</h3>
                  <p className="text-green-700">Location: {industry.location}</p>
                  <p className="text-green-700">Contact: {industry.contact}</p>
                  <div className="mt-2 flex justify-between items-center">
                    <p className="text-green-700">Purchases: {industry.purchases}</p>
                    <StatusBadge status={industry.verificationStatus} />
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>

      {selectedDetail && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-md">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            className="bg-white rounded-lg shadow-lg w-full max-w-4xl max-h-[80vh] overflow-hidden relative"
          >
            <div className="p-6 border-b">
              <button 
                onClick={() => setSelectedDetail(null)} 
                className="absolute top-4 right-4 text-gray-600 hover:text-red-500"
              >
                <X className="h-6 w-6" />
              </button>
              <h2 className="text-2xl font-bold text-green-900">{selectedDetail.name}</h2>
              <div className="mt-2 flex items-center space-x-2">
                <StatusBadge status={selectedDetail.verificationStatus} />
                <span className="text-gray-500">•</span>
                <span className="text-gray-600 flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  Joined {selectedDetail.registrationDate}
                </span>
              </div>
            </div>

            <div className="border-b px-6 py-3 bg-gray-50">
              <div className="flex space-x-4">
                <button
                  onClick={() => setDetailView("profile")}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    detailView === "profile" ? "bg-green-600 text-white" : "text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  Profile
                </button>
                <button
                  onClick={() => setDetailView("transactions")}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    detailView === "transactions" ? "bg-green-600 text-white" : "text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  Transactions
                </button>
                <button
                  onClick={() => setDetailView("pending")}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    detailView === "pending" ? "bg-green-600 text-white" : "text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  Pending Requests
                </button>
              </div>
            </div>

            <div className="p-6 overflow-y-auto max-h-[calc(80vh-200px)]">
              {detailView === "profile" && (
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold text-green-900 mb-4">Contact Information</h3>
                      <div className="space-y-2">
                        <p className="text-gray-600">Email: {selectedDetail.email}</p>
                        <p className="text-gray-600">Phone: {selectedDetail.contact}</p>
                        <p className="text-gray-600">Location: {selectedDetail.location}</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-green-900 mb-4">Activity Summary</h3>
                      <div className="space-y-2">
                        {selectedDetail.totalListings !== undefined ? (
                          <>
                            <p className="text-gray-600">Total Listings: {selectedDetail.totalListings}</p>
                            <p className="text-gray-600">Active Listings: {selectedDetail.activeListings}</p>
                            <p className="text-gray-600">Total Transactions: {selectedDetail.totalTransactions}</p>
                          </>
                        ) : (
                          <>
                            <p className="text-gray-600">Total Purchases: {selectedDetail.purchases}</p>
                            <p className="text-gray-600">Active Purchases: {selectedDetail.activePurchases}</p>
                            <p className="text-gray-600">Total Spent: {selectedDetail.totalSpent}</p>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {detailView === "transactions" && (
                <div>
                  <h3 className="text-lg font-semibold text-green-900 mb-4">Transaction History</h3>
                  <div className="space-y-4">
                    {selectedDetail.transactions.map((transaction) => (
                      <div key={transaction.id} className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="font-semibold text-green-900">{transaction.type}</p>
                            <p className="text-sm text-gray-600">
                              {selectedDetail.totalListings !== undefined 
                                ? `Sold to: ${transaction.buyer}`
                                : `Bought from: ${transaction.seller}`}
                            </p>
                          </div>
                          <StatusBadge status={transaction.status} />
                        </div>
                        <div className="mt-2 grid grid-cols-3 gap-4 text-sm">
                          <p className="text-gray-600">Amount: {transaction.amount}</p>
                          <p className="text-gray-600">Value: {transaction.value}</p>
                          <p className="text-gray-600">Date: {transaction.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Previous code remains exactly the same until the pending view section */}

              {detailView === "pending" && (
                <div>
                  <h3 className="text-lg font-semibold text-green-900 mb-4">Pending Requests</h3>
                  <div className="space-y-4">
                    {selectedDetail.pendingRequests.map((request) => (
                      <div key={request.id} className="bg-gray-50 p-4 rounded-lg border-l-4 border-yellow-400">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="font-semibold text-green-900">{request.type}</p>
                            <p className="text-sm text-gray-600">
                              {selectedDetail.totalListings !== undefined 
                                ? `Request from: ${request.buyer}`
                                : `Request to: ${request.seller}`}
                            </p>
                          </div>
                          <div className="flex space-x-2">
                            <StatusBadge status={request.status} />
                            <div className="flex space-x-1">
                              <button 
                                className="p-1 rounded-full bg-green-100 text-green-600 hover:bg-green-200"
                                title="Approve Request"
                              >
                                <CheckCircle className="h-5 w-5" />
                              </button>
                              <button 
                                className="p-1 rounded-full bg-red-100 text-red-600 hover:bg-red-200"
                                title="Reject Request"
                              >
                                <XCircle className="h-5 w-5" />
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="mt-2 grid grid-cols-2 gap-4 text-sm">
                          <p className="text-gray-600">Amount: {request.amount}</p>
                          <p className="text-gray-600">Date: {request.date}</p>
                        </div>
                        <div className="mt-4">
                          <div className="flex items-center space-x-2 text-sm text-gray-500">
                            <Clock className="h-4 w-4" />
                            <span>Awaiting review</span>
                          </div>
                        </div>
                      </div>
                    ))}
                    {selectedDetail.pendingRequests.length === 0 && (
                      <div className="text-center py-8 text-gray-500">
                        <Package className="h-12 w-12 mx-auto mb-2 opacity-50" />
                        <p>No pending requests at the moment</p>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
      <BotPressChat/>
    </div>
  );
};

export default AdminDashboard;
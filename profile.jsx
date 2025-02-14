import React from "react";
import { motion } from "framer-motion";

const Profile = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.8 }}
      className="flex justify-center items-center min-h-screen bg-gradient-to-br from-green-50 to-green-100 p-6"
    >
      <motion.div 
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-6 text-center"
      >
        {/* Profile Image */}
        <motion.div 
          className="relative w-32 h-32 mx-auto"
          whileHover={{ scale: 1.1 }}
        >
          <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            className="w-full h-full object-cover rounded-full border-4 border-green-500 shadow-lg"
          />
        </motion.div>

        {/* Profile Info */}
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-bold text-green-800 mt-4"
        >
          John Doe
        </motion.h1>
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-gray-600"
        >
          @johndoe123
        </motion.p>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-4 text-gray-700 space-y-2"
        >
          <p><strong>Email:</strong> johndoe@example.com</p>
          <p><strong>Location:</strong> New York, USA</p>
          <p className="px-4 py-2 bg-green-50 border-l-4 border-green-500 rounded-md text-green-700 shadow-sm">
            <strong>Bio:</strong> Web developer with a passion for creating beautiful and functional websites.
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9 }}
          className="mt-6 flex justify-center gap-4"
        >
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="px-6 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition-all"
          >
            Edit Profile
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="px-6 py-2 bg-gray-300 text-gray-700 rounded-lg shadow-md hover:bg-gray-400 transition-all"
          >
            Logout
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Profile;

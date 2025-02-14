import React, { useState, useEffect } from "react";
import { Bell, Trash2 } from "lucide-react";

const NotificationPanel = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, message: "ABC Industries is interested in your crop residue.", time: "10 mins ago" },
    { id: 2, message: "XYZ Factory wants to purchase animal waste.", time: "30 mins ago" },
    { id: 3, message: "GreenTech Ltd. inquired about your agricultural byproducts.", time: "1 hour ago" },
  ]);

  const [isOpen, setIsOpen] = useState(false);
  const [hasNew, setHasNew] = useState(true);

  useEffect(() => {
    setHasNew(notifications.length > 0);
  }, [notifications]);

  const togglePanel = () => {
    setIsOpen(!isOpen);
    setHasNew(false);
  };

  const removeNotification = (id) => {
    setNotifications(notifications.filter((notification) => notification.id !== id));
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      {/* Notification Bell Button */}
      <button onClick={togglePanel} className="relative p-2 bg-white rounded-full shadow-lg">
        <Bell className="h-7 w-7 text-gray-700 hover:text-green-600 transition-all duration-200" />
        
        {/* Red Dot Indicator for New Notifications */}
        {hasNew && (
          <span className="absolute top-1 right-1 bg-red-500 h-3 w-3 rounded-full animate-pulse"></span>
        )}
      </button>

      {/* Notification Panel */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200">
          <div className="bg-green-600 text-white p-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold">Notifications</h2>
            <button onClick={togglePanel}>
              <Bell className="h-6 w-6" />
            </button>
          </div>
          
          <div className="p-4 space-y-4 max-h-64 overflow-y-auto">
            {notifications.length > 0 ? (
              notifications.map((notification) => (
                <div
                  key={notification.id}
                  className="flex items-center justify-between p-3 bg-gray-100 rounded-lg shadow-sm animate-fadeIn"
                >
                  <div>
                    <p className="text-gray-800 font-medium">{notification.message}</p>
                    <p className="text-sm text-gray-500">{notification.time}</p>
                  </div>
                  <button
                    onClick={() => removeNotification(notification.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500">No new notifications</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationPanel;

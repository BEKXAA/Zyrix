import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, User, LogOut } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const { currentUser, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
      onClose();
    } catch (error) {
      console.error('Failed to logout:', error);
    }
  };

  const menuItems = ['Home', 'Trade', 'Learn', 'Videos', 'Support'];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
       
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 md:hidden"
            onClick={onClose}
          />
          
         
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 h-full w-80 bg-gray-900 border-l border-gray-800 z-50 md:hidden"
          >
            <div className="flex items-center justify-between p-6 border-b border-gray-800">
              <h2 className="text-lg font-semibold text-white">Menu</h2>
              <button
                onClick={onClose}
                className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              
              <div className="flex items-center space-x-3 pb-4 border-b border-gray-800">
                <User className="h-8 w-8 text-purple-500" />
                <div>
                  <p className="text-white font-medium">User</p>
                  <p className="text-gray-400 text-sm">{currentUser?.email}</p>
                </div>
              </div>

            
              <nav className="space-y-4">
                {menuItems.map((item) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="block py-2 text-gray-300 hover:text-white transition-colors duration-200"
                    onClick={onClose}
                    whileHover={{ x: 10 }}
                  >
                    {item}
                  </motion.a>
                ))}
              </nav>

             
              <motion.button
                onClick={handleLogout}
                className="flex items-center space-x-2 w-full bg-red-600 hover:bg-red-700 px-4 py-3 rounded-lg transition-colors duration-200"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <LogOut className="h-4 w-4" />
                <span>Logout</span>
              </motion.button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
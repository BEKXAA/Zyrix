import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Menu, User, LogOut } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

interface HeaderProps {
  onMenuToggle: () => void;
  isMobileMenuOpen: boolean;
}

const Header: React.FC<HeaderProps> = ({ onMenuToggle, isMobileMenuOpen }) => {
  const { currentUser, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Failed to logout:', error);
    }
  };

  return (
    <header className="bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
         
          <motion.div 
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <TrendingUp className="h-8 w-8 text-purple-500" />
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Zyrix
            </span>
          </motion.div>

          
          <nav className="hidden md:flex items-center space-x-8">
            {['Dashboard', 'Trade', 'Learn', 'Videos', 'Support'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-white transition-colors duration-200"
                whileHover={{ y: -2 }}
              >
                {item}
              </motion.a>
            ))}
          </nav>

          
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2 text-gray-300">
              <User className="h-4 w-4" />
              <span className="text-sm">{currentUser?.email}</span>
            </div>
            
            <motion.button
              onClick={handleLogout}
              className="hidden md:flex items-center space-x-2 bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <LogOut className="h-4 w-4" />
              <span>Logout</span>
            </motion.button>

           
            <motion.button
              onClick={onMenuToggle}
              className="md:hidden p-2 rounded-lg bg-gray-800 hover:bg-gray-700"
              whileTap={{ scale: 0.95 }}
            >
              <Menu className="h-5 w-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
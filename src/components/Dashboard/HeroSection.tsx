import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, BarChart3, DollarSign, Users } from 'lucide-react';

const HeroSection: React.FC = () => {
  const stats = [
    { icon: DollarSign, label: 'Total Volume', value: '$2.4B+' },
    { icon: Users, label: 'Active Users', value: '150K+' },
    { icon: TrendingUp, label: 'Success Rate', value: '94%' },
    { icon: BarChart3, label: 'Markets', value: '500+' },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-gray-900/20"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Trade, Invest, and{' '}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Build Your Future
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Join thousands of traders on Zyrix - the most trusted platform for cryptocurrency trading, 
            learning, and building wealth in the digital economy.
          </p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-medium text-lg transition-all duration-200 transform hover:scale-105">
            Start Trading Now
            </button>
            <button className="border border-gray-600 hover:border-gray-500 text-white px-8 py-4 rounded-lg font-medium text-lg transition-all duration-200 transform hover:scale-105">
              Learn More
            </button>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + index * 0.1 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 text-center border border-gray-700 hover:border-gray-600 transition-all duration-200"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <stat.icon className="h-8 w-8 text-purple-500 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
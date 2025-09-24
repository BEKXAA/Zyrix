import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, DollarSign, Activity } from 'lucide-react';

const TradingSection: React.FC = () => {
  const cryptoData = [
    { symbol: 'BTC', name: 'Bitcoin', price: '$43,250.00', change: '+2.4%', trend: 'up' },
    { symbol: 'ETH', name: 'Ethereum', price: '$2,850.00', change: '+5.1%', trend: 'up' },
    { symbol: 'BNB', name: 'Binance Coin', price: '$315.80', change: '-1.2%', trend: 'down' },
    { symbol: 'SOL', name: 'Solana', price: '$98.45', change: '+8.7%', trend: 'up' },
  ];

  return (
    <section id="trade" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Advanced Trading Platform
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Trade with confidence using our professional-grade tools and real-time market data
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
        
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700"
          >
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
              <Activity className="h-5 w-5 text-purple-500 mr-2" />
              Market Overview
            </h3>
            
            <div className="space-y-4">
              {cryptoData.map((crypto, index) => (
                <motion.div
                  key={crypto.symbol}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center justify-between p-4 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-all duration-200"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">{crypto.symbol}</span>
                    </div>
                    <div>
                      <div className="text-white font-medium">{crypto.symbol}</div>
                      <div className="text-gray-400 text-sm">{crypto.name}</div>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="text-white font-medium">{crypto.price}</div>
                    <div className={`text-sm flex items-center ${
                      crypto.trend === 'up' ? 'text-green-400' : 'text-red-400'
                    }`}>
                      {crypto.trend === 'up' ? 
                        <TrendingUp className="h-3 w-3 mr-1" /> : 
                        <TrendingDown className="h-3 w-3 mr-1" />
                      }
                      {crypto.change}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

         
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700"
          >
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
              <DollarSign className="h-5 w-5 text-purple-500 mr-2" />
              Quick Trade
            </h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Select Asset
                </label>
                <select className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500">
                  <option>Bitcoin (BTC)</option>
                  <option>Ethereum (ETH)</option>
                  <option>Binance Coin (BNB)</option>
                  <option>Solana (SOL)</option>
                </select>
              </div>
              
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Amount
                </label>
                <input
                  type="number"
                  placeholder="0.00"
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              
              <div className="flex gap-4">
                <motion.button
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-medium transition-all duration-200"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Buy
                </motion.button>
                <motion.button
                  className="flex-1 bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-medium transition-all duration-200"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Sell
                </motion.button>
              </div>
              
              <div className="bg-gray-700/50 rounded-lg p-4 mt-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-400">Portfolio Balance</span>
                  <span className="text-white font-medium">$12,450.00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">24h P&L</span>
                  <span className="text-green-400 font-medium">+$234.50 (1.9%)</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TradingSection;
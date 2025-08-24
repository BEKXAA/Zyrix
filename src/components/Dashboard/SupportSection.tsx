import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HelpCircle, MessageCircle, Mail, Plus, Minus } from 'lucide-react';

const SupportSection: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How do I start trading on Zyrix?',
      answer: 'To start trading, complete your account verification, deposit funds, and you can begin trading immediately. We recommend starting with small amounts and using our educational resources.',
    },
    {
      question: 'What are the trading fees?',
      answer: 'Zyrix offers competitive trading fees starting from 0.1% for spot trading. VIP users can enjoy even lower fees based on their trading volume and ZRX token holdings.',
    },
    {
      question: 'Is my money safe on Zyrix?',
      answer: 'Yes, we employ industry-leading security measures including cold storage for funds, two-factor authentication, and regular security audits to protect your assets.',
    },
    {
      question: 'How long does withdrawal take?',
      answer: 'Cryptocurrency withdrawals are typically processed within 30 minutes. Fiat withdrawals may take 1-3 business days depending on your payment method.',
    },
    {
      question: 'Do you offer mobile trading?',
      answer: 'Yes, Zyrix is fully responsive and optimized for mobile devices. You can trade, monitor markets, and manage your portfolio from any device.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section id="support" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Support Center
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Get help when you need it with our comprehensive support resources
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Options */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-1"
          >
            <h3 className="text-xl font-semibold text-white mb-6">Get in Touch</h3>
            
            <div className="space-y-4">
              <motion.div
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-200"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex items-center space-x-3 mb-3">
                  <MessageCircle className="h-6 w-6 text-purple-500" />
                  <h4 className="text-white font-medium">Live Chat</h4>
                </div>
                <p className="text-gray-400 mb-4">Get instant help from our support team</p>
                <button className="text-purple-400 hover:text-purple-300 font-medium">
                  Start Chat →
                </button>
              </motion.div>

              <motion.div
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-200"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex items-center space-x-3 mb-3">
                  <Mail className="h-6 w-6 text-purple-500" />
                  <h4 className="text-white font-medium">Email Support</h4>
                </div>
                <p className="text-gray-400 mb-4">Send us detailed questions and get comprehensive answers</p>
                <button className="text-purple-400 hover:text-purple-300 font-medium">
                  Send Email →
                </button>
              </motion.div>

              <motion.div
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-200"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex items-center space-x-3 mb-3">
                  <HelpCircle className="h-6 w-6 text-purple-500" />
                  <h4 className="text-white font-medium">Help Center</h4>
                </div>
                <p className="text-gray-400 mb-4">Browse our comprehensive knowledge base</p>
                <button className="text-purple-400 hover:text-purple-300 font-medium">
                  Visit Help Center →
                </button>
              </motion.div>
            </div>
          </motion.div>

          {/* FAQ */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <h3 className="text-xl font-semibold text-white mb-6">Frequently Asked Questions</h3>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 overflow-hidden"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-700/30 transition-all duration-200"
                  >
                    <span className="text-white font-medium">{faq.question}</span>
                    {openFAQ === index ? (
                      <Minus className="h-5 w-5 text-purple-500" />
                    ) : (
                      <Plus className="h-5 w-5 text-purple-500" />
                    )}
                  </button>
                  
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: openFAQ === index ? 'auto' : 0,
                      opacity: openFAQ === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <p className="text-gray-400">{faq.answer}</p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Play, Trophy, Clock } from 'lucide-react';

const LearnSection: React.FC = () => {
  const courses = [
    {
      title: 'Cryptocurrency Basics',
      description: 'Learn the fundamentals of blockchain and digital currencies',
      duration: '2 hours',
      level: 'Beginner',
      icon: BookOpen,
    },
    {
      title: 'Technical Analysis',
      description: 'Master chart patterns and trading indicators',
      duration: '4 hours',
      level: 'Intermediate',
      icon: Trophy,
    },
    {
      title: 'Risk Management',
      description: 'Protect your capital with proper risk strategies',
      duration: '3 hours',
      level: 'Advanced',
      icon: Play,
    },
  ];

  const videos = [
    {
      title: 'Bitcoin Trading Strategies',
      views: '2.4K views',
      duration: '15:30',
      thumbnail: 'https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      title: 'DeFi Explained Simply',
      views: '1.8K views',
      duration: '12:45',
      thumbnail: 'https://images.pexels.com/photos/7567486/pexels-photo-7567486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      title: 'Portfolio Diversification',
      views: '3.1K views',
      duration: '18:20',
      thumbnail: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
  ];

  return (
    <section id="learn" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Learn & Grow Your Skills
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Access comprehensive learning resources to become a successful trader
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Courses */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <BookOpen className="h-6 w-6 text-purple-500 mr-3" />
              Trading Courses
            </h3>
            
            <div className="space-y-6">
              {courses.map((course, index) => (
                <motion.div
                  key={course.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-200"
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                      <course.icon className="h-6 w-6 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-white mb-2">{course.title}</h4>
                      <p className="text-gray-400 mb-4">{course.description}</p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <span className="text-sm text-gray-500 flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {course.duration}
                          </span>
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            course.level === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                            course.level === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                            'bg-red-500/20 text-red-400'
                          }`}>
                            {course.level}
                          </span>
                        </div>
                        
                        <button className="text-purple-400 hover:text-purple-300 font-medium">
                          Start Course →
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Videos */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <Play className="h-6 w-6 text-purple-500 mr-3" />
              Video Tutorials
            </h3>
            
            <div className="space-y-6">
              {videos.map((video, index) => (
                <motion.div
                  key={video.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-gray-600 transition-all duration-200"
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="flex">
                    <div className="relative w-32 h-24 flex-shrink-0">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <Play className="h-6 w-6 text-white" />
                      </div>
                      <div className="absolute bottom-1 right-1 bg-black/80 text-white text-xs px-1 rounded">
                        {video.duration}
                      </div>
                    </div>
                    
                    <div className="p-4 flex-1">
                      <h4 className="text-white font-medium mb-2">{video.title}</h4>
                      <p className="text-gray-400 text-sm">{video.views}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LearnSection;
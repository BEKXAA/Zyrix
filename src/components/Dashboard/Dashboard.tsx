import React, { useState } from 'react';
import Header from '../Layout/Header';
import MobileMenu from '../Layout/MobileMenu';
import HeroSection from './HeroSection';
import TradingSection from './TradingSection';
import LearnSection from './LearnSection';
import SupportSection from './SupportSection';

const Dashboard: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <Header
        onMenuToggle={toggleMobileMenu}
        isMobileMenuOpen={isMobileMenuOpen}
      />
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />

      <main>
        <HeroSection />
        <TradingSection />
        <LearnSection />
        <SupportSection />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-400">
            <p>&copy; 2024 Zyrix. All rights reserved. <br />
              Trading is a type of commercial activity. Trading is the act of attempting to make a profit by taking advantage of the movements in financial assets, <br /> such as currencies, stocks, bonds, financial instruments, and other financial instruments. Traders <br /> must have financial knowledge related to the level of difficulty and risk assessment and management.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
import { useState } from 'react';
import Sidebar from './Sidebar';
import DashboardNavbar from './DashboardNavbar';

const DashboardLayout = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#f8f9fa] text-gray-900 font-cairo" dir="rtl">
      <Sidebar isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} />
      <div className="flex-1 flex flex-col min-w-0 w-full">
        <DashboardNavbar onMenuClick={() => setIsMobileMenuOpen(true)} />
        <main className="flex-1 p-4 md:p-8 overflow-x-hidden">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;

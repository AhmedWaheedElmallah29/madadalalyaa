import { LuBell, LuTrendingUp, LuMenu } from 'react-icons/lu';

const DashboardNavbar = ({ onMenuClick }) => {
  return (
    <header className="h-[80px] bg-white flex items-center justify-between px-4 md:px-8 border-b border-gray-100">
      {/* Right side (RTL start) - Mobile Menu Button & Breadcrumbs */}
      <div className="flex items-center gap-4">
        <button 
          onClick={onMenuClick}
          className="lg:hidden p-2 text-gray-500 hover:text-gray-700 transition-colors bg-gray-50 rounded-lg"
        >
          <LuMenu className="text-2xl" />
        </button>
        {/* We can put breadcrumbs or search here later if needed */}
      </div>

      {/* Left side (RTL end) */}
      <div className="flex items-center gap-6">
        
        {/* Notifications & Actions */}
        <div className="flex items-center gap-4">
          <button className="relative p-2 text-gray-500 hover:text-gray-700 transition-colors">
            <LuBell className="text-[22px]" />
            <span className="absolute top-1 right-1 w-4 h-4 bg-red-500 text-white text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-white">
              12
            </span>
          </button>
          
          <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
            <LuTrendingUp className="text-[20px]" />
          </div>
        </div>

        {/* Separator */}
        <div className="h-8 w-px bg-gray-200"></div>

        {/* User Profile */}
        <div className="flex items-center gap-3 cursor-pointer">
          <div className="text-left">
            <p className="text-[14px] font-bold text-gray-800">أحمد محمد</p>
            <p className="text-[12px] text-gray-500">مدير النظام</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-[#219B54] text-white flex items-center justify-center text-lg font-bold">
            أ
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardNavbar;

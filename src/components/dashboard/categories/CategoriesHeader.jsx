import { useState } from 'react';
import { LuLayers, LuPlus } from 'react-icons/lu';
import AddCategoryModal from './AddCategoryModal';

const CategoriesHeader = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="flex justify-between items-center bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-6 relative overflow-hidden">
        {/* Right Content */}
        <div className="flex items-center gap-4 z-10">
          <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-500 flex items-center justify-center">
            <LuLayers className="text-2xl" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-1">إدارة التصنيفات</h2>
            <p className="text-sm text-gray-500">تنظيم وإدارة تصنيفات الكتب</p>
          </div>
        </div>

        {/* Left Action Button */}
        <button 
          className="z-10 flex items-center gap-2 bg-[#219B54] hover:bg-emerald-700 text-white px-5 py-2.5 rounded-lg font-medium transition-colors text-sm shadow-sm"
          onClick={() => setIsModalOpen(true)}
        >
          <LuPlus className="text-lg" />
          <span>إضافة تصنيف جديد</span>
        </button>

        {/* Subtle Background Decoration (Optional, gives premium feel) */}
        <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-l from-transparent to-gray-50/50 pointer-events-none"></div>
      </div>

      <AddCategoryModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
};

export default CategoriesHeader;

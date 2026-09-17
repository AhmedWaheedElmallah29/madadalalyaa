import { LuSearch } from 'react-icons/lu';

const CategoriesSearch = () => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-6">
      <div className="relative">
        <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
          <LuSearch className="text-gray-400 text-lg" />
        </div>
        <input
          type="text"
          className="w-full pl-4 pr-11 py-3 border border-gray-200 rounded-xl bg-gray-50/50 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#219B54] focus:border-transparent transition-all"
          placeholder="ابحث عن تصنيف..."
        />
      </div>
    </div>
  );
};

export default CategoriesSearch;

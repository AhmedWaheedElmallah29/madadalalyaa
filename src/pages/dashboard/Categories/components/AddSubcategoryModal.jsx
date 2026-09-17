import { LuX } from 'react-icons/lu';

const AddSubcategoryModal = ({ isOpen, onClose, parentCategoryName }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 pb-2 border-b-transparent">
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-700 transition-colors p-2 rounded-lg hover:bg-gray-100 mr-auto"
          >
            <LuX className="text-xl" />
          </button>
        </div>

        {/* Content */}
        <div className="px-8 pb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-right">إضافة تصنيف فرعي جديد</h2>
          
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2 text-right">
              اسم التصنيف
            </label>
            <input 
              type="text" 
              placeholder="أدخل اسم التصنيف..."
              className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#219B54] focus:border-transparent transition-all"
            />
          </div>

          <div className="bg-blue-50 border border-blue-100 text-blue-700 px-4 py-3 rounded-xl mb-8 text-sm font-medium text-right">
            سيتم إضافة هذا التصنيف كتصنيف فرعي لـ "{parentCategoryName}"
          </div>

          {/* Actions */}
          <div className="flex flex-col-reverse sm:flex-row items-stretch sm:items-center gap-3 justify-end mt-4">
            <button 
              className="bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 px-4 sm:px-8 py-2.5 rounded-lg font-medium transition-colors w-full sm:w-auto"
              onClick={onClose}
            >
              إلغاء
            </button>
            <button 
              className="bg-[#00a63e] hover:bg-green-700 text-white px-4 sm:px-8 py-2.5 rounded-lg font-medium transition-colors shadow-sm w-full sm:w-auto"
              onClick={onClose}
            >
              إضافة
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AddSubcategoryModal;

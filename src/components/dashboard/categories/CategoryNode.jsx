import { useState } from "react";
import {
  LuFolder,
  LuChevronDown,
  LuChevronLeft,
  LuTrash2,
  LuPencil,
  LuPlus,
} from "react-icons/lu";
import AddSubcategoryModal from "./AddSubcategoryModal";
import EditCategoryModal from "./EditCategoryModal";

const CategoryNode = ({ category, level = 1 }) => {
  const [isExpanded, setIsExpanded] = useState(category.expanded || false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const getBadgeStyle = (level) => {
    switch (level) {
      case 1:
        return "bg-emerald-100 text-emerald-700";
      case 2:
        return "bg-blue-100 text-blue-700";
      case 3:
        return "bg-purple-100 text-purple-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const getBadgeText = (level) => {
    switch (level) {
      case 1:
        return "رئيسي";
      case 2:
        return "فرعي";
      case 3:
        return "ثالث";
      default:
        return "";
    }
  };

  const getIconColor = (level) => {
    switch (level) {
      case 1:
        return "text-emerald-500";
      case 2:
        return "text-blue-500";
      case 3:
        return "text-purple-500";
      default:
        return "text-gray-500";
    }
  };

  // Calculate indentation based on level (RTL means padding right)
  const indentClass = level === 2 ? "pr-4 md:pr-8" : level === 3 ? "pr-8 md:pr-16" : "";

  return (
    <div
      className={`flex flex-col ${level > 1 && !category.isLast ? "border-b border-gray-100" : ""}`}
    >
      {/* Node Row */}
      <div
        className={`group flex items-center justify-between py-4 px-3 md:px-6 transition-colors ${
          level === 1 ? "bg-white" : "bg-[#f8f9fa] border-t border-gray-100"
        }`}
      >
        <div className={`flex items-center gap-2 md:gap-4 ${indentClass}`}>
          {/* Chevron for expand/collapse (only if has children) */}
          <div
            className="w-5 flex justify-center cursor-pointer shrink-0"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {category.children &&
              category.children.length > 0 &&
              (isExpanded ? (
                <LuChevronDown className="text-gray-400 text-lg md:text-xl" />
              ) : (
                <LuChevronLeft className="text-gray-400 text-lg md:text-xl" />
              ))}
          </div>

          <LuFolder
            className={`text-xl md:text-2xl ${getIconColor(level)} shrink-0`}
            fill="currentColor"
            fillOpacity={0.2}
          />

          <div>
            <div className="flex items-center gap-2 md:gap-3 flex-wrap">
              <h4 className="font-semibold text-gray-800 text-[14px] md:text-[15px]">
                {category.name}
              </h4>
              <span
                className={`text-[10px] md:text-[11px] font-bold px-2 py-0.5 rounded-full ${getBadgeStyle(level)} whitespace-nowrap`}
              >
                {getBadgeText(level)}
              </span>
            </div>
            <p className="text-[11px] md:text-[12px] text-gray-500 mt-1">
              {category.booksCount} كتاب
              {category.subCount ? ` • ${category.subCount} تصنيف فرعي` : ""}
            </p>
          </div>
        </div>

        {/* Actions (always visible on mobile, hover on desktop) */}
        <div
          className={`flex items-center gap-1 md:gap-3 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity ${level === 2 && isExpanded ? "lg:opacity-100" : ""}`}
        >
          <button
            className="text-blue-500 hover:bg-blue-50 p-1.5 rounded-md transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              setIsModalOpen(true);
            }}
          >
            <LuPlus className="text-lg" />
          </button>

          <button 
            className="text-emerald-500 hover:bg-emerald-50 p-1.5 rounded-md transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              setIsEditModalOpen(true);
            }}
          >
            <LuPencil className="text-lg" />
          </button>

          <button className="text-red-500 hover:bg-red-50 p-1.5 rounded-md transition-colors">
            <LuTrash2 className="text-lg" />
          </button>
        </div>
      </div>

      {/* Render Children */}
      {isExpanded && category.children && (
        <div className="flex flex-col w-full">
          {category.children.map((child, index) => (
            <CategoryNode
              key={child.id}
              category={{
                ...child,
                isLast: index === category.children.length - 1,
              }}
              level={level + 1}
            />
          ))}
        </div>
      )}

      {/* Add Subcategory Modal */}
      <AddSubcategoryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        parentCategoryName={category.name}
      />

      {/* Edit Category Modal */}
      <EditCategoryModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        categoryName={category.name}
      />
    </div>
  );
};

export default CategoryNode;

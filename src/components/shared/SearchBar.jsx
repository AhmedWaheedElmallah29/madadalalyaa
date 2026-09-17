import { Search } from "lucide-react";

export default function SearchBar({ value, onChange, onSearch, placeholder = "بحث", className = "" }) {
  return (
    <div className={`w-[476px] h-[47px] border border-[#E6E6E6] rounded-md flex overflow-hidden bg-white shrink-0 ${className}`}>
      <div className="flex-1 flex items-center px-4 gap-2 text-[#808080]">
        <Search className="w-5 h-5 text-[#1A1A1A]" />
        <input
          type="text"
          placeholder={placeholder}
          className="flex-1 h-full outline-none text-[#242424]"
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && onSearch) {
              onSearch();
            }
          }}
        />
      </div>
      <button 
        type="button"
        onClick={onSearch}
        className="w-[76px] h-full bg-[#289D61] text-white flex justify-center items-center font-semibold text-[16px]"
      >
        بحث
      </button>
    </div>
  );
}

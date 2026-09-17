import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

export default function PageHeader({
  title,
  breadcrumbs,
  search,
  onSearchChange,
}) {
  return (
    <div className="w-full max-w-[1440px] mx-auto px-[73px] pt-8 pb-10 relative">
      <div className="flex justify-between items-center mb-8">
        {/* Breadcrumb (Right in RTL) */}
        <div className="text-[16px] font-bold text-[#9D9D9D]">
          {breadcrumbs.map((crumb, idx) => (
            <span key={idx}>
              {crumb.path ? (
                <Link
                  to={crumb.path}
                  className="hover:text-[#289D61] transition-colors"
                >
                  {crumb.label}
                </Link>
              ) : (
                <span>{crumb.label}</span>
              )}
              {idx < breadcrumbs.length - 1 && " / "}
            </span>
          ))}
        </div>

        {/* Search (Left in RTL) */}
        {search !== undefined ? (
          <SearchBar value={search} onChange={onSearchChange} />
        ) : (
          <div className="w-[476px] shrink-0"></div>
        )}
      </div>

      {/* Title */}
      {title && (
        <div className="flex flex-col items-center">
          <h1 className="text-[24px] font-bold text-[#242424] leading-[45px]">
            {title}
          </h1>
          <div className="w-[143px] border-b-4 border-[#289D61] mt-3 rounded-full"></div>
        </div>
      )}
    </div>
  );
}

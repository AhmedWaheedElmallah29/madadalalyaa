import { Link } from "react-router-dom";
import {
  LuLayoutDashboard,
  LuBook,
  LuUsers,
  LuFileText,
  LuBell,
  LuMessageSquare,
  LuLayers,
  LuChartColumnIncreasing,
} from "react-icons/lu";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const menuItems = [
    {
      name: "لوحة التحكم",
      icon: LuLayoutDashboard,
      path: "/dashboard",
      active: false,
    },
    { name: "الكتب", icon: LuBook, path: "/dashboard/books", active: false },
    {
      name: "المستخدمين",
      icon: LuUsers,
      path: "/dashboard/users",
      active: false,
    },
    {
      name: "المدونة",
      icon: LuFileText,
      path: "/dashboard/blog",
      active: false,
    },
    {
      name: "الإشعارات",
      icon: LuBell,
      path: "/dashboard/notifications",
      active: false,
    },
    {
      name: "التعليقات",
      icon: LuMessageSquare,
      path: "/dashboard/comments",
      active: false,
      badge: 12,
    },
    {
      name: "التصنيفات",
      icon: LuLayers,
      path: "/dashboard/categories",
      active: true,
    },
    {
      name: "التقارير والإحصائيات",
      icon: LuChartColumnIncreasing,
      path: "/dashboard/reports",
      active: false,
    },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Content */}
      <aside
        className={`fixed lg:static top-0 right-0 z-50 h-screen w-[260px] lg:w-[280px] bg-white border-l border-gray-100 flex flex-col overflow-y-auto shrink-0 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full lg:translate-x-0"
        }`}
      >
        {/* Logo Area */}
        <div className="p-6 flex items-center justify-start border-b border-gray-100/50">
          <div className="flex items-center gap-3">
            <img
              src="/logo.svg"
              alt="مداد العلياء"
              className="w-[48px] h-[43px] object-contain shrink-0"
            />

            <div className="text-right">
              <h1 className="text-[18px] font-bold text-gray-800 leading-tight">
                مداد العلياء
              </h1>
              <p className="text-[12px] text-gray-500">لوحة التحكم</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 flex flex-col gap-1.5">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className={`flex items-center justify-between px-4 py-3 rounded-xl transition-colors duration-200 ${
                item.active
                  ? "bg-[#219B54] text-white shadow-sm"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              <div className="flex items-center gap-3">
                <item.icon className="text-[20px]" strokeWidth={2} />
                <span className="font-medium text-[15px]">{item.name}</span>
              </div>
              {item.badge && (
                <span
                  className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full min-w-[20px] text-center ${
                    item.active
                      ? "bg-red-500 text-white"
                      : "bg-[#f43f5e] text-white"
                  }`}
                >
                  {item.badge}
                </span>
              )}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;

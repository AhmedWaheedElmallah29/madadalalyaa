import { useState } from "react";
import RowComponent from "./RowComponent";
import { Users, Search } from 'lucide-react';

const usersData = [
  { id: 1, name: "محمد أحمد", email: "mohamed.ahmed@example.com", date: "2025-12-15", orders: 24, address: "القاهرة، مصر", status: "active" },
  { id: 2, name: "فاطمة حسن", email: "fatima.hassan@example.com", date: "2025-11-20", orders: 45, address: "الإسكندرية، مصر", status: "active" },
  { id: 3, name: "عمر خالد", email: "omar.khaled@example.com", date: "2026-01-10", orders: 8, address: "الجيزة، مصر", status: "blocked" },
  { id: 4, name: "سارة علي", email: "sara.ali@example.com", date: "2025-10-05", orders: 67, address: "الرياض، السعودية", status: "active" },
  { id: 5, name: "أحمد محمود", email: "ahmed.mahmoud@example.com", date: "2025-09-18", orders: 32, address: "دبي، الإمارات", status: "active" },
  { id: 6, name: "نور الدين", email: "nour.aldeen@example.com", date: "2026-01-05", orders: 3, address: "عمّان، الأردن", status: "blocked" },
  { id: 7, name: "ليلى يوسف", email: "layla.youssef@example.com", date: "2025-08-22", orders: 89, address: "بيروت، لبنان", status: "active" },
  { id: 8, name: "كريم ابراهيم", email: "karim.ibrahim@example.com", date: "2025-12-01", orders: 15, address: "الدوحه، قطر", status: "active" },
];

function TableComponent() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const activeCount = usersData.filter((u) => u.status === "active").length;
  const blockedCount = usersData.filter((u) => u.status === "blocked").length;

  const filteredUsers = usersData.filter((user) => {
    const matchesSearch = user.name.includes(search) || user.email.includes(search);
    const matchesFilter = filter === "all" || user.status === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div dir="rtl" className="min-h-screen bg-[#f9fafb] p-8 font-sans">
      
      {/* الهيدر */}
      <div className="flex items-center justify-between border-b border-[#e5e7eb] pb-4 mb-6">
        
        <div className="flex items-center gap-3">
          <div className="bg-[#2D9159] p-2 rounded-[4px] text-white flex items-center justify-center">
             <Users className="w-6 h-6" />
          </div>
          <div className="text-right">
            <div className="flex items-center gap-2 text-[20px] font-medium text-[#1f2937] font-['Cairo']">
              إدارة المستخدمين
            </div>
            
            <div className="flex items-center gap-4 text-sm text-[#6b7280] mt-1 justify-end font-['Cairo']">
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-[#22c55e] inline-block"></span>
                نشط: {activeCount}
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-[#9ca3af] inline-block"></span>
                موقوف: {blockedCount}
              </span>
            </div>
          </div>
        </div>
        
        <div>
          <p className="text-[2.25rem] font-bold text-[#1f2937] m-0">{usersData.length}</p>
          <p className="text-[#6b7280] text-sm mt-1 font-['Cairo']">إجمالي المستخدمين</p>
        </div>
      </div>

      {/* شريط البحث والقائمة المنسدلة */}
      <div className="flex items-center gap-4 mb-6">
        
        
        <div className="bg-[#EEEEEE] w-full max-w-[1000px] h-[38px] relative border border-[#EEEEEE] rounded-[5px] flex items-center">
          <input
            type="text"
            placeholder="البحث بالاسم أو البريد الإلكتروني..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-transparent border-none outline-none pr-10 pl-3 text-sm font-['Cairo'] text-[#242424] placeholder-[#9ca3af]"
          />
          <Search className="w-4 h-4 text-[#9ca3af] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>
        
        
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border border-[#EEEEEE] rounded-[5px] w-[200px] h-[38px] bg-[#EEEEEE] text-[#242424] outline-none font-['Cairo'] px-3 text-sm cursor-pointer accent-[#2D9159]"
        >
          <option value="all" className="bg-white hover:bg-[#e5e7eb]">جميع المستخدمين</option>
          <option value="active" className="bg-white hover:bg-[#e5e7eb]">نشط</option>
          <option value="blocked" className="bg-white hover:bg-[#e5e7eb]">موقوف</option>
        </select>
      </div>

      {/* الجدول */}
      <div className="bg-white rounded-[5px] border-2 border-[#EEEEEE] shadow-[0_1px_2px_rgba(0,0,0,0.05)] overflow-x-auto">
        <table className="w-full border-collapse text-right">
          <thead>
            <tr className="border-b-2 border-[#e5e7eb] text-[#242424] text-[15px]">
              <th className="py-3 px-4 font-medium font-['Cairo']">اسم المستخدم</th>
              <th className="py-3 px-4 font-medium font-['Cairo']">البريد الإلكتروني</th>
              <th className="py-3 px-4 font-medium font-['Cairo']">تاريخ التسجيل</th>
              <th className="py-3 px-4 font-medium font-['Cairo']">عدد الطلبات</th>
              <th className="py-3 px-4 font-medium font-['Cairo']">عنوان المستخدم</th>
              <th className="py-3 px-4 font-medium font-['Cairo']">الإجراءات</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <RowComponent key={user.id} user={user} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TableComponent;
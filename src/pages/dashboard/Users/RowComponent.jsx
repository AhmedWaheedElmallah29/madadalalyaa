import { CiShoppingCart } from "react-icons/ci";

function RowComponent({ user }) {
  return (
    <tr className="border-b-2 border-[#f3f4f6] hover:bg-[#f9fafb] transition-colors">
      <td className="p-4 text-[#4b5563] font-['Cairo']">
        <div className="flex gap-2 font-['Cairo'] items-center">
          <span className="w-8 h-8 rounded-full bg-[#dcfce7] text-[#15803d] flex items-center justify-center text-sm font-semibold">
            {user.name.charAt(0)}
          </span>
          <span className="text-[#1f2937] font-semibold">{user.name}</span>
        </div>
      </td>
      <td className="p-4 text-[#4b5563] font-['Cairo']">{user.email}</td>
      <td className="p-4 text-[#4b5563] font-['Cairo']">{user.date}</td>
      <td className="p-4 text-[#4b5563] font-['Cairo']">
        <span className="flex items-center gap-1 font-['Cairo'] text-[#1f2937]">
          <CiShoppingCart size={16} style={{ color: "#16a34a" }} />
          {user.orders}
        </span>
      </td>
      <td className="p-4 text-[#4b5563] font-['Cairo']">{user.address}</td>
      <td className="p-4 text-[#4b5563] font-['Cairo']">
        <div className="flex items-center gap-3">
          <button className="bg-transparent border-none cursor-pointer p-0 text-[#3b82f6] hover:text-[#1d4ed8]" title="عرض">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </button>
          <button className="bg-transparent border-none cursor-pointer p-0 text-[#374151] hover:text-black" title="حظر">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 105.636 5.636a9 9 0 0012.728 12.728zM5.636 5.636l12.728 12.728" />
            </svg>
          </button>
          <button className="bg-transparent border-none cursor-pointer p-0 text-[#ef4444] hover:text-[#b91c1c]" title="حذف">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
        </div>
      </td>
    </tr>
  );
}

export default RowComponent;
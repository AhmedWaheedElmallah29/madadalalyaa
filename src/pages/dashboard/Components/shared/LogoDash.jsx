import { Target } from "lucide-react";

const LogoDash = () => {
  return (
    <div className="flex items-center gap-2" >
      <div>
        <Target />
      </div>

      <div className="">
        <h2 className="font-medium text-xl">مداد العلياء</h2>
        <p className="text-lg text-gray-2">لوحة التحكم</p>
      </div>
    </div>
  );
};

export default LogoDash;

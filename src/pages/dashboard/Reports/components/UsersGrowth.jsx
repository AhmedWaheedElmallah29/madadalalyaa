import { TrendingUp } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import userGrowth from "../data/userGrowth";
const UsersGrowth = () => {
  return (
    <div className="container mx-auto shadow-2xl p-9 rounded-xl">
      <div className="grid grid-cols-1 lg:grid-cols-1">
        <div className="flex items-center justify-between ">
          <div>
            <h2 className="font-bold text-2xl pb-2 ms-2">نمو المستخدمين</h2>
            <p className="text-gray-2 text-lg ">عدد المستخدمين الجدد شهريا</p>
          </div>

          <div>
            <div className="bg-icon-4 flex items-center justify-center px-3 py-3 rounded-full">
              <TrendingUp color="#AF46FB" />
            </div>
          </div>
        </div>

        <div className="">
          <LineChart
            className=" mt-9 "
            data={userGrowth}
            style={{
              width: "100%",
              maxHeight: "50vh",
              aspectRatio: 1,
            }}
            responsive
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <Tooltip />
            <YAxis dataKey="users" />

            <Line
              type="monotone"
              dataKey="users"
              stroke="#AF46FB"
              strokeWidth={3}
            />
          </LineChart>
        </div>
      </div>
    </div>
  );
};

export default UsersGrowth;

import {  BookOpenCheck } from "lucide-react";
import { Bar, ComposedChart, Legend, Tooltip, XAxis, YAxis } from "recharts";
import bestSellingBooks from "../data/bestSellingBooks";
function BestSellingBooks() {
  return (
    <div className="container mx-auto shadow-2xl p-9 rounded-xl mt-19">
      <div className="grid grid-cols-1 lg:grid-cols-1">
        <div className="flex items-center justify-between ">
          <div>
            <h2 className="font-bold text-2xl pb-2 ms-2">الكتب الأكثر مبيعآ</h2>
            <p className="text-gray-2 text-lg ">ترتيب الكتب حسب المبيعات</p>
          </div>

          <div>
            <div className="bg-icon-3 flex items-center justify-center px-3 py-3 rounded-full">
              <BookOpenCheck color="#00A63E" />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <ComposedChart
            layout="vertical"
            responsive
            data={bestSellingBooks}
            className="   w-full"height={400}
          >
            {/* <CartesianGrid /> */}
            <XAxis type="number" niceTicks="snap125" dataKey="sales" />

            <YAxis
              dataKey="title"
              type="category"
              scale="band"
              width="100"
              tickMargin={60}
              tick={{
                fill: "#333",
                fontSize: 14,
                fontWeight: "bold",
              }}
            />

            <Tooltip />
            <Legend />
            <Bar
              className="rounded-2xl"
              dataKey="sales"
              fill="#289D75"
              barSize={50}
              radius={[0, 10, 10, 0]}
            />

          </ComposedChart>
        </div>
      </div>
    </div>
  );
}

export default BestSellingBooks;

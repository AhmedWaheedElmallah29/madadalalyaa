import { MessageSquare } from "lucide-react";
import { Cell, Pie, PieChart, Tooltip, Legend } from "recharts";
import statisticActive from "../data/statisticActive";

function StatisticActive() {
  return (
    <div className="container mx-auto shadow-2xl p-9 rounded-xl mt-19">
      <div className="grid grid-cols-1 lg:grid-cols-1">
        <div className="flex items-center justify-between ">
          <div>
            <h2 className="font-bold text-2xl pb-2 ms-2">
              المقالات الأكثر تفاعلآ
            </h2>
            <p className="text-gray-2 text-lg ">
              التفاعل حسب الأعجابات والتعليقات
            </p>
          </div>

          <div>
            <div className="bg-icon-3 flex items-center justify-center px-3 py-3 ">
              <MessageSquare color="#155DFC" />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center ">
          <PieChart
            style={{
              width: "100%",
              height: "100%",
              maxWidth: "500px",
              maxHeight: "80vh",
              aspectRatio: 1,
            }}
            responsive
          >
            <Pie
              data={statisticActive}
              dataKey="number"
              nameKey="title"
              cx="50%"
              cy="50%"
              outerRadius="50%"
              stroke="white"
              label
            >
              

              {statisticActive.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={
                    ["#289D61", "#ff8042", "#e7000b", "#AF46FB", "#155DFC"][
                      index
                    ]
                  }
                />
              ))}
            </Pie>

            <Tooltip />
            <Legend  />
          </PieChart>
        </div>
      </div>
    </div>
  );
}

export default StatisticActive;

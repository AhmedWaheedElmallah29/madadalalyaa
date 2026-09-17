
import { useState } from "react";
import { ChartColumn, ChevronDown, ChevronUp } from "lucide-react";

function Statistic() {
  const periods = [
    {
      id: 1,
      label: "سنوي",
      value: "yearly",
    },
    {
      id: 2,
      label: "شهري",
      value: "monthly",
    },
    {
      id: 3,
      label: "اسبوعي",
      value: "weekly",
    },
    {
      id: 4,
      label: "يومي",
      value: "daily",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [currentPeriod, setCurrentPeriod] = useState(periods[0]);

  function handlePeriod(period) {
    setCurrentPeriod(period);
    setIsOpen(false);
  }

  return (
    <div className="flex items-center justify-between">
      {/* Start Basic */}
      <div className="flex gap-3">
        <div className="bg-gray-1 flex items-center justify-center px-3 rounded-lg">
          <ChartColumn size={30} color="#289D61" />
        </div>

        <div>
          <h2 className="text-2xl">التقارير والإحصائيات</h2>

          <p className="text-sm font-bold text-gray-2">
            تحليل شامل لأداء الموقع والمبيعات
          </p>
        </div>
      </div>

      {/* End Basic */}

      {/* Start Statistic */}
      <div className="relative">
        {/* Selected Period */}
        <div
          className="border border-gray-2 rounded-tl-lg rounded-tr-lg text-center w-20 cursor-pointer"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <div className="flex items-center justify-center gap-1 py-2">
            <p>{currentPeriod.label}</p>

            {isOpen ? (
              <ChevronUp size={18} />
            ) : (
              <ChevronDown size={18} />
            )}
          </div>
        </div>

        {/* Dropdown */}
        <ul
          className={`
            absolute left-0 right-0 bg-white
            border border-gray-2
            text-center
            transition-all duration-300
            ${
              isOpen
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }
          `}
        >
          {periods.map((period) => (
            <li
              key={period.id}
              className="leading-loose cursor-pointer hover:bg-gray-1"
              onClick={() => handlePeriod(period)}
            >
              {period.label}
            </li>
          ))}
        </ul>
      </div>

      {/* End Statistic */}
    </div>
  );
}

export default Statistic;


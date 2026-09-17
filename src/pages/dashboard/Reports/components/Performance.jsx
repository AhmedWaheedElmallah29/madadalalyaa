import { ArrowUp,  Sparkle } from "lucide-react";

const Performance = () => {
  return (
    <div className="contianer mx-auto">
      <div className="flex items-center justify-between mt-19">
        <div>
          <h2 className="text-lg font-bold">ملخص الأداء</h2>
          <p className="text-gray-2"> رؤي وتحليلات الفترة الحالية </p>
        </div>

        <div className="flex items-center justify-center px-2 py-2 rounded-full bg-amber-200">
          <Sparkle color="#cbb106" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-1">
        <div className="flex items-center justify-between mt-9 bg-card-1 p-6 rounded-lg">
          <div>
            <h2 className="text-gray-2 font-bold py-2">اجمالي الأيردات</h2>
            <p>51,150 ر.س</p>
          </div>
          <div className="flex items-center justify-center bg-icon-1 px-2 py-1 rounded-full">
            <ArrowUp color="#289D75" size={20} />
            <p className="text-sm text-main">18.5%</p>
          </div>
        </div>

        <div className="flex flex-col leading-loose my-9 ms-19 text-gray-2 font-bold">
          <h2>أعلي نسبة نمو في المستخدمين منذ 6 أشهر</h2>
          <h2>كتاب البؤساء يتصدر قائمة المبيعات</h2>
          <h2>زيادة 8.7% في اضافة الكتب المفضلة</h2>
          <h2>المقالات التعليمية تحقق اعلي تفاعل</h2>
        </div>
      </div>
    </div>
  );
};

export default Performance;

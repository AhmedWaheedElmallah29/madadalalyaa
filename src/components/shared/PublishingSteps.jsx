const PublishingSteps = () => {
  const steps = [
    {
      number: 1,
      title: "الاطلاع",
      description: "الاطلاع على فكرة النشر وشروطه",
      color: "#289D61",
      textColor: "white",
    },
    {
      number: 2,
      title: "التجهيز",
      description: "تجهيز العمل الأدبي بصيغته النهائية",
      color: "#CFF3E0",
      textColor: "#1F2937",
    },
    {
      number: 3,
      title: "التعبئة",
      description: "تعبئة نموذج طلب النشر عبر Google Form",
      color: "#E4FFF1",
      textColor: "#1F2937",
    },
    {
      number: 4,
      title: "الانتظار",
      description: "انتظار رد الدار بعد مراجعة العمل",
      color: "#F3FFF9",
      textColor: "#1F2937",
    },
  ];

  return (
    <section className="my-14 lg:my-20 text-center w-full">
      {/* Title */}
      <h2 className="text-2xl sm:text-3xl font-bold mb-12 lg:mb-16">
        كيف يتم التقديم ؟
      </h2>

      <div className="relative w-full">
        {/* الخط - يظهر على الشاشات الكبيرة فقط */}
        <div
          className="
            absolute
            hidden
            lg:block
            top-7
            left-[10%]
            right-[10%]
            h-[2px]
            bg-[repeating-linear-gradient(to_right,#B8F2D5_0px,#B8F2D5_18px,transparent_18px,transparent_32px)]
            z-0
          "
        ></div>

        {/* Steps */}
        <div
          className="
            relative
            flex
            flex-col
            gap-10
            lg:flex-row-reverse
            lg:gap-0
          "
        >
          {steps.map((step) => (
            <div
              key={step.number}
              className="
                flex-1
                flex
                flex-col
                items-center
                min-w-0
              "
            >
              {/* Circle */}
              <div
                className="
                  relative
                  z-10
                  w-14
                  h-14
                  shrink-0
                  rounded-full
                  flex
                  items-center
                  justify-center
                  text-2xl
                  font-bold
                "
                style={{
                  backgroundColor: step.color,
                  color: step.textColor,
                }}
              >
                {step.number}
              </div>

              {/* Title */}
              <h3 className="mt-5 text-lg font-bold">{step.title}</h3>

              {/* Description */}
              <p className="mt-2 text-gray-500 max-w-[220px] leading-7 break-words">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PublishingSteps;

function AnalysisHandleData({ analysis }) {
  return (
    <div className="">
      <div className="grid lg:grid-cols-2 gap-3 gap-y-14 my-9 items-center">
        {analysis.map((item) => {
          const Icons1 = item.icon;
          const Icons2 = item.icon2;

          return (
            <div
              key={item.id}
              className={`${item.bgCard} p-4 rounded-xl hover:-translate-y-1.5  transition-all duration-400 cursor-pointer`}
            >
              <div className={`flex items-center justify-between`}>
                <div
                  style={{ backgroundColor: item.bgIcons }}
                  className={` flex items-center justify-center px-3 py-3 rounded-full`}
                >
                  <Icons1 style={{ color: item.colorIcon }} />
                </div>

                <div
                  style={{
                    backgroundColor: item.bgIcons,
                    color: item.colorIcon,
                  }}
                  className={` flex items-center gap-3  bg-${item.bgIcons} px-3 py-1 rounded-full font-medium`}
                >
                  <Icons2 size="15" />
                  <p>+{item?.target}%</p>
                </div>
              </div>

              <div className="leading-loose  my-3">
                <p className="font-bold py-1.5 text-gray-2">{item?.title}</p>
                <p className="font-bold text-2xl">{item?.value}</p>
                <p className="text-gray-2 font-medium">{item?.details}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AnalysisHandleData;

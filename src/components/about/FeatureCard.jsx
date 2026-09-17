import courseImage from "../../assets/about/Frame 1984080245 (2).svg";
import printImage from "../../assets/about/Frame 1984080245 (1).svg";
import designImage from "../../assets/about/Frame 1984080245.svg";
import editImage from "../../assets/about/Frame 1984080245 (3).svg";

const assetMap = {
  course: courseImage,
  print: printImage,
  design: designImage,
  edit: editImage,
};

const FeatureCard = ({ type, title, description }) => {
  const visual = assetMap[type];

  return (
    <div className="rounded-xl border border-gray-200 bg-white px-6 py-8 text-center shadow-[0_8px_20px_rgba(0,0,0,0.06)]">
      <div className="mx-auto mb-5 h-24 w-24 overflow-hidden">
        <img src={visual} alt={title} className="h-full w-full object-contain" />
      </div>
      <h3 className="mb-3 text-xl font-bold text-gray-800">{title}</h3>
      <p className="text-sm font-semibold leading-7 text-gray-500">{description}</p>
    </div>
  );
};

export default FeatureCard;

import { LuLayers, LuFolder, LuBookOpen } from 'react-icons/lu';

const StatCard = ({ title, value, type }) => {
  const styles = {
    total: {
      bg: 'bg-emerald-50',
      text: 'text-emerald-500',
      icon: LuLayers,
      border: 'border-emerald-100/50'
    },
    main: {
      bg: 'bg-blue-50',
      text: 'text-blue-500',
      icon: LuFolder,
      border: 'border-blue-100/50'
    },
    books: {
      bg: 'bg-purple-50',
      text: 'text-purple-500',
      icon: LuBookOpen,
      border: 'border-purple-100/50'
    }
  };

  const currentStyle = styles[type];
  const Icon = currentStyle.icon;

  return (
    <div className={`bg-white rounded-2xl p-5 shadow-sm border ${currentStyle.border} flex items-center justify-between`}>
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${currentStyle.bg} ${currentStyle.text}`}>
        <Icon className="text-2xl" />
      </div>
      <div className="text-left">
        <p className="text-gray-500 text-sm font-medium mb-1">{title}</p>
        <h3 className="text-2xl font-bold text-gray-800">{value}</h3>
      </div>
    </div>
  );
};

export default StatCard;

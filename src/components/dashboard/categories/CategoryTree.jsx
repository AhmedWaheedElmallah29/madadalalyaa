import CategoryNode from './CategoryNode';

const mockCategories = [
  {
    id: 1,
    name: 'روايات وقصص',
    booksCount: 245,
    subCount: 3,
    expanded: true,
    children: [
      {
        id: 11,
        name: 'روايات عربية',
        booksCount: 120,
        subCount: 2,
        expanded: true,
        children: [
          {
            id: 111,
            name: 'روايات كلاسيكية',
            booksCount: 45,
            expanded: false
          },
          {
            id: 112,
            name: 'روايات معاصرة',
            booksCount: 75,
            expanded: false
          }
        ]
      },
      {
        id: 12,
        name: 'روايات مترجمة',
        booksCount: 89,
        subCount: 2,
        expanded: false
      },
      {
        id: 13,
        name: 'قصص قصيرة',
        booksCount: 36,
        expanded: false
      }
    ]
  },
  {
    id: 2,
    name: 'تطوير الذات',
    booksCount: 178,
    subCount: 2,
    expanded: false
  },
  {
    id: 3,
    name: 'علوم وتكنولوجيا',
    booksCount: 134,
    subCount: 2,
    expanded: false
  },
  {
    id: 4,
    name: 'تاريخ وسياسة',
    booksCount: 156,
    subCount: 2,
    expanded: false
  },
  {
    id: 5,
    name: 'فنون وثقافة',
    booksCount: 98,
    expanded: false
  }
];

const CategoryTree = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      {mockCategories.map((category, index) => (
        <CategoryNode 
          key={category.id} 
          category={{...category, isLast: index === mockCategories.length - 1}} 
        />
      ))}
    </div>
  );
};

export default CategoryTree;

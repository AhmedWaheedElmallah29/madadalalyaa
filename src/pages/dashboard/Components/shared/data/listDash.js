import {
  SquareStack,
  BookOpenCheck,
  Users,
  NotebookText,
  Bell,
  MessageSquare,
  ListSortAscending,
  ChartColumnIncreasing,
} from "lucide-react";

const listDash = [
  {
    id: 0,
    title: "لوحة التحكم",
    path: "/dashboard",
    icon: SquareStack,
  },

  {
    id: 1,
    title: "الكتب",
    path: "/dashboard/books",
    icon: BookOpenCheck,
  },

  {
    id: 2,
    title: "المستخدمين",
    path: "/dashboard/users",
    icon: Users,
  },

  {
    id: 3,
    title: "المدونة",
    path: "/dashboard/blogger",
    icon: NotebookText,
  },

  {
    id: 4,
    title: "الأشعارات",
    path: "/dashboard/notification",
    icon: Bell,
  },

  {
    id: 5,
    title: "التعليقات",
    path: "/dashboard/comment",
    icon: MessageSquare,
  },

  {
    id: 6,
    title: "التصنيفات",
    path: "/dashboard/categories",
    icon: ListSortAscending,
  },

  {
    id: 7,
    title: "التقارير والأحصائيات",
    path: "/dashboard/reports",
    icon: ChartColumnIncreasing,
  },
];

export default listDash;

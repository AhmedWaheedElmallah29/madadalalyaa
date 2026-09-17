import {
  ShoppingCart,
  TrendingUp,
  HeartPlus,
  NotepadText,
  Users,
} from "lucide-react";

const analysis = [
  {
    id: 0,
    icon: ShoppingCart,
    target: 14.3,
    icon2: TrendingUp,
    title: "إجمالي المبيعات",
    value: 1023,
    details: "كتاب مباع هذا الشهر",
    bgCard: "bg-card-1",
    bgIcons: "#DCFCE7",
    colorIcon: "#00A63E"
  },

  {
    id: 1,
    icon: HeartPlus,
    target: 8.7,
    icon2: TrendingUp,
    title: "الكتب المفضلة",
    value: 1023,
    details: "إضافة للمفضلة",
    bgCard: "bg-card-2",
    bgIcons: "#FFE2E2",
    colorIcon: "#e7000b"
  },
  {
    id: 2,
    icon: NotepadText,
    target: 12.5,
    icon2: TrendingUp,
    title: "تفاعيل المقالات",
    value: 1680,
    details: "إعجاب وتعليق",
    bgCard: "bg-card-1",
    bgIcons: "#DBEAFE",
    colorIcon: "#155DFC"
  },
  {
    id: 3,
    icon: Users,
    target: 14.3,
    icon2: TrendingUp,
    title: "نمو المستخدمين",
    value: 1120,
    details: "مستخدم نشط",
    bgCard: "bg-card-2",
    bgIcons: "#F3E8FF",
    colorIcon: "#AF46FB"
  },
];

export default analysis;

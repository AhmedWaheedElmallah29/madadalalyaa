import { useState } from "react";
import {
    CheckCircle2,
    EyeOff,
    Trash2,
    BookOpen,
    FileText,
    Clock3,
} from "lucide-react";

const commentsData = [
    {
        id: 1,
        name: "أحمد محمد",
        time: "منذ 9 ساعة",
        status: "approved",
        comment:
            "كتاب رائع جدًا! استفدت كثيرًا من الفصل الثالث خصوصًا الأفكار حول التطوير الشخصي. أنصح الجميع بقراءته.",
        type: "book",
        title: "العادات السبع للناس الأكثر فعالية",
    },
    {
        id: 2,
        name: "سارة عبدالله",
        time: "منذ 10 ساعة",
        status: "pending",
        comment:
            "مقالة ممتازة! شرح واضح ومفصل. هل يمكن إضافة المزيد من الأمثلة العملية في المقالات القادمة؟",
        type: "article",
        title: "إعلان الفائزين في مسابقة أفضل قارئ",
    },
    {
        id: 3,
        name: "نورة الشمري",
        time: "منذ 11 ساعة",
        status: "approved",
        comment:
            "مبادرة رائعة! تحمست جدًا لمشاركتكم في النسخة القادمة من المسابقة.",
        type: "article",
        title: "إعلان الفائزين في مسابقة أفضل قارئ",
    },
    {
        id: 4,
        name: "خالد العتيبي",
        time: "منذ 12 ساعة",
        status: "approved",
        comment:
            "الكتاب جيد لكن الترجمة ضعيفة في بعض المواضع، يحتاج إلى مراجعة.",
        type: "book",
        title: "قواعد العشق الأربعون",
    },
    {
        id: 5,
        name: "عبدالرحمن السعيد",
        time: "منذ يوم",
        status: "approved",
        comment:
            "من أفضل الكتب التي قرأتها هذا العام. أسلوب الكاتب سلس وممتع.",
        type: "book",
        title: "قواعد العشق الأربعون",
    },
    {
        id: 6,
        name: "يوسف المالكي",
        time: "منذ يومين",
        status: "hidden",
        comment:
            "شكرًا على هذه المقالة المفيدة، في انتظار المزيد من المحتوى المميز.",
        type: "article",
        title: "حضور العاطفة الجديدة من رواية قواعد العشق",
    },
    {
        id: 7,
        name: "ريم الغامدي",
        time: "منذ يومين",
        status: "pending",
        comment:
            "متى سيتوفر الكتاب بنسخة إلكترونية؟ أفضل القراءة على الجهاز اللوحي.",
        type: "book",
        title: "سلسلة الكتب الإلكترونية",
    },
    {
        id: 8,
        name: "محمد القحطاني",
        time: "منذ 3 أيام",
        status: "approved",
        comment:
            "تجربة جميلة جدًا وأنصح كل محبي القراءة بتجربة هذا الكتاب.",
        type: "book",
        title: "أفضل الكتب لهذا الشهر",
    },
    {
        id: 9,
        name: "فاطمة علي",
        time: "منذ 3 أيام",
        status: "pending",
        comment:
            "موضوع مفيد جدًا، وأتمنى أن يتم نشر المزيد من المقالات المشابهة.",
        type: "article",
        title: "كيف تختار كتابك القادم؟",
    },
    {
        id: 10,
        name: "عبدالله حسن",
        time: "منذ 4 أيام",
        status: "approved",
        comment:
            "استمتعت جدًا بقراءة الكتاب، وأنصح به لكل شخص مهتم بتطوير نفسه.",
        type: "book",
        title: "العادات السبع للناس الأكثر فعالية",
    },
    {
        id: 11,
        name: "مريم خالد",
        time: "منذ 4 أيام",
        status: "pending",
        comment:
            "هل يمكن إضافة مراجعات أكثر للكتب الجديدة الموجودة في المكتبة؟",
        type: "article",
        title: "أفضل الكتب الجديدة لهذا الشهر",
    },
    {
        id: 12,
        name: "سلمان أحمد",
        time: "منذ 5 أيام",
        status: "hidden",
        comment:
            "أتمنى توفير نسخة صوتية من الكتاب، ستكون إضافة ممتازة.",
        type: "book",
        title: "قواعد العشق الأربعون",
    },
    {
        id: 13,
        name: "هند محمد",
        time: "منذ 5 أيام",
        status: "approved",
        comment:
            "المحتوى رائع جدًا وطريقة عرض المعلومات سهلة وواضحة.",
        type: "article",
        title: "أهمية القراءة في تطوير المعرفة",
    },
    {
        id: 14,
        name: "ماجد العتيبي",
        time: "منذ 6 أيام",
        status: "pending",
        comment:
            "كتاب جميل جدًا، وأحببت طريقة الكاتب في سرد الأحداث.",
        type: "book",
        title: "رحلة البحث عن الذات",
    },
    {
        id: 15,
        name: "أمل يوسف",
        time: "منذ أسبوع",
        status: "approved",
        comment:
            "شكرًا لكم على هذا المحتوى المميز، استفدت منه كثيرًا.",
        type: "article",
        title: "نصائح للقراء الجدد",
    },
    {
        id: 16,
        name: "طارق إبراهيم",
        time: "منذ أسبوع",
        status: "pending",
        comment:
            "هل يوجد موعد محدد لإضافة الكتب الجديدة إلى الموقع؟",
        type: "book",
        title: "الكتب الجديدة",
    },
];

function Comments() {
    const [comments, setComments] = useState(commentsData);
    const [currentPage, setCurrentPage] = useState(1);

    const commentsPerPage = 8;

    const totalPages = Math.ceil(
        comments.length / commentsPerPage
    );

    const startIndex =
        (currentPage - 1) * commentsPerPage;

    const currentComments = comments.slice(
        startIndex,
        startIndex + commentsPerPage
    );

    const approveComment = (id) => {
        setComments((prev) =>
            prev.map((comment) =>
                comment.id === id
                    ? { ...comment, status: "approved" }
                    : comment
            )
        );
    };

    const hideComment = (id) => {
        setComments((prev) =>
            prev.map((comment) =>
                comment.id === id
                    ? { ...comment, status: "hidden" }
                    : comment
            )
        );
    };

    const deleteComment = (id) => {
        setComments((prev) =>
            prev.filter((comment) => comment.id !== id)
        );

        if (
            currentPage > 1 &&
            currentComments.length === 1
        ) {
            setCurrentPage((page) => page - 1);
        }
    };

    return (
        <div
            className="min-h-screen bg-white p-4 sm:p-6 lg:p-8"
            dir="rtl"
        >
            <div className="mx-auto max-w-6xl">

                {/* Header */}
                <div className="mb-6 text-right">
                    <h1 className="text-2xl font-bold text-gray-800 sm:text-3xl">
                        إدارة التعليقات
                    </h1>

                    <p className="mt-2 text-sm text-gray-400 sm:text-base">
                        مراجعة والموافقة على تعليقات المستخدمين
                    </p>
                </div>

                {/* Comments */}
                <div className="space-y-4">

                    {currentComments.map((comment) => (

                        <div
                            key={comment.id}
                            className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm sm:p-5"
                        >

                            {/* User + Status */}
                            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">

                                {/* User */}
                                <div className="flex items-center gap-3">

                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gray-200 text-lg font-bold text-gray-500">
                                        {comment.name.charAt(0)}
                                    </div>

                                    <div>
                                        <h3 className="font-semibold text-gray-700">
                                            {comment.name}
                                        </h3>

                                        <div className="mt-1 flex items-center gap-1 text-xs text-gray-400">
                                            <Clock3 size={13} />
                                            <span>{comment.time}</span>
                                        </div>
                                    </div>

                                </div>

                                {/* Status */}
                                <div>

                                    {comment.status === "approved" && (
                                        <span className="inline-flex items-center gap-1 rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-600">
                                            <CheckCircle2 size={14} />
                                            موافق عليه
                                        </span>
                                    )}

                                    {comment.status === "pending" && (
                                        <span className="inline-flex items-center gap-1 rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-orange-600">
                                            <Clock3 size={14} />
                                            قيد المراجعة
                                        </span>
                                    )}

                                    {comment.status === "hidden" && (
                                        <span className="inline-flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-500">
                                            <EyeOff size={14} />
                                            مخفي
                                        </span>
                                    )}

                                </div>

                            </div>

                            {/* Comment */}
                            <p className="mt-5 text-sm leading-7 text-gray-500">
                                {comment.comment}
                            </p>

                            {/* Book / Article */}
                            <div className="mt-4 rounded-lg bg-gray-50 p-4">

                                <p className="mb-1 text-xs text-gray-400">
                                    التعليق على {comment.type === "book" ? "كتاب" : "مقالة"}
                                </p>

                                <div className="flex items-center gap-2">

                                    {comment.type === "book" ? (
                                        <BookOpen
                                            size={18}
                                            className="shrink-0 text-[#289D61]"
                                        />
                                    ) : (
                                        <FileText
                                            size={18}
                                            className="shrink-0 text-blue-500"
                                        />
                                    )}

                                    <p className="text-sm font-medium text-gray-600">
                                        {comment.title}
                                    </p>

                                </div>

                            </div>

                            {/* Actions */}
                            <div className="mt-4 flex flex-wrap items-center justify-start gap-2">

                                {comment.status !== "approved" && (
                                    <button
                                        onClick={() =>
                                            approveComment(comment.id)
                                        }
                                        className="inline-flex items-center gap-1.5 rounded-lg bg-[#289D61] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#218b54]"
                                    >
                                        <CheckCircle2 size={16} />
                                        الموافقة
                                    </button>
                                )}

                                {comment.status !== "hidden" && (
                                    <button
                                        onClick={() =>
                                            hideComment(comment.id)
                                        }
                                        className="inline-flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm text-orange-500 transition hover:bg-orange-50"
                                    >
                                        <EyeOff size={16} />
                                        إخفاء
                                    </button>
                                )}

                                <button
                                    onClick={() =>
                                        deleteComment(comment.id)
                                    }
                                    className="inline-flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm text-red-500 transition hover:bg-red-50"
                                >
                                    <Trash2 size={16} />
                                    حذف
                                </button>

                            </div>

                        </div>

                    ))}

                </div>

                {/* Pagination */}
                <div className="mt-6 flex flex-col items-center justify-between gap-4 sm:flex-row">

                    <p className="text-sm text-gray-400">
                        عرض{" "}
                        {comments.length === 0
                            ? 0
                            : startIndex + 1}{" "}
                        -{" "}
                        {Math.min(
                            startIndex + commentsPerPage,
                            comments.length
                        )}{" "}
                        من {comments.length} نتيجة
                    </p>

                    <div className="flex items-center gap-2">

                        <button
                            disabled={currentPage === 1}
                            onClick={() =>
                                setCurrentPage((page) => page - 1)
                            }
                            className="rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-500 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40"
                        >
                            السابق
                        </button>

                        {Array.from(
                            { length: totalPages },
                            (_, index) => index + 1
                        ).map((page) => (

                            <button
                                key={page}
                                onClick={() => setCurrentPage(page)}
                                className={`h-9 w-9 rounded-lg border text-sm transition ${currentPage === page
                                        ? "border-[#289D61] bg-[#289D61] text-white"
                                        : "border-gray-200 bg-white text-gray-600 hover:bg-gray-50"
                                    }`}
                            >
                                {page}
                            </button>

                        ))}

                        <button
                            disabled={currentPage === totalPages}
                            onClick={() =>
                                setCurrentPage((page) => page + 1)
                            }
                            className="rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-500 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40"
                        >
                            التالي
                        </button>

                    </div>

                </div>

            </div>
        </div>
    );
}

export default Comments;
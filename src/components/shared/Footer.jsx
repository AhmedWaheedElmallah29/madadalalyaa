import {
  LuMail as Mail,
  LuPhone as Phone,
  LuLinkedin as Linkedin,
  LuTwitter as Twitter,
  LuInstagram as Instagram,
  LuFacebook as Facebook,
} from "react-icons/lu";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#289D61] text-white relative w-full">
      <div className="flex flex-col md:flex-row justify-between items-start max-w-[1100px] mx-auto px-5 py-8 gap-8 md:gap-10">
        {/* Right Column: About */}
        <div className="flex flex-col items-start gap-3 flex-1">
          <h3 className="font-semibold text-[18px] leading-[28px] text-white m-0">
            دار مداد العلياء
          </h3>
          <p className="font-normal text-[14px] leading-[23px] text-white/90 m-0">
            نؤمن بقوة الكلمة ونسعى لدعم الأدب العربي الأصيل ورعاية المواهب
            الجديدة.
          </p>
        </div>

        {/* Middle Column: Quick Links */}
        <div className="flex flex-col items-start gap-3 flex-1">
          <h3 className="font-semibold text-[18px] leading-[28px] text-white m-0">
            روابط سريعة
          </h3>
          <div className="flex flex-row items-center flex-wrap gap-2">
            <Link
              to="/"
              className="font-normal text-[14px] leading-[20px] text-white/90 no-underline transition-colors duration-200 hover:text-white"
            >
              الرئيسية
            </Link>
            <span className="text-white/50 text-[14px]">|</span>
            <Link
              to="/new"
              className="font-normal text-[14px] leading-[20px] text-white/90 no-underline transition-colors duration-200 hover:text-white"
            >
              صدر حديثا
            </Link>
            <span className="text-white/50 text-[14px]">|</span>
            <Link
              to="/competition"
              className="font-normal text-[14px] leading-[20px] text-white/90 no-underline transition-colors duration-200 hover:text-white"
            >
              المسابقة
            </Link>
            <span className="text-white/50 text-[14px]">|</span>
            <Link
              to="/with-you"
              className="font-normal text-[14px] leading-[20px] text-white/90 no-underline transition-colors duration-200 hover:text-white"
            >
              معكم
            </Link>
          </div>
          <div className="flex flex-row items-center flex-wrap gap-2">
            <Link
              to="/publish"
              className="font-normal text-[14px] leading-[20px] text-white/90 no-underline transition-colors duration-200 hover:text-white"
            >
              طلب نشر
            </Link>
            <span className="text-white/50 text-[14px]">|</span>
            <Link
              to="/blog"
              className="font-normal text-[14px] leading-[20px] text-white/90 no-underline transition-colors duration-200 hover:text-white"
            >
              المدونة
            </Link>
            <span className="text-white/50 text-[14px]">|</span>
            <Link
              to="/contact"
              className="font-normal text-[14px] leading-[20px] text-white/90 no-underline transition-colors duration-200 hover:text-white"
            >
              تواصل معنا
            </Link>
          </div>
        </div>

        {/* Left Column: Contact Us */}
        <div className="flex flex-col items-start gap-3 flex-1">
          <h3 className="font-semibold text-[18px] leading-[28px] text-white m-0">
            تواصل معنا
          </h3>

          <div className="flex flex-row items-center gap-2">
            <span className="w-4 h-4 flex justify-center items-center text-white/90">
              <Mail size={16} />
            </span>
            <a
              href="mailto:info@madadalalyaa.com"
              className="font-normal text-[14px] leading-[20px] text-white/90 no-underline transition-colors duration-200 hover:text-white"
            >
              info@madadalalyaa.com
            </a>
          </div>

          <div className="flex flex-row items-center gap-2">
            <span className="w-4 h-4 flex justify-center items-center text-white/90">
              <Phone size={16} />
            </span>
            <a
              href="tel:+201234567890"
              className="font-normal text-[14px] leading-[20px] text-white/90 no-underline transition-colors duration-200 hover:text-white"
            >
              +20 123 456 7890
            </a>
          </div>

          <div className="flex flex-row items-start gap-3 mt-2">
            <a
              href="#"
              className="w-5 h-5 text-white transition-transform duration-200 flex justify-center items-center hover:-translate-y-0.5"
              aria-label="LinkedIn"
            >
              <Facebook size={20} />
            </a>
            <a
              href="#"
              className="w-5 h-5 text-white transition-transform duration-200 flex justify-center items-center hover:-translate-y-0.5"
              aria-label="Twitter"
            >
              <Instagram size={20} />
            </a>
            <a
              href="#"
              className="w-5 h-5 text-white transition-transform duration-200 flex justify-center items-center hover:-translate-y-0.5"
              aria-label="Instagram"
            >
              <Twitter size={20} />
            </a>
            <a
              href="#"
              className="w-5 h-5 text-white transition-transform duration-200 flex justify-center items-center hover:-translate-y-0.5"
              aria-label="Facebook"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20 flex justify-center items-center px-6 pt-[17px] pb-4 max-w-[980px] mx-auto">
        <p className="font-normal text-[14px] leading-[20px] text-white/80 m-0 text-center">
          © جميع الحقوق محفوظة – دار مداد العلياء للنشر 2026
        </p>
      </div>
    </footer>
  );
};

export default Footer;

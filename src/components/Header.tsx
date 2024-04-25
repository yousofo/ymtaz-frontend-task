import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  return (
    <header className="flex justify-between items-center  text-[#2D4768]">
      <RxHamburgerMenu className="text-4xl"/>
      <nav>
        <ul className="flex gap-8 font-bold text-base lg:text-lg">
          <li><Link href="/">سياسة الخصوصية</Link></li>
          <li><Link href="/">أرقام التشغيل</Link></li>
          <li><Link href="/">الدعم الفني </Link></li>
          <li><Link href="/">اتصل بنا</Link></li>
          <li><Link href="/">من نحن</Link></li>
          <li><Link href="/">الرئيسية</Link></li>
        </ul>
      </nav>
      <Link href="/">
        <img src="/assets/logopng 2.png" alt="" />
      </Link>
    </header>
  )
}

export default Header
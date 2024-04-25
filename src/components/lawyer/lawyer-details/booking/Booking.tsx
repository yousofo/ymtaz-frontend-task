"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Booking = ({
  children,
  // data,
  lawyerId,
}: {
  children: React.ReactNode;
  // data?: ILawyerService[];
  lawyerId: number;
}) => {
  const pathName = usePathname();
  return (
    <div className="max-w-[575px] bg-white h-max w-2/5 rounded-xl p-4 overflow-hidden flex flex-col gap-8">
      <h2 className="text-3xl title-color font-bold">معلومات الحجز</h2>
      <div className="lawyer-booking secondary-color flex justify-center gap-2 font-bold">
        <Link
          href={`/lawyer/${lawyerId}`}
          className={`${
            pathName == `/lawyer/${lawyerId}` && "active"
          } py-2 px-4`}
        >
          أسعار الخدمات
        </Link>
        <Link
          href={`/lawyer/${lawyerId}/work-times`}
          className={`${
            pathName == `/lawyer/${lawyerId}/work-times` && "active"
          } py-2 px-4`}
        >
          أوقات العمل
        </Link>
      </div>
      {children}
    </div>
  );
};

export default Booking;

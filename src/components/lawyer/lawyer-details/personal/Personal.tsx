import { ILawyer } from '@/types/types'
import Link from 'next/link'
import React from 'react'

const Personal = ({ name, about, photo }: ILawyer) => {
  return (
    <div className='flex flex-col gap-8 bg-white p-5 rounded-xl'>
      <h2 className='title-color text-3xl font-bold'>المعلومات الشخصية</h2>
      <div className='flex gap-4 secondary-color'>
        <img src={photo} className='w-28 h-28 rounded-full' alt="" />
        <div className="info w-full flex flex-col gap-2.5">
          <h3 className='title-color text-xl font-bold'>{name}</h3>
          <div className='flex gap-2'>
            <p>{about}</p>
            <img src="/assets/crown.png" alt="" />
          </div>
          <div className='flex w-full gap-1'>
            <img src="/assets/rating.png" className='h-fit' alt="" />
            <p><span className='pe-2'>5.00</span>التقييم العام من 154 من العملاء</p>
            <Link href="#" className='text-blue-900 px-6'>اظهر التقييمات</Link>
          </div>
          <div className="review w-fit text-sm mt-2 bg-[#F9F9F9] rounded-tl-3xl rounded-br-3xl p-4 flex gap-3">
            <img src="/assets/mingcute_quote-left-fill.png" alt="" className='h-min'/>
            <div className="text flex flex-col gap-4">
              <p>تميز الاستشاري بالاحترافية والخبرة العالية في المسائل القانونية</p>
              <div className='flex justify-between items-center'>
                <img src="/assets/rating.png" className='w-20' alt="" />
                <span>Abdullah Faleh</span>
                <span>الخميس 3 فبراير 2024</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Personal
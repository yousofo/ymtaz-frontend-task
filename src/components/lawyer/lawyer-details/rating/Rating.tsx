import React from 'react'
import ReviewItem from './ReviewItem'

const Rating = () => {
  return (
    <div className='flex flex-col gap-4 '>
      <div className='bg-white p-5 rounded-t-xl'>
        <h2 className='title-color text-3xl font-bold'>تقييم العملاء:</h2>
        <div className='flex justify-between secondary-color'>
          <div className='flex flex-col gap-3 items-center'>
            <img src="/assets/rating.png" className="w-24" alt="" />
            <div className="text leading-7 text-center">
              <p>التقييم العام</p>
              <p className=''>من 154 من العملاء</p>
            </div>
          </div>
          <div className='flex flex-col gap-3 items-center'>
            <img src="/assets/rating.png" className="w-24" alt="" />
            <div className="text leading-7 text-center">
              <p>تقييم المنصة</p>
            </div>
          </div>
          <div className='flex flex-col gap-3 items-center'>
            <img src="/assets/Frame 427319779.png" className="w-12" alt="" />
            <div className="text leading-7 text-center">
              <p>تقييم الاستشاري</p>
            </div>
          </div>
        </div>
      </div>
      <ul className='flex flex-col gap-[1px] bg-[#DADADA] rounded-b-xl overflow-hidden'>
        <ReviewItem />
        <ReviewItem />
      </ul>
    </div>
  )
}

export default Rating
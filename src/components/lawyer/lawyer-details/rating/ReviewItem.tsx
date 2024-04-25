import React from 'react'

const ReviewItem = () => {
  return (
    <li className='bg-[#F5F5F5] secondary-color'>
      <div className='flex items-center justify-between bg-white p-5'>
        <div className="box flex flex-col gap-2">
          <img src="/assets/rating.png" className='w-20' alt="" />
          <h3>التقييم العام</h3>
          <p>“ استشارى ممتاز ومحترف وواعى بشكل كبير بمختلف القضايا القانونية والفقهية</p>
          <p className='text-xs mt-3'>الخميس 3 فبراير 2024</p>
        </div>
        <div className="consultant-rate flex flex-col items-center gap-1.5">
          <img src="/assets/Frame 427319780.png" className='w-12' alt="" />
          <p>تقييم الاستشاري</p>
        </div>
      </div>
    </li>
  )
}

export default ReviewItem
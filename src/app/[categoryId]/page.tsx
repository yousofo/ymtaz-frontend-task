import Provider from '@/components/query-provider/Provider'
import Category from '@/components/single-category/Category'
import React from 'react'

const page = ({ params: { categoryId } }: { params: { categoryId: number } }) => {
  return (
    <Provider>
      <main className="max-w-screen-md m-auto flex flex-col gap-6 md:gap-10 pt-[5vh]">
        <Category id={categoryId} />
      </main>
    </Provider>
  )
}

export default page
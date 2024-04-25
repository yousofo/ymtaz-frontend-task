'use client'
import React from 'react'
import DigitalGuide from '../digital-guide/DigitalGuide'
import { getCategories } from '@/api/getCategories'

const Categories = () => {
  return (
    <DigitalGuide card="category" queryFunction={getCategories}/>
  )
}

export default Categories
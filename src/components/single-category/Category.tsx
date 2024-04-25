'use client'
import React from 'react'
import DigitalGuide from '../digital-guide/DigitalGuide'
import { searchCategory } from '@/api/searchCategory'
import LawyerCard from '../lawyer/lawyer-card/LawyerCard'

const Category = ({ id }: { id: number }) => {
  return (
    <DigitalGuide card="lawyer" queryFunction={() => searchCategory(id)} />
  )
}

export default Category
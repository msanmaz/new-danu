import React from 'react'
import Report from '../common/icons/report'

const Welcome = () => {
  return (
    <>
        <div className='flex justify-between'>
        <div className='font-bold text-5xl text-white'>Hi Joe</div>
        <Button/>
        </div>

    </>
  )
}


const Button = () => {
  return (
    <button class="bg-transparent flex flex-row hover:bg-[#0F182A] text-white text-sm font-semibold py-3 px-4 border border-[#34404B] hover:border-transparent rounded-full">
  <Report/> <span className='px-1'/> Generate Report
</button>
  )
}


export default Welcome
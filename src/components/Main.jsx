import React from 'react'
import Properties from './Properties'
import Window from './Window'

export default function Main() {
  return (
    <main className='max-w-7xl mx-auto xl:w-full px-5 grid grid-cols-[25%_75%] mt-[50px]'>
        <Properties />
        <Window />
    </main>
  )
}

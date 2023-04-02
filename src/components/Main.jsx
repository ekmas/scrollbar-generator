import React from 'react'
import Properties from './Properties'
import Window from './Window'

export default function Main() {
  return (
    <main className='max-w-7xl xl:full px-5 flex justify-between mt-[50px] mx-auto'>
        <Properties />
        <Window />
    </main>
  )
}

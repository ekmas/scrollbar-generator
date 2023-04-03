import React from 'react'
import Properties from './Properties'
import Window from './Window'

export default function Main() {
  return (
    <main className='max-w-7xl mx-auto xl:w-full px-5 grid grid-cols-[25%_75%] m1100:grid-cols-[33%_66%] m800:grid-cols-[40%_60%] m700:grid-cols-[47%_53%] m600:grid-cols-[1fr] m600:w-4/5 m400:w-full mt-[50px]'>
        <Properties />
        <Window />
    </main>
  )
}

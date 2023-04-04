import React from 'react'
import Properties from './Properties'
import Window from './Window'
import Code from './Code'

export default function Main() {
  return (
    <main className='max-w-[1400px] mx-auto xl:w-full px-5 grid gap-5 grid-cols-[300px_1fr_330px] m1100:grid-cols-[300px_1fr] m700:grid-cols-[250px_1fr] m600:grid-cols-[1fr] m600:w-4/5 m500:w-full mt-[50px]'>
        <Properties />
        <Window />
        <Code />
    </main>
  )
}

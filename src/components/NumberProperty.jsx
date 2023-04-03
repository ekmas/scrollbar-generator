import React from 'react'
import useStore from '../store'

export default function NumberProperty({ text, variableName, functionName, min }) {
  let value = useStore((state) => state[`${variableName}`])
  let func = useStore((state) => state[`${functionName}`])

  return (
    <div className='flex items-center justify-between h-12'>
        <p>{text}</p>

        <div className='flex items-center'>
            <input onChange={e => func(e.target.value)} className='w-12 outline-none border border-[#797675] text-center mr-2' type="number" min={min} name={variableName} id={variableName} value={value}/>
            <p>px</p>
        </div>
    </div>
  )
}

import React from 'react'
import useStore from '../store';

export default function ColorProperty({ text, variableName, functionName }) {
  let value = useStore((state) => state[`${variableName}`])
  let func = useStore((state) => state[`${functionName}`])

  return (
    <div className='flex items-center justify-between h-12'>
        <p>{text}</p>

        <input onChange={e => func(e.target.value)} className='outline-0 bg-transparent w-10 h-8' type="color" name={variableName} id={variableName} value={value}/>
    </div>
  )
}

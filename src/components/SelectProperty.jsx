import React from 'react'
import useStore from '../store';

export default function SelectProperty({ text, variableName, functionName, options }) {
  let value = useStore((state) => state[`${variableName}`])
  let func = useStore((state) => state[`${functionName}`])

  return (
    <div className='flex items-center justify-between h-12'>
        <p>{text}</p>

        <select onChange={e => func(e.target.value)} className='outline-none border border-[#797675]' name={variableName} id={variableName}>
            {options.map(opt => {
                return(
                    <option key={opt} value={`${opt}`}>{opt}</option>
                )
            })}
        </select>
    </div>
  )
}

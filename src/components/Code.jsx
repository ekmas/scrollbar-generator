import React from 'react'
import useStore from '../store'

export default function Code() {
  let thumbColor = useStore((state) => state.thumbColor)
  let trackColor = useStore((state) => state.trackColor)
  let borderColor = useStore((state) => state.borderColor)
  let width = useStore((state) => state.width)
  let borderRadius = useStore((state) => state.borderRadius)
  let borderWidth = useStore((state) => state.borderWidth)
  let borderStyle = useStore((state) => state.borderStyle)
  let firefoxWidth = useStore((state) => state.firefoxWidth)

  let code = 

`/* Firefox */
*{
    scrollbar-width: ${firefoxWidth};
    scrollbar-color: ${thumbColor} ${trackColor};
}

/* Other browsers */
*::-webkit-scrollbar{
    width: ${width}px;
}

*::-webkit-scrollbar-track{
    background: ${trackColor};
}

*::-webkit-scrollbar-thumb{
    background-color: ${thumbColor};
    border-radius: ${borderRadius}px;
    border: ${borderWidth}px ${borderStyle} ${borderColor};
}`

  let handleButton = () => {
    navigator.clipboard.writeText(code)

    alert('Copied to clipboard')
  }

    return (
        <div autoFocus className='bg-[#ffffff] p-5 border-2 border-black rounded m1100:col-start-1 m1100:col-end-3 m600:col-end-2'>
            <h2 className='font-medium text-xl text-center'>CSS</h2>

            <div className='mt-2'>
                <code className='text-sm m400:text-[10px]'>
                    <pre>{code}</pre>
                </code>
            </div>
            <button onClick={handleButton} className='hover:bg-white hover:text-black transition ease-linear text-center border-2 px-5 py-1 mt-2 rounded-lg bg-black text-white border-black mx-auto block'>Copy</button>
        </div>
    )
}
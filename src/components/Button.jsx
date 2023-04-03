import React from 'react'
import useStore from '../store'

export default function Button() {
  let thumbColor = useStore((state) => state.thumbColor)
  let trackColor = useStore((state) => state.trackColor)
  let borderColor = useStore((state) => state.borderColor)
  let width = useStore((state) => state.width)
  let borderRadius = useStore((state) => state.borderRadius)
  let borderWidth = useStore((state) => state.borderWidth)
  let borderStyle = useStore((state) => state.borderStyle)
  let firefoxWidth = useStore((state) => state.firefoxWidth)

  let handleClick = () => {
    navigator.clipboard.writeText(`
/* Firefox */

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
    )

    alert('Copied to clipboard')
  }

  return (
    <button onClick={handleClick} className='hover:bg-white hover:text-black transition ease-linear text-center border-2 px-5 py-1 mt-2 rounded-lg bg-black text-white border-black mx-auto block'>Copy CSS</button>
  )
}

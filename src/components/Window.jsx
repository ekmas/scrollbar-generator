import React from 'react'
import useStore from '../store'

export default function Window() {
  let thumbColor = useStore((state) => state.thumbColor)
  let trackColor = useStore((state) => state.trackColor)
  let borderColor = useStore((state) => state.borderColor)
  let width = useStore((state) => state.width)
  let borderRadius = useStore((state) => state.borderRadius)
  let borderWidth = useStore((state) => state.borderWidth)
  let borderStyle = useStore((state) => state.borderStyle)
  let firefoxWidth = useStore((state) => state.firefoxWidth)

  return (
    <>
      <style>
        {`
          #window{
            scrollbar-width: ${firefoxWidth};
            scrollbar-color: ${thumbColor} ${trackColor};
          }

          #window::-webkit-scrollbar{
            width: ${width}px;
          }

          #window::-webkit-scrollbar-track{
            background: ${trackColor};
          }

          #window::-webkit-scrollbar-thumb{
            background-color: ${thumbColor};
            border-radius: ${borderRadius}px;
            border: ${borderWidth}px ${borderStyle} ${borderColor};
          }
        `}
      </style>
      <div id='window' className='bg-[#ffffff] p-5 rounded h-[524px] overflow-y-scroll border-2 border-black'>
          <h2 className='font-medium text-xl'>Scroll!</h2>

          <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus veniam deserunt dolorem necessitatibus at eligendi error accusantium modi non quae minus voluptatibus in maxime mollitia, quisquam repellat repudiandae qui quidem eos debitis! Fugit eaque accusantium dolore saepe molestias ipsam quos non adipisci autem debitis sunt, suscipit maiores a temporibus officiis?</p>
          <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus veniam deserunt dolorem necessitatibus at eligendi error accusantium modi non quae minus voluptatibus in maxime mollitia, quisquam repellat repudiandae qui quidem eos debitis! Fugit eaque accusantium dolore saepe molestias ipsam quos non adipisci autem debitis sunt, suscipit maiores a temporibus officiis?</p>
          <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus veniam deserunt dolorem necessitatibus at eligendi error accusantium modi non quae minus voluptatibus in maxime mollitia, quisquam repellat repudiandae qui quidem eos debitis! Fugit eaque accusantium dolore saepe molestias ipsam quos non adipisci autem debitis sunt, suscipit maiores a temporibus officiis?</p>
          <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus veniam deserunt dolorem necessitatibus at eligendi error accusantium modi non quae minus voluptatibus in maxime mollitia, quisquam repellat repudiandae qui quidem eos debitis! Fugit eaque accusantium dolore saepe molestias ipsam quos non adipisci autem debitis sunt, suscipit maiores a temporibus officiis?</p>
          <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus veniam deserunt dolorem necessitatibus at eligendi error accusantium modi non quae minus voluptatibus in maxime mollitia, quisquam repellat repudiandae qui quidem eos debitis! Fugit eaque accusantium dolore saepe molestias ipsam quos non adipisci autem debitis sunt, suscipit maiores a temporibus officiis?</p>
          <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus veniam deserunt dolorem necessitatibus at eligendi error accusantium modi non quae minus voluptatibus in maxime mollitia, quisquam repellat repudiandae qui quidem eos debitis! Fugit eaque accusantium dolore saepe molestias ipsam quos non adipisci autem debitis sunt, suscipit maiores a temporibus officiis?</p>
          <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus veniam deserunt dolorem necessitatibus at eligendi error accusantium modi non quae minus voluptatibus in maxime mollitia, quisquam repellat repudiandae qui quidem eos debitis! Fugit eaque accusantium dolore saepe molestias ipsam quos non adipisci autem debitis sunt, suscipit maiores a temporibus officiis?</p>
      </div>
    </>
  )
}

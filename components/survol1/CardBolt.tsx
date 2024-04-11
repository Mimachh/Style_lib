"use client"

import { useRef, useState } from "react"
import Bolt from "./Bolt"
import { CheckIcon, CircleStackIcon } from "@heroicons/react/24/outline"


const CardBolt = () => {

    const boldRef = useRef<HTMLElement>(null)
    const [cursor2, setCursor2] = useState({x: 0, y: 0})
    const [mouseOnCard2, setMouseOnCard2] = useState(false)

    const handleMouseMove2 = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        if(boldRef.current !== null) {
            const rect2 = boldRef.current.getBoundingClientRect()
            const x2 = e.clientX - rect2.left
            const y2 = e.clientY - rect2.top
            setCursor2({x: x2, y: y2})

        }
        
    }

  return (
    <section
    ref={boldRef}
    onMouseEnter={() => setMouseOnCard2(true)}
    onMouseLeave={() => setMouseOnCard2(false)}
    onMouseMove={(event) => handleMouseMove2(event)}
    className='w-[44rem] h-[26rem] bg-neutral-800 rounded-lg border border-neutral-600
    flex flex-row p-8 absolute justify-between stroke-[0.1] hover:stroke-[0.2]
    '
    >
        <div className='flex flex-col w-2/5 justify-between'>
            <div className='flex flex-col gap-5'>
                <CircleStackIcon className='w-14 rounded-lg bg-neutral-950/70 stroke-[#f9a825] p-2 shadow-inner'/>
                <h1 className='text-neutral-200 tracking-wide text-2xl'>Database</h1>
                <p className='-mt-2 text-neutral-500 tracking-wide'>Passez la souris sur l'icone à droite pour voir l'effet.</p>
            </div>
            <div className='flex flex-col text-neutral-200 tracking-wide'>
                <span className='flex flex-row gap-2'>
                    <CheckIcon className='w-5'/>
                    <p>Blablabla</p>
                </span>
                <span className='flex flex-row gap-2'>
                    <CheckIcon className='w-5'/>
                    <p>Blablabla</p>
                </span>
                <span className='flex flex-row gap-2'>
                    <CheckIcon className='w-5'/>
                    <p>Blablabla</p>
                </span>
            </div>
        </div>
        <div className='w-3/5 flex flex-col place-items-center'>
            <Bolt 
            mouseOnCard2={mouseOnCard2}
            cursor2={cursor2} cardRef2={boldRef}
            />
        </div>
    </section>
  )
}

export default CardBolt
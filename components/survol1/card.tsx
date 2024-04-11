"use client"
import { CheckIcon, CircleStackIcon } from '@heroicons/react/24/outline'
import Flame from './Flame'
import { useRef, useState } from 'react'
const HoverCard1 = () => {

    const ref = useRef<HTMLElement>(null)
    const [cursor, setCursor] = useState({x: 0, y: 0})
    const [mouseOnCard, setMouseOnCard] = useState(false)

    const handleMouseMove = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        if(ref.current !== null) {
            const rect = ref.current.getBoundingClientRect()
            const x = e.clientX - rect.left
            const y = e.clientY - rect.top
            setCursor({x, y})
        }
        
    }

  return (
    <section
    ref={ref}
    onMouseEnter={() => setMouseOnCard(true)}
    onMouseLeave={() => setMouseOnCard(false)}
    onMouseMove={(event) => handleMouseMove(event)}
    className='w-[44rem] h-[26rem] bg-neutral-800 rounded-lg border border-neutral-600
    flex flex-row p-8 absolute justify-between stroke-[0.1] hover:stroke-[0.2]
    '
    >
        <div className='flex flex-col w-2/5 justify-between'>
            <div className='flex flex-col gap-5'>
                <CircleStackIcon className='w-14 rounded-lg bg-neutral-950/70 stroke-emerald-500 p-2 shadow-inner'/>
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
            <Flame 
            mouseOnCard={mouseOnCard}
            cursor={cursor} cardRef={ref} />
        </div>
    </section>
  )
}

export default HoverCard1
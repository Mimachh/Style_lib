"use client"
import { useScroll, useTransform, motion } from 'framer-motion';
import Image from 'next/image'
import React, { useRef } from 'react'
import Picture1 from "../../../public/slider1/img1.jpg"
import Picture2 from "../../../public/slider1/img2.jpg"
import Picture3 from "../../../public/slider1/img3.jpg"

const page = () => {

    const container = useRef<any>();
    const { scrollYProgress } = useScroll({
      target: container,
      offset: ['start end', 'end start']
    })

  return (
    <main className="overflow-hidden">
    <div className='h-[100vh]'/>
    <div ref={container}>
      <Slide src={Picture1} direction={'left'} left={"-40%"} progress={scrollYProgress}/>
      <Slide src={Picture2} direction={'right'} left={"-25%"} progress={scrollYProgress}/>
      <Slide src={Picture3} direction={'left'}  left={"-75%"} progress={scrollYProgress}/>
    </div>
    <div className='h-[100vh]' />
  </main>
  )
  
}


export default page

const Slide = (props) => {
    const direction = props.direction == 'left' ? -1 : 1;
    const translateX = useTransform(props.progress, [0, 1], [150 * direction, -150 * direction])
    return (
      <motion.div style={{x: translateX, left: props.left}} className="relative flex whitespace-nowrap">
        <Phrase src={props.src}/>
        <Phrase src={props.src}/>
        <Phrase src={props.src}/>
      </motion.div>
    )
  }
  
  const Phrase = ({src}) => {
  
    return (
      <div className={'px-5 flex gap-5 items-center'}>
        <p className='text-[7.5vw]'>Front End Developer</p>
        <span className="relative h-[7.5vw] aspect-[4/2] rounded-full overflow-hidden">
          <Image style={{objectFit: "cover"}} src={src} alt="image" fill/>
        </span>
      </div>
    )
  }
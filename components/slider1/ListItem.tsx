"use client"
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'



export default function ListItem() {

    const nextRef = useRef<HTMLButtonElement>(null);
    const prevRef = useRef<HTMLButtonElement>(null);
    const carouselRef = useRef<HTMLDivElement>(null);
    const listRef = useRef<HTMLDivElement>(null);
    const thumbnailRef = useRef<HTMLDivElement>(null);
    const timeRef = useRef<number>(null);

    const timeRunning = 3000;
    const timeAutoNext = 7000;
    let runTimeOut: NodeJS.Timeout;
    let runNextAuto: NodeJS.Timeout;

    useEffect(() => {
        const showSlider = (type: string) => {

            const SliderItemsDom = listRef.current?.querySelectorAll('.item');
            const thumbnailItemsDom = thumbnailRef.current?.querySelectorAll('.item');

            if (type === 'next') {
                if(SliderItemsDom) {
                    listRef.current?.appendChild(SliderItemsDom[0]);
                }
                if(thumbnailItemsDom) {
                thumbnailRef.current?.appendChild(thumbnailItemsDom[0]);
                }
                carouselRef.current?.classList.add('next');
            } else {
                if (SliderItemsDom && SliderItemsDom.length > 0) {
                    listRef.current?.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
                }
                
                if (thumbnailItemsDom && thumbnailItemsDom.length > 0) {
                    thumbnailRef.current?.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
                }
               
                carouselRef.current?.classList.add('prev');
            }

            clearTimeout(runTimeOut);
            runTimeOut = setTimeout(() => {
                carouselRef.current?.classList.remove('next');
                carouselRef.current?.classList.remove('prev');
            }, timeRunning);

            clearTimeout(runNextAuto);
            runNextAuto = setTimeout(() => {
                if(nextRef.current) {
                    nextRef.current.click();
                }
            }, timeAutoNext);
        };
        if(nextRef.current && prevRef.current) {
            nextRef.current.onclick = () => showSlider('next');
            prevRef.current.onclick = () => showSlider('prev');
        }

        runNextAuto = setTimeout(() => {
            if(nextRef.current) {
                nextRef.current.click();
            }  
        }, timeAutoNext);

        return () => {
            clearTimeout(runTimeOut);
            clearTimeout(runNextAuto);
        };
    }, []);
    const images = [
        { path: "/slider1/img1.jpg", alt: "", name_slider: "Name Slider", desc: "Description" },
        { path: "/slider1/img2.jpg", alt: "", name_slider: "Name Slider", desc: "Description" },
        { path: "/slider1/img3.jpg", alt: "", name_slider: "Name Slider", desc: "Description" },
        { path: "/slider1/img4.jpg", alt: "", name_slider: "Name Slider", desc: "Description" },
    ]

    return (
        <div className='carousel' ref={carouselRef}>
            <div className='list' ref={listRef}>
                {images && images.map((item, index) =>
                    <Item
                        key={index}
                        image={item.path}
                        alt={item.alt}
                        title='Title'
                        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
                        author='Author'
                        topic='Topic'
                        button1='Button 1'
                        button2='Button 2'
                    />
                )}


            </div>

            <div className='thumbnail' ref={thumbnailRef}>
                {images && [...images.slice(1), images[0]].map((item, index) =>
                    <Thumbnail
                        key={index}
                        image={item.path}
                        alt={item.alt}
                        name_slider={item.name_slider}
                        desc={item.desc}
                    />
                )}
            </div>

            <div className="arrows">
                <button id="prev"
                    ref={prevRef}
                >
                    <ChevronLeft className='w-5 h-5' />
                </button>
                <button id="next"
                    ref={nextRef}
                >
                    <ChevronRight className='w-5 h-5' />
                </button>
            </div>
            <div className="time"></div>
        </div>
    )
}


interface ItemProps {
    author?: string;
    title?: string;
    topic?: string;
    desc?: string;
    image: string;
    alt: string;
    button1?: string;
    button2?: string;
}
const Item = (props: ItemProps) => {
    const { author, title, topic, desc, image, alt, button1, button2 } = props;
    return (
        <div className='item'>
            <Image
                className='img'
                width={1000}
                height={1000}
                src={image}
                alt={alt}
            />
            <div className='content'>
                <div className='author'>{author}</div>
                <div className='title'>{title}</div>
                <div className='topic'>{topic}</div>
                <div className='desc'>{desc}</div>
                <div className='buttons'>
                    <button className='button'>{button1}</button>
                    <button>{button2}</button>
                </div>
            </div>
        </div>
    )
}

interface ThumbnailProps {
    image: string;
    alt: string;
    name_slider: string;
    desc: string;
}
const Thumbnail = (props: ThumbnailProps) => {
    const { image, alt, name_slider, desc } = props;
    return (
        <div className='item'>
            <Image
                className='img'
                width={300}
                height={700}
                src={image}
                alt={alt}
            />
            <div className='content'>
                <div className='content'>
                    <div className='title'>
                        {name_slider}
                    </div>
                    <div className='desc'>
                        {desc}
                    </div>
                </div>
            </div>
        </div>
    )
}



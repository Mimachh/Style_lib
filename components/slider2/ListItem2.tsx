"use client"
import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";



const images = [
    { path: "/slider2/1.png", alt: "", name_slider: "Name Slider", desc: "Description", isActive: true },
    { path: "/slider2/2.png", alt: "", name_slider: "Name Slider", desc: "Description" },
    { path: "/slider2/3.png", alt: "", name_slider: "Name Slider", desc: "Description" },
    { path: "/slider2/4.png", alt: "", name_slider: "Name Slider", desc: "Description" },
    { path: "/slider2/5.png", alt: "", name_slider: "Name Slider", desc: "Description" },
]


export default function ListItem2() {

    const circleRef = useRef<HTMLDivElement>(null);
    const listRef = useRef<HTMLDivElement>(null);
    const prevRef = useRef<HTMLButtonElement>(null);
    const nextRef = useRef<HTMLButtonElement>(null);

    const [active, setActive] = useState(1);


    const next = () => {
        setActive(prevActive => prevActive + 1);
    }

    const prev = () => {
        setActive(prevActive => prevActive - 1);
    }


    useEffect(() => {
        const list = listRef.current;
        const items = list?.children as HTMLCollectionOf<HTMLDivElement>;
        const count = items?.length;
        let width_item = 0;
        if (items) {
            width_item = items[active].offsetWidth;
        }

        if(prevRef.current) {
            prevRef.current.style.display = (active == 0) ? 'none' : 'block';
        }
        if(nextRef.current && count) {
            nextRef.current.style.display = (active == count - 1) ? 'none' : 'block';
        }


        for (let item of Array.from(items)) {
            item.classList.remove('active');
        }
        items[active].classList.add('active');

        const leftTransform = width_item * (active - 1) * -1;
        if(list) {
            list.style.transform = `translateX(${leftTransform}px)`;
        }
      
    }, [active]);

    useEffect(() => {
        if (circleRef.current) {
            let textCircle = circleRef.current.innerText.split('');
            circleRef.current.innerText = '';
            textCircle.forEach((value, key) => {
                let newSpan = document.createElement("span");
                newSpan.innerText = value;
                let rotateThisSpan = (360 / textCircle.length) * (key + 1);
                newSpan.style.setProperty('--rotate', rotateThisSpan + 'deg');
                circleRef.current?.appendChild(newSpan);
            });
          }

    }, []); 

    return (
        <div className="slider2">

            <div ref={listRef} className="list">
                {images.map((item, index) => (
                    <div key={index}
                        className={`item ${index === active ? 'active' : ''}`}
                    >
                        <Image
                            width={1000}
                            height={1000}
                            src={item.path}
                            alt={item.alt}
                            className="img w-full h-auto"
                        />
                    </div>
                ))}
            </div>
            <div
                ref={circleRef}
                className="circle">
                MIMACH - Le boss - Ta mère en slip
            </div>
            <div className="content">
                <div>menu</div>
                <div>restaurant</div>
                <button>See More</button>

            </div>
            <div className="arow">
                <button ref={prevRef}
                    onClick={prev}
                    id="prev">
                    <ChevronLeft className='w-5 h-5' />
                </button>
                <button
                    onClick={next}
                    ref={nextRef} id="next">
                    <ChevronRight className='w-5 h-5' />
                </button>
            </div>
        </div>
    )
}

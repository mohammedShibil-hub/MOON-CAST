import './SlidingBanner.css'
import { useEffect, useRef, useState } from 'react'

export function SlidingBanner() {

    const slides = [
        "/images/banner/rolls-banner.jpg",
        "/images/banner/minigtsport.jpg",
        "/images/banner/kaidoHouse.jpg",
        "/images/banner/mini-gt-banner.png",
        "/images/banner/popRace.png",
        "/images/banner/defender-banner.jpg"
    ]

    const [index, setIndex] = useState(0);
    const [transition, setTransition] = useState(true);
    const autoRef = useRef(null);

    const extendedSlides = [...slides, slides[0]];

    const nextSlide = () => {
        setIndex((prev) =>  prev + 1);
    };

    const prevSlide = () => {
        if(index === 0) return;
        setIndex((prev) => prev - 1);
    };

    const startSlide = () => {
        if(autoRef.current) return;
        autoRef.current = setInterval(nextSlide, 3000);
    };

    const stopSlide = () => {
        clearInterval(autoRef.current);
        autoRef.current = null;
    };

    useEffect(() => {
        startSlide();   
        return () => clearInterval(autoRef.current)
    }, []);

    useEffect(() => {
        if (index === slides.length) {
            setTimeout(() => {
                setTransition(false)
                setIndex(0)
            }, 600);

            setTimeout(() => {
                setTransition(true);
            }, 650)
        }
    }, [index])

    return (
        <div className="slider" 
        onMouseEnter={stopSlide}
        onMouseLeave={startSlide}
        >
            <div className="slides" 
                style={{
                    transform: `translateX(-${index * 100}%)`,
                    transition: transition ? "transform 0.6s ease" : "none"
                }}
            >
                {extendedSlides.map((img, i) => (
                    <div className="slide" key={i}>
                    <img src={img} alt="" />
                    </div>
                ))};
            </div>
            <button className="arrow left" onClick={prevSlide} >&#10094;</button>
            <button className="arrow right" onClick={nextSlide} >&#10095;</button>
        </div>
    )
}
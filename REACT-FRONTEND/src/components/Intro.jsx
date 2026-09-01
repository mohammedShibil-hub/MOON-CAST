import './Intro.css'
import { useRef, useEffect, useState } from 'react'

export function Intro() {

    const audioRef = useRef(null)
    const [soundOn, setSoundOn] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => {
            if (soundOn && audioRef.current) {
                audioRef.current.currentTime = 0;
                audioRef.current.play();
            }
        }, 1000);
        return () => clearTimeout(timer);
    }, [soundOn]);
    const toggleSound = () => { setSoundOn(prev => !prev); };


    return (
        <div className="intro" id="logo-intro">
            <div className="logo-container">
                <button className="sound-button" onClick={toggleSound} >
                    {soundOn ? "🔊" : "🔇"}
                </button>
                <img className="image js-img" src="/images/icons/moon.png" />
                <img className="image js-img" src="/images/icons/van-without-tire.png" />
                <img className="image js-img" src="/images/icons/tire.png" />
                <img className="image js-img" src="/images/icons/die.png" />
                <img className="image js-image" src="/images/icons/die demolished.png" />
                <img className="image js-img" src="/images/icons/cast.png" />
            </div>
            <audio ref={audioRef}
                src="/mp3/impact sound.mp4" preload="auto"
            />
        </div>
    )
}
import { useEffect, useState } from "react";

export function useScrollEffect() {
    const [showNavbar, setShowNavbar] = useState(true);

    useEffect(() => {
        let lastScroll = window.scrollY

        const scrollMovement = () => {
            if (window.scrollY < lastScroll) {
                setShowNavbar(true);
            } else {
                setShowNavbar(false);
            }
            lastScroll = window.scrollY;
        };

        window.addEventListener("scroll", scrollMovement);
        return () => window.removeEventListener("scroll", scrollMovement);

    }, [])
    return showNavbar
}
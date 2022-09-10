import React, { useState, useEffect } from "react";

/* Borrowed from:
 * https://remotestack.io/react-js-detect-window-width-and-height-tutorial/
 */
export default function ScreenSize() {
    const [windowDimension, detectHW ] = useState({
        winWidth: window.innerWidth,
        winHeight: window.innerHeight
    });

    const detectSize = () => {
        detectHW({
            winWidth: window.innerWidth,
            winHeight: window.innerHeight
        });
    }

    useEffect(() => {
        window.addEventListener('resize', detectSize);

        return () => {
            window.removeEventListener('resize', detectSize);
        }
    }, [windowDimension])
}
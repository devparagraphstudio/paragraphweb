'use client';

import { useState, useEffect } from 'react';

export function useTouchDevice() {
    const [isTouchDevice, setIsTouchDevice] = useState(false);

    useEffect(() => {
        const checkTouchDevice = () => {
            // Check for touch capability
            const hasTouchScreen =
                'ontouchstart' in window || navigator.maxTouchPoints > 0;

            // Check for pointer capability (more accurate for modern devices)
            const hasPointer =
                window.matchMedia &&
                window.matchMedia('(pointer: coarse)').matches;

            setIsTouchDevice(hasTouchScreen || hasPointer);
        };

        checkTouchDevice();

        // Listen for orientation changes and resize events
        window.addEventListener('resize', checkTouchDevice);
        window.addEventListener('orientationchange', checkTouchDevice);

        return () => {
            window.removeEventListener('resize', checkTouchDevice);
            window.removeEventListener('orientationchange', checkTouchDevice);
        };
    }, []);

    return isTouchDevice;
}

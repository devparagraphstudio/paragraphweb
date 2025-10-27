"use client";
import { useAnimationFrame } from "framer-motion";
import { useRef, useMemo } from "react";

const PaperPlane = () => {
    const ref = useRef<SVGSVGElement>(null);

    // Randomize phases and amplitudes once (per render)
    const waves = useMemo(() => {
        return [
            { amp: 30 + Math.random() * 20, freq: 400 + Math.random() * 200, phase: Math.random() * Math.PI * 2 },
            { amp: 10 + Math.random() * 15, freq: 200 + Math.random() * 100, phase: Math.random() * Math.PI * 2 },
        ];
    }, []);

    useAnimationFrame((t) => {
        if (ref.current) {
            const x = (t / 5) % 2200 - 200; // constant forward speed

            // Combine multiple sine waves with random params
            const y =
                100 +
                waves.reduce(
                    (acc, w) => acc + Math.sin(t / w.freq + w.phase) * w.amp,
                    0
                );

            const rotate = Math.sin(t / 700) * 10 + 20; // smooth tilt

            ref.current.setAttribute(
                "transform",
                `translate(${x},${y}) rotate(${rotate})`
            );
        }
    });

    return (
        <div className="relative w-full h-full overflow-hidden pointer-events-none">
            <svg
                ref={ref}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 200 200"
                className="w-[200px] h-[200px] text-white absolute"
            >
                <path
                    d="M85.8993 114.103L126.284 73.7186M167.595 49.0726L133.507 159.861C130.452 169.789 128.923 174.756 126.288 176.402C124.003 177.83 121.173 178.069 118.684 177.036C115.814 175.845 113.485 171.195 108.837 161.9L87.2462 118.718C86.5087 117.243 86.1396 116.509 85.6471 115.869C85.2099 115.302 84.7055 114.792 84.1384 114.354C83.5139 113.873 82.7918 113.512 81.3827 112.808L38.1007 91.1665C28.8064 86.5194 24.1589 84.1937 22.968 81.3236C21.9352 78.8345 22.1707 76.0022 23.5987 73.7168C25.2453 71.0815 30.2116 69.5505 40.1433 66.4946L150.932 32.4059C158.74 30.0035 162.645 28.8032 165.282 29.7714C167.58 30.6148 169.391 32.424 170.234 34.7212C171.202 37.3572 170 41.2609 167.6 49.0611L167.595 49.0726Z"
                    stroke="black"
                    strokeWidth="16.6667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="currentColor"
                />
            </svg>
        </div>
    );
};

export default PaperPlane;

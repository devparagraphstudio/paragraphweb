'use client';
import { createContext, useContext } from 'react';
import { useAnimation, AnimationControls } from 'framer-motion';

type BackgroundAnimationContextType = {
    controls: AnimationControls[];
};

const BackgroundAnimationContext = createContext<BackgroundAnimationContextType | null>(null);

export const BackgroundAnimationProvider = ({ children }: { children: React.ReactNode }) => {
    const controls = [
        useAnimation(),
        useAnimation(),
        useAnimation(),
        useAnimation(),
        useAnimation(),
        useAnimation(),
        useAnimation(),
        useAnimation(),
        useAnimation(),
        useAnimation(),
    ];

    return (
        <BackgroundAnimationContext.Provider value={{ controls }}>
            {children}
        </BackgroundAnimationContext.Provider>
    );
};

export const useBackgroundControls = () => {
    const context = useContext(BackgroundAnimationContext);
    if (!context) {
        throw new Error("useBackgroundControls must be used within a BackgroundAnimationProvider");
    }
    return context.controls;
};

'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Loader } from '@/components';

export default function RouteLoader() {
    const pathname = usePathname();
    const [loading, setLoading] = useState(true);
    const [isInitialLoad, setIsInitialLoad] = useState(true);

    useEffect(() => {
        let timeout: NodeJS.Timeout;
        let loadHandler: () => void;

        const handleInitialLoad = () => {
            timeout = setTimeout(() => {
                setLoading(false);
                setIsInitialLoad(false);
            }, 200);
        };

        const start = () => setLoading(true);
        const stop = () => {
            if (isInitialLoad) {
                if (document.readyState === 'complete') {
                    handleInitialLoad();
                } else {
                    loadHandler = handleInitialLoad;
                    window.addEventListener('load', loadHandler);
                }
            } else {
                timeout = setTimeout(() => setLoading(false), 200);
            }
        };

        start();
        stop();

        return () => {
            clearTimeout(timeout);
            if (loadHandler) {
                window.removeEventListener('load', loadHandler);
            }
        };
    }, [pathname, isInitialLoad]);

    return loading ? <Loader /> : null;
}

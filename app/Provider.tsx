"use client"

import React, { useEffect } from 'react'
import { pageview } from '@/lib/gtag'
import { usePathname } from 'next/navigation';

export default function Provider({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    useEffect(() => {
        if (process.env.NEXT_PUBLIC_GA_ID) {
            pageview(pathname);
        }
    }, [pathname]);

    return (
        <>{children}</>
    )
}
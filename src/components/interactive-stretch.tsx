"use client"

import { useState } from "react"
import Image from "next/image"

export function InteractiveStretch() {
    const [state, setState] = useState<'compressed' | 'stretching' | 'stretched' | 'compressing'>('compressed')
    const [gifKey, setGifKey] = useState(0) // ensures gif reloads on state change since next js image optimizes to make frame transitions choppy otherwise

    const handleClick = () => {
        if (state === 'stretching' || state === 'compressing') return // prevent clicks during animation

        if (state === 'compressed') {
            // Start stretching animation
            setGifKey(Date.now()) // Force fresh GIF load
            setState('stretching')
            // After gif plays, freeze on stretched frame
            setTimeout(() => setState('stretched'), 400)
        } else if (state === 'stretched') {
            // Start compressing animation
            setGifKey(Date.now()) // Force fresh GIF load
            setState('compressing')
            // After gif plays, freeze on compressed frame
            setTimeout(() => setState('compressed'), 400)
        }
    }

    const getImageSrc = () => {
        switch (state) {
            case 'compressed':
                return '/assets/nojima-compressed.png'
            case 'stretching':
                return `/assets/nojima-stretching.gif?t=${gifKey}`
            case 'stretched':
                return '/assets/nojima-stretched.png'
            case 'compressing':
                return `/assets/nojima-compressing.gif?t=${gifKey}`
        }
    }

    return (
        <div
            onClick={handleClick}
            className="cursor-pointer inline-block"
        >
            <Image
                key={`${state}-${gifKey}`} // Force re-render on state change
                src={getImageSrc()}
                alt="Nojima stretching"
                width={300}
                height={200}
                className="rounded-xl hover:scale-105 transition-transform duration-300"
                unoptimized
            />
        </div>
    )
}

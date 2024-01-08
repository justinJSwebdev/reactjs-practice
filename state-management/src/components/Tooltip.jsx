import React from 'react'

export default function Tooltip({ children, text }) {
    return (
        <div>
            <TooltipContent children={children}></TooltipContent>
            <span className="font-semibold">{text}</span>
        </div>
    )
}

function TooltipContent({ children }) {
    return <p className="inline-block p-3 text-white bg-black rounded-xl">{children}</p>
}
import { cn } from "@/lib/utils";
import React from "react"
import "./style.css"

interface IGlassProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactElement;
    borderRadius?: number
}

const Glass = ({ className, borderRadius = 8, children, }: IGlassProps) => {
    return (
        <div className={cn("gamesir-glass", "relative w-full h-full overflow-hidden", className)}
            style={{
                borderRadius: `${borderRadius}px`,
                "--glass-border-radius": `${borderRadius}px`
            } as React.CSSProperties}>
            <div className={cn("bg-[#bad7f5]/10", "flex items-center justify-center", "p-2", "text-[#bad7f5]")}>
                {children}
            </div>

        </div>
    )
}

export { Glass }
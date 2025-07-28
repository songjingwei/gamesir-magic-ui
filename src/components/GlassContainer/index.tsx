import type React from "react";
import { useRef, useState, useEffect } from "react";
import SvgGlassBorder from "./SvgGlassBorder";
import { cn } from "../../lib/utils";

interface GlassContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  borderRadius?: number;
}

const GlassContainer: React.FC<GlassContainerProps> = ({ children, className, style, borderRadius = 8 }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const currentRef = divRef.current;
    if (!currentRef) return;

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setDimensions({
          width: currentRef.offsetWidth,
          height: currentRef.offsetHeight,
        });
      }
    });

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div
      ref={divRef}
      className={cn(
        'p-2',
        'rounded-lg',
        'relative overflow-hidden',
        'bg-[#bad7f5]/10 backdrop-filter backdrop-blur-lg',
        className || '',
      )}
      style={{
        ...style,
        borderRadius: `${borderRadius}px`,
      }}
    >
      {dimensions.width > 0 && dimensions.height > 0 && (
        <SvgGlassBorder
          width={dimensions.width}
          height={dimensions.height}
          borderRadius={borderRadius}
        />
      )}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export { GlassContainer };

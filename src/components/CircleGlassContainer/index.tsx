import type React from 'react';
import SvgCircleBorder from './SvgCircleBorder';
import { cn } from '@/lib/utils';

interface CircleGlassContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  size: number;
}

const CircleGlassContainer: React.FC<CircleGlassContainerProps> = ({
  children,
  className = '',
  size,
}) => {
  return (
    <div
      className={
        cn(
            'relative overflow-hidden',
            'flex items-center justify-center',
            'bg-[#bbd7f5]/10 backdrop-blur-lg',
            'rounded-full',
            className,
        )
      }
      style={{
        width: size,
        height: size,
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      }}
    >
      <SvgCircleBorder size={size} />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export { CircleGlassContainer };
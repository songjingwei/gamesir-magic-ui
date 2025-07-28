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
  onClick,
  size,
  ...rest
}) => {
  return (
    // biome-ignore lint/a11y/useSemanticElements: <explanation>
// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
    <div
      role="button"
      tabIndex={0}
      onClick={onClick}
      className={
        cn(
            'relative overflow-hidden',
            'flex items-center justify-center',
            onClick ? 'cursor-pointer' : '', // Only apply cursor-pointer if onClick is present
            'text-[#bad7f5]',
            'bg-[#bbd7f5]/10 hover:bg-[#bbd7f5]/15 active:bg-[#bbd7f5]/20 backdrop-blur-lg',
            'rounded-full',
            className,
        )
      }
      style={{
        width: size,
        height: size,
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      }}
      {...rest}
    >
      <SvgCircleBorder size={size} />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export { CircleGlassContainer };
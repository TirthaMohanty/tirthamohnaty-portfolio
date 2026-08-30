import React from 'react';
import { Badge } from './Badge';

interface SectionHeadingProps {
  badgeText?: string;
  badgeVariant?: 'cyan' | 'blue' | 'purple' | 'emerald' | 'amber' | 'rose' | 'slate';
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badgeText,
  badgeVariant = 'cyan',
  title,
  subtitle,
  centered = true,
  className = '',
}) => {
  return (
    <div className={`mb-6 sm:mb-8 ${centered ? 'text-center' : 'text-left'} ${className}`}>
      {badgeText && (
        <div className={`mb-3 ${centered ? 'flex justify-center' : 'inline-block'}`}>
          <Badge variant={badgeVariant} size="md" dot>
            {badgeText}
          </Badge>
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-2">
        {title}
      </h2>
      <div className={`h-1 w-20 bg-cyan-500 rounded-full mb-4 ${centered ? 'mx-auto' : ''}`} />
      {subtitle && (
        <p className={`text-slate-400 text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed ${centered ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

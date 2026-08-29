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
    <div className={`mb-12 md:mb-16 ${centered ? 'text-center' : 'text-left'} ${className}`}>
      {badgeText && (
        <div className={`mb-3 ${centered ? 'flex justify-center' : 'inline-block'}`}>
          <Badge variant={badgeVariant} size="md" dot>
            {badgeText}
          </Badge>
        </div>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-100 mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className={`text-slate-400 text-base md:text-lg max-w-3xl leading-relaxed ${centered ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
      <div className={`mt-4 h-1 w-16 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full ${centered ? 'mx-auto' : ''}`} />
    </div>
  );
};

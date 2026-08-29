import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'cyan' | 'blue' | 'purple' | 'emerald' | 'amber' | 'rose' | 'slate';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  dot?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'cyan',
  size = 'sm',
  className = '',
  dot = false,
}) => {
  const variantStyles = {
    cyan: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20 dark:text-cyan-300',
    blue: 'bg-blue-500/10 text-blue-400 border-blue-500/20 dark:text-blue-300',
    purple: 'bg-purple-500/10 text-purple-400 border-purple-500/20 dark:text-purple-300',
    emerald: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20 dark:text-emerald-300',
    amber: 'bg-amber-500/10 text-amber-400 border-amber-500/20 dark:text-amber-300',
    rose: 'bg-rose-500/10 text-rose-400 border-rose-500/20 dark:text-rose-300',
    slate: 'bg-slate-700/30 text-slate-300 border-slate-700/50',
  };

  const dotColors = {
    cyan: 'bg-cyan-400',
    blue: 'bg-blue-400',
    purple: 'bg-purple-400',
    emerald: 'bg-emerald-400',
    amber: 'bg-amber-400',
    rose: 'bg-rose-400',
    slate: 'bg-slate-400',
  };

  const sizeStyles = {
    sm: 'text-xs px-2.5 py-0.5 font-medium',
    md: 'text-xs px-3 py-1 font-semibold',
    lg: 'text-sm px-3.5 py-1.5 font-semibold',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border backdrop-blur-sm transition-all duration-200 ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {dot && <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${dotColors[variant]}`} />}
      {children}
    </span>
  );
};

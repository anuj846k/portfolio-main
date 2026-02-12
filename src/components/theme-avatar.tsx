'use client';

import { useTheme } from 'next-themes';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

interface ThemeAvatarProps {
  name: string;
  initials: string;
  className?: string;
}

export function ThemeAvatar({ name, initials, className }: ThemeAvatarProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const isLight = mounted && resolvedTheme === 'light';

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Avatar className={cn('relative overflow-hidden', className)}>
      {/* Both images are always rendered and stacked. 
          We crossfade between them using opacity for a seamless blend. */}
      <Image
        src="/pp.png"
        alt={name}
        fill
        priority
        className={cn(
          'object-cover',
          'transition-opacity duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]',
          isLight ? 'opacity-0' : 'opacity-100',
        )}
      />
      <Image
        src="/ppColored.png"
        alt={name}
        fill
        priority
        className={cn(
          'object-cover',
          'transition-opacity duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]',
          isLight ? 'opacity-100' : 'opacity-0',
        )}
      />
      <AvatarFallback>{initials}</AvatarFallback>
    </Avatar>
  );
}

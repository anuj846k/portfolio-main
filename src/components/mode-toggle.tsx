'use client';

import { Button } from '@/components/ui/button';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useRef } from 'react';
import {
  ThemeAnimationType,
  useModeAnimation,
} from 'react-theme-switch-animation';

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  // 1. Circle animation hook
  const { ref, toggleSwitchTheme, isDarkMode } = useModeAnimation({
    animationType: ThemeAnimationType.CIRCLE,
    isDarkMode: theme === 'dark',
    onDarkModeChange: (nextIsDark) => setTheme(nextIsDark ? 'dark' : 'light'),
  });

  // 2. Preload sound
  const audioRef = useRef<HTMLAudioElement | null>(null);
  useEffect(() => {
    audioRef.current = new Audio('/sounds/theme-toggle.mp3');
    audioRef.current.volume = 0.4;
    audioRef.current.preload = 'auto';
    audioRef.current.load();
    return () => {
      audioRef.current?.pause();
      audioRef.current = null;
    };
  }, []);

  // 3. Play sound + trigger animation
  const handleToggle = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {});
    }
    toggleSwitchTheme();
  };

  return (
    <Button
      ref={ref as React.Ref<HTMLButtonElement>}
      variant="ghost"
      type="button"
      size="icon"
      className="px-2"
      onClick={handleToggle}
    >
      {isDarkMode ? (
        <Moon className="h-[1.2rem] w-[1.2rem] text-neutral-800 dark:text-neutral-200" />
      ) : (
        <Sun className="h-[1.2rem] w-[1.2rem] text-neutral-800 dark:text-neutral-200" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}

import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import Image from 'next/image';

interface ThemeAvatarProps {
  name: string;
  initials: string;
  className?: string;
}

export function ThemeAvatar({ name, initials, className }: ThemeAvatarProps) {
  return (
    <Avatar className={cn('relative overflow-hidden', className)}>
      {/* Both images are always rendered and stacked. The `dark` class from
          next-themes crossfades between them with opacity, without a hydration flash. */}
      <Image
        src="/images/avatar/avatar.png"
        alt={name}
        fill
        priority
        className="object-cover opacity-0 transition-opacity duration-700 ease-in-out dark:opacity-100"
      />
      <Image
        src="/images/avatar/avatar-color.png"
        alt=""
        aria-hidden="true"
        fill
        priority
        className="object-cover opacity-100 transition-opacity duration-700 ease-in-out dark:opacity-0"
      />
      <AvatarFallback>{initials}</AvatarFallback>
    </Avatar>
  );
}

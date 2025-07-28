import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from '@radix-ui/react-icons';
import { Mail } from 'lucide-react';
import Link from 'next/link';
import type * as React from 'react';
import { Button, buttonVariants } from '@/components/ui/button';
import { portfolio } from '@/config/site';
import { cn } from '@/lib/utils';

type SocialKeys = keyof typeof portfolio.socials;

const iconMap: Record<SocialKeys, React.ReactNode> = {
  github: <GitHubLogoIcon />,
  twitter: <TwitterLogoIcon />,
  linkedin: <LinkedInLogoIcon />,
};

export default function Socials() {
  return (
    <div className="inline-flex items-center gap-2 my-10">
      <Link
        href={portfolio.resume}
        target="_blank"
        className={buttonVariants({ variant: 'default' })}
      >
        resume
      </Link>

      {(Object.keys(portfolio.socials) as Array<SocialKeys>).map((key) => {
        const link = portfolio.socials[key];
        return (
          <Link
            key={link}
            href={link}
            target="_blank"
            className={cn(
              buttonVariants({ variant: 'outline', size: 'icon' }),
              'dark:bg-transparent border-dashed'
            )}
          >
            {iconMap[key]}
          </Link>
        );
      })}

      {/* TODO: give two options to copy and redirect */}
      <Button
        variant="outline"
        size="icon"
        className="border-dashed dark:bg-transparent"
      >
        <Mail />
      </Button>
    </div>
  );
}

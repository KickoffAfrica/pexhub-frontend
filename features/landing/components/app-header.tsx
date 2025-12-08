"use client";

import { ThemeToggle } from "./theme-toggle";
import Logo from "@/components/logo";

interface AppHeaderProps {
  onNewChat?: () => void;
}

export function AppHeader({ onNewChat }: AppHeaderProps = {}) {
  return (
    <header className="sticky top-0 z-10 w-full border-b border-border/30 bg-[#FFFFFF80] dark:bg-[#090C1080] py-2 md:py-3">
      <div className="flex h-10 items-center justify-between px-4 md:px-6 max-w-5xl w-full mx-auto">
        {/* Left: Logo and Branding */}
        <div className="flex items-center gap-2">
          <Logo />
          
        </div>

        {/* Right: Theme toggle */}
        <div className="flex items-center gap-2">
          <ThemeToggle isMobile />
        </div>
      </div>
    </header>
  );
}

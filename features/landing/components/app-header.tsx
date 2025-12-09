"use client";

import Image from "next/image";
import { ThemeToggle } from "./theme-toggle";
import Logo from "@/components/logo";
import { useIsMobile } from "@/hooks/use-mobile";

interface AppHeaderProps {
  onNewChat?: () => void;
}

export function AppHeader({ onNewChat }: AppHeaderProps = {}) {
  const isMobile = useIsMobile()
  return (
    <header className="sticky top-0 z-20 w-full py-2 md:py-3" style={{ backgroundColor: "transparent" }}>
      <div className="flex h-10 items-center justify-between px-4 md:px-6 max-w-5xl w-full mx-auto">
        {/* Left: Logo and Branding */}
        <div className="flex items-center gap-2">
          <Logo />
          
        </div>

        {/* Right: Theme toggle */}
        <div className="flex items-center gap-2">
          <ThemeToggle isMobile />
          <div>
          <Image src="/servicom_logo.svg" alt="Logo" width={isMobile ? 35 : 50} height={isMobile ? 35 : 50} />
          </div>
        </div>
      </div>
    </header>
  );
}

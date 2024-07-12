"use client";

import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import MainMenu from "./components/main-menu";
import MenuTitle from "./components/menu-title";
import { MenuIcon } from "lucide-react";
import { useMediaQuery } from "@/hooks/use-media-query";
import { useState } from "react";

//type
type DashboardLayoutProps = {
  children: React.ReactNode;
};

//component
export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="md:grid md:grid-cols-[250px_1fr] h-screen">
      {/* MainMenu - desktop */}
      <MainMenu className="hidden md:flex" />

      {/* MainMenu - mobile */}
      {!isDesktop && (
        <div className="p-4 flex justify-between md:hidden sticky top-0 left-0 bg-background border-b border-border">
          {/* title - mobile */}
          <MenuTitle />

          {/* menu - mobile */}
          <Drawer
            direction="right"
            open={mobileMenuOpen}
            onClose={() => setMobileMenuOpen(false)}
            onOpenChange={(open) => setMobileMenuOpen(open)}
          >
            <DrawerTrigger>
              <MenuIcon />
            </DrawerTrigger>
            <DrawerContent>
              <MainMenu className=" h-full " />
            </DrawerContent>
          </Drawer>
        </div>
      )}

      {/* content of the page */}
      <div className="overflow-auto py-2 px-4">
        <h1 className="pb-4">Welcome back, Ronaldo!</h1>
        {children}
      </div>
    </div>
  );
}

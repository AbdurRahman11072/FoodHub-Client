"use client";

import { ShoppingCart, User } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { MenuItem, Navbar1Props } from "@/types/navbar.types";
import Link from "next/link";
import { ModeToggle } from "./themeToggle";

const Navbar1 = ({ menu, auth, className }: Navbar1Props) => {
  return (
    <section className={cn("py-4", className)}>
      <div className="container">
        {/* Desktop Menu */}
        <nav className="hidden items-center justify-between lg:flex">
          <div className="flex items-center gap-6">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 font-bold text-lg"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded bg-primary text-primary-foreground text-lg font-bold">
                🍱
              </div>
              <span className="hidden sm:inline">FoodHub</span>
            </Link>
          </div>
          <div className="flex items-center">
            <NavigationMenu>
              <NavigationMenuList>
                {menu?.map((item) => renderMenuItem(item))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="flex gap-2">
            <Link href="/cart">
              <Button variant="ghost" size="icon">
                <ShoppingCart className="h-8 w-8" size="32" />
              </Button>
            </Link>
            <Link href="/login">
              <Button variant="ghost" size="icon">
                <User className="h-8 w-8" size="32" />
              </Button>
            </Link>
            <ModeToggle />
            <Button asChild variant="outline" size="sm">
              <a href={auth?.login.url}>{auth?.login.title}</a>
            </Button>
            <Button
              asChild
              variant="default"
              size="sm"
              className="text-white font-sm"
            >
              <a href={auth?.signup.url}>{auth?.signup.title}</a>
            </Button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className="block lg:hidden">
          <div className="flex items-center gap-6">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 font-bold text-lg"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded bg-primary text-primary-foreground text-sm font-bold">
                🍱
              </div>
              <span className="hidden sm:inline">FoodHub</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

const renderMenuItem = (item: MenuItem) => {
  return (
    <NavigationMenuItem key={item.title}>
      <NavigationMenuLink
        href={item.url}
        className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-accent-foreground"
      >
        {item.title}
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

const renderMobileMenuItem = (item: MenuItem) => {
  return (
    <a key={item.title} href={item.url} className="text-md font-semibold">
      {item.title}
    </a>
  );
};

export { Navbar1 };

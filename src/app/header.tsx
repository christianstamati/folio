"use client";
import { useState, useEffect, useRef, cloneElement, ReactElement } from "react";
import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";
import { Home, User, Folder, Message, Category } from "react-iconly";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Image from "next/image";

const navigation = [
  {
    path: "/",
    icon: <Home />,
  },
  {
    path: "/projects",
    icon: <Folder />,
  },
  {
    path: "/stack",
    icon: <Category />,
  },
  {
    path: "/about",
    icon: <User />,
  },
  {
    path: "/contact",
    icon: <Message />,
  },
];

function NavItem(props: {
  href: string;
  icon: ReactElement;
  selected: boolean;
}) {
  return (
    <Link
      href={props.href}
      className="m-1 flex items-center justify-center rounded-xl px-6 py-5 hover:bg-primary/5 md:px-8"
    >
      <div className={`${props.selected ? "" : "opacity-30"}`}>
        {cloneElement(props.icon, {
          stroke: "bold",
          size: 28,
          set: props.selected ? "bold" : "light",
        })}
      </div>
    </Link>
  );
}

export function Nav({ className }: { className?: string }) {
  const pathname = usePathname();
  return (
    <nav className={cn("flex", className)}>
      {navigation.map((item, index) => (
        <NavItem
          key={index}
          href={item.path}
          icon={item.icon}
          selected={pathname === item.path}
        />
      ))}
    </nav>
  );
}

function Header() {
  const [visible, setVisible] = useState(true);
  const lastScrollYRef = useRef<number>(0);
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setVisible(scrollY <= 0 || scrollY < lastScrollYRef.current);
      lastScrollYRef.current = scrollY;
    };
    window.addEventListener("scroll", handleScroll);
    lastScrollYRef.current = window.scrollY;
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`fixed left-0 right-0 top-0 z-50 ${visible ? "" : "sm:-translate-y-full"} glass flex justify-center transition-all duration-300 ease-in-out`}
    >
      <header className="grid min-h-16 w-full max-w-7xl grid-cols-[1fr_50vw_1fr] sm:grid-cols-[1fr_min-content_1fr]">
        <div className="flex items-center justify-center sm:justify-start">
          <Link href={"/"} className="ml-0 sm:ml-4">
            <p className={"text-xl font-bold"}>CD</p>
          </Link>
        </div>
        <div className="row-start-1 flex sm:row-start-auto">
          <Nav className="hidden sm:flex" />
        </div>
        <div className="flex items-center justify-end">
          <div className="mr-4">
            <ModeToggle />
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;

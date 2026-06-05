import { NAV_ITEMS } from "@/components/home/Hero/constants/navigation";
import Logo from "./Logo";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="bg-white [box-shadow:0_4px_4px_0_rgba(0,0,0,0.12)]">
      <div className="mx-auto flex h-21 max-w-7xl items-center justify-between px-4 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                cn("nav-link", isActive && "nav-link-active")
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        {/*Mobile Hamburger*/}

        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          className="rounded-md p-2 text-dark hover:text-primary lg:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ?
            <X size={24} />
          : <Menu size={24} />}
        </button>

        {/*MOBILE MENU: only rendered when isOpen is true*/}
      </div>
      {isOpen && (
        <div
          id="mobile-menu"
          className="border-t border-gray-100 bg-white px-4 pb-6 lg:hidden"
        >
          <nav
            aria-label="Mobile navigation"
            className="flex flex-col gap-5 pt-5"
          >
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) =>
                  cn("nav-link", isActive && "nav-link-active")
                }
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

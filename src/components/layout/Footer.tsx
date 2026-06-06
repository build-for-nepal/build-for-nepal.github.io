import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import techgaunLogo from "@/assets/techGaunLogo.svg";
import { NAV_ITEMS } from "@/data/navigation";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-footer text-white">
      {/* Top row: credit + nav */}
      <div className="page-wrapper flex flex-col items-center gap-6 py-8 lg:flex-row lg:justify-between lg:gap-4">
        <a
          href="https://techgaun.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-white/80 transition-opacity hover:opacity-100"
        >
          <span>initiated by</span>
          <img src={techgaunLogo} alt="Techgaun" className="h-5 w-auto" />
        </a>

        {/* Nav */}
        <nav aria-label="Footer navigation" className="flex items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                cn(
                  "text-sm text-white/80 transition-colors hover:text-white",
                  isActive && "text-white",
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Copyright bar */}
      <div className=" py-4 text-center text-xs text-white/60">
        ©{year} BuildforNepal. All rights reserved.
      </div>
    </footer>
  );
}

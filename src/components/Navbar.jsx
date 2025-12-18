import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // 1) Glass navbar when scrolling
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 2) Robust scroll lock when menu is open
  useEffect(() => {
    if (!isMenuOpen) return;

    const scrollY = window.scrollY;

    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.width = "100%";

    return () => {
      const top = document.body.style.top;

      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";

      window.scrollTo(0, parseInt(top || "0", 10) * -1);
    };
  }, [isMenuOpen]);

  // 3) Close menu when switching to desktop width
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setIsMenuOpen(false);
    };
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // 4) Close menu on ESC
  useEffect(() => {
    if (!isMenuOpen) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isMenuOpen]);

  const handleNavClick = () => setIsMenuOpen(false);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-[70]",
        "transition-[background-color,backdrop-filter,box-shadow,border-color,padding] duration-500 ease-out",
        isScrolled
          ? "py-3 bg-background/70 backdrop-blur-xl shadow-lg border-b border-border/40"
          : "py-5 bg-transparent shadow-none border-b border-transparent"
      )}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <a className="text-2xl font-bold flex items-center" href="#hero">
          <span className="logo-tear relative z-10">
            <span className="text-glow text-foreground">Yori</span>{" "}
            <span className="text-primary">Dev</span>
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>

       {/* Right actions (Theme toggle + hamburger) */}
<div className="flex items-center gap-3 md:gap-4">
  {/* Theme toggle */}
  <ThemeToggle className="relative z-[90]" />

  {/* Mobile menu button */}
  <button
    type="button"
    onClick={() => setIsMenuOpen((prev) => !prev)}
    className="md:hidden p-2 rounded-full hover:bg-foreground/10 transition text-foreground relative z-[90]"
    aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
    aria-expanded={isMenuOpen}
  >
    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
  </button>
</div>

        {/* Mobile overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-[75] md:hidden bg-background/95 backdrop-blur-md">
            {/* Backdrop */}
            <button
              type="button"
              className="absolute inset-0 cursor-default"
              aria-label="Close menu"
              onClick={() => setIsMenuOpen(false)}
            />

            

            {/* Menu links */}
            <div className="relative h-full flex items-center justify-center">
              <div className="flex flex-col space-y-8 text-xl">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    onClick={handleNavClick}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

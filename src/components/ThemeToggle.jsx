import { Droplet } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = ({ className = "" }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    const shouldBeDark =
      storedTheme === "dark" ? true : storedTheme === "light" ? false : prefersDark;

    setIsDarkMode(shouldBeDark);

    if (shouldBeDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((prev) => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
      return next;
    });
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      className={cn(
        // IMPORTANT: no "fixed" here anymore
        "p-2 rounded-full",
        "transition-all duration-300",
        "hover:scale-110 active:scale-95",
        "focus:outline-none focus:ring-2 focus:ring-offset-2",
        "focus:ring-primary/40 focus:ring-offset-background",
        "bg-background/20 backdrop-blur-md border border-border/30",
        className
      )}
    >
      <Droplet
        className={cn(
          "h-6 w-6 transition-all duration-300",
          !isDarkMode
            ? "text-blue-400 drop-shadow-[0_0_12px_rgba(96,165,250,0.95)] animate-[wobble_2.4s_ease-in-out_infinite]"
            : "text-red-600 drop-shadow-[0_0_12px_rgba(220,38,38,0.95)] animate-[float_2.2s_ease-in-out_infinite]"
        )}
      />
    </button>
  );
};

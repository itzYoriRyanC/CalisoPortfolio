import { useEffect, useState } from "react";

export const StarBackground = () => {
  const [rain, setRain] = useState([]);
  const [blood, setBlood] = useState([]);

  // Track whether dark mode is active (based on .dark class)
  const [isDark, setIsDark] = useState(
    document.documentElement.classList.contains("dark")
  );

  /* -------------------------------------------------
     Watch for theme changes
     Why:
     - Your toggle adds/removes `.dark` on <html>
     - MutationObserver lets us react instantly
  ------------------------------------------------- */
  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  /* -------------------------------------------------
     Generate particles on mount + resize
     Why:
     - Keeps density correct on different screens
     - Prevents stretched or sparse rain
  ------------------------------------------------- */
  useEffect(() => {
    const regen = () => {
      generateRain();
      generateBlood();
    };

    regen(); // initial generation

    window.addEventListener("resize", regen);
    return () => window.removeEventListener("resize", regen);
  }, []);

  /* -------------------------------------------------
     BLUE RAIN (Light Mode)
     Key idea:
     - NEGATIVE animationDelay = already falling
     - Prevents startup pause
  ------------------------------------------------- */
  const generateRain = () => {
    const numberOfDrops = Math.floor(
      (window.innerWidth * window.innerHeight) / 12000
    );

    const drops = [];
    for (let i = 0; i < numberOfDrops; i++) {
      const duration = Math.random() * 1.6 + 0.9;

      drops.push({
        id: i,

        // Thin streaks
        width: Math.random() * 1.2 + 0.6,
        height: Math.random() * 18 + 10,

        // Random horizontal placement
        x: Math.random() * 100,

        // Start anywhere vertically
        y: Math.random() * 100,

        opacity: Math.random() * 0.35 + 0.35,

        animationDuration: duration,

        // IMPORTANT:
        // Negative delay makes the animation start mid-cycle
        animationDelay: -(Math.random() * duration),
      });
    }

    setRain(drops);
  };

  /* -------------------------------------------------
     BLOOD RAIN / TEARS (Dark Mode)
     Slightly heavier, slower, fewer drops
  ------------------------------------------------- */
  const generateBlood = () => {
    const numberOfTears = 18;
    const tears = [];

    for (let i = 0; i < numberOfTears; i++) {
      const duration = Math.random() * 2.4 + 1.4;

      tears.push({
        id: i,

        // Thicker + longer for "tear" feel
        width: Math.random() * 1.8 + 1.0,
        height: Math.random() * 28 + 18,

        x: Math.random() * 100,
        y: Math.random() * 30, // start nearer the top

        opacity: Math.random() * 0.35 + 0.55,
        animationDuration: duration,

        // Same negative delay trick
        animationDelay: -(Math.random() * duration),

        // Precomputed so it DOESN’T flicker each render
        brightness: 0.8 + Math.random() * 0.25,
      });
    }

    setBlood(tears);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* -----------------------------------------------
          Light mode → Blue rain only
      ------------------------------------------------ */}
      {!isDark &&
        rain.map((drop) => (
          <div
            key={`rain-${drop.id}`}
            className="rain-drop"
            style={{
              width: `${drop.width}px`,
              height: `${drop.height}px`,
              left: `${drop.x}%`,
              top: `${drop.y}%`,
              opacity: drop.opacity,
              animation: `rain-fall ${drop.animationDuration}s linear infinite`,
              animationDelay: `${drop.animationDelay}s`,
            }}
          />
        ))}

      {/* -----------------------------------------------
          Dark mode → Blood rain only
      ------------------------------------------------ */}
      {isDark &&
        blood.map((tear) => (
          <div
            key={`blood-${tear.id}`}
            className="blood-drop"
            style={{
              width: `${tear.width}px`,
              height: `${tear.height}px`,
              left: `${tear.x}%`,
              top: `${tear.y}%`,
              opacity: tear.opacity,
              animation: `blood-fall ${tear.animationDuration}s linear infinite`,
              animationDelay: `${tear.animationDelay}s`,
              filter: `brightness(${tear.brightness})`,
            }}
          />
        ))}
    </div>
  );
};

import { ArrowDown, ArrowRight } from "lucide-react";

export const HeroSection = () => {
  return (
   <section
  id="hero"
  className="relative isolate min-h-screen flex flex-col items-center justify-center px-4"
>
  

  {/* content above dimmer */}
  <div className="relative z-10 container max-w-4xl mx-auto text-center">
          {/* Heading */}
         <h1 className="font-heading text-balance text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
  <span className="typing-line">
    <span className="text-foreground">Hi, I&apos;m </span>
    <span className="text-primary">Ryan Andrian</span>
    <span className="text-foreground"> Caliso</span>
  </span>
</h1>

          {/* Subtitle */}
          <p className="mt-5 max-w-2xl mx-auto text-base md:text-lg leading-relaxed text-foreground/75">
  I design and build modern web experiences and 3D visuals with clarity and performance in mind.
</p>

          {/* CTA */}
          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a
  href="#projects"
  className="
    group inline-flex items-center gap-3
    px-8 py-3 rounded-full font-semibold tracking-wide
    bg-primary text-primary-foreground

    shadow-[6px_6px_14px_rgba(0,0,0,0.25),_-6px_-6px_14px_rgba(255,255,255,0.08)]

    transition-all duration-300 ease-out
    hover:-translate-y-0.5
    hover:shadow-[8px_8px_18px_rgba(0,0,0,0.35),_-8px_-8px_18px_rgba(255,255,255,0.10)]

    active:translate-y-0
    active:shadow-[inset_4px_4px_10px_rgba(0,0,0,0.40),_inset_-4px_-4px_10px_rgba(255,255,255,0.08)]
  "
>
  View My Work
  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
</a>

          </div>
        </div>
    

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce z-10">
        <span className="text-sm text-foreground/70 mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};

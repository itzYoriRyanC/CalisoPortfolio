import { Box, Code, User } from "lucide-react";
import cvPdf from "@/assets/Caliso_CV.pdf";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        
        {/* Section title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* LEFT: About text */}
          <div className="space-y-6">
            
            {/* Main heading – tighter tracking & better line height */}
            <h3 className="text-2xl md:text-3xl font-semibold tracking-tight leading-tight">
              Passionate Web Developer & 3D Designer
            </h3>

            {/* Paragraph – improved readability */}
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Fourth-year college student and aspiring web developer passionate
              about building modern, responsive web applications and
              continuously expanding my technical skills.
            </p>

            {/* Call-to-action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center">
              
            <a
  href="#contact"
  className="
    inline-flex items-center justify-center
    px-8 py-3 rounded-full
    font-semibold tracking-wide

    bg-primary text-primary-foreground

    shadow-[6px_6px_14px_rgba(0,0,0,0.25),_-6px_-6px_14px_rgba(255,255,255,0.08)]

    transition-all duration-300 ease-out
    hover:-translate-y-0.5
    hover:shadow-[8px_8px_18px_rgba(0,0,0,0.35),_-8px_-8px_18px_rgba(255,255,255,0.10)]

    active:translate-y-0
    active:shadow-[inset_4px_4px_10px_rgba(0,0,0,0.40),_inset_-4px_-4px_10px_rgba(255,255,255,0.08)]

    focus-visible:outline-none
    focus-visible:ring-2 focus-visible:ring-primary/60
    focus-visible:ring-offset-2 focus-visible:ring-offset-background
  "
>
  Get In Touch
</a>


              {/* Secondary button */}
              <a
                href={cvPdf}
                download="Ryan_Andrian_Caliso_CV.pdf"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-2 rounded-full border border-primary text-primary tracking-wide hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* RIGHT: Skill cards */}
          <div className="grid grid-cols-1 gap-6">
            
            {/* Graphics Design */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  {/* Card title */}
                  <h4 className="font-semibold text-lg tracking-tight mb-1">
                    Graphics Design
                  </h4>

                  {/* Card description */}
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Managing wireframes and overall visual aesthetics, with a
                    focus on contemporary design trends.
                  </p>
                </div>
              </div>
            </div>

            {/* Modern Web Development */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg tracking-tight mb-1">
                    Modern Web Development
                  </h4>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Building responsive, high-performance web applications with
                    modern tools.
                  </p>
                </div>
              </div>
            </div>

            {/* 3D Designer */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                
                <div className="p-3 rounded-full bg-primary/10">
                  <Box className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg tracking-tight mb-1">
                    3D Designer
                  </h4>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Crafting optimized 3D models and visuals for interactive and
                    web-based experiences.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

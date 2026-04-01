import { Box, Code, User } from "lucide-react";
import cvPdf from "../assets/Caliso_CVNew.pdf";

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6"
    >
      <div className="container mx-auto max-w-6xl">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            About <span className="text-primary">Me</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* LEFT SIDE */}
          <div className="space-y-6 text-center lg:text-left">
            
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight leading-tight">
              Developer focused on building real-world solutions
            </h3>

            <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0">
              I’m a developer and designer with experience across freelance,
              academic, and self-initiated projects. I build responsive web
              applications, design user interfaces, and create digital content
              that solves real problems and delivers practical results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
              
              {/* Primary button */}
              <a
                href="#contact"
                className="
                  inline-flex items-center justify-center
                  px-6 sm:px-8 py-3 rounded-full
                  text-sm sm:text-base font-semibold tracking-wide
                  bg-primary text-primary-foreground
                  shadow-[6px_6px_14px_rgba(0,0,0,0.25),_-6px_-6px_14px_rgba(255,255,255,0.08)]
                  transition-all duration-300 ease-out
                  hover:-translate-y-0.5
                  hover:shadow-[8px_8px_18px_rgba(0,0,0,0.35),_-8px_-8px_18px_rgba(255,255,255,0.10)]
                  active:translate-y-0
                  active:shadow-[inset_4px_4px_10px_rgba(0,0,0,0.40),_inset_-4px_-4px_10px_rgba(255,255,255,0.08)]
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
                className="
                  inline-flex items-center justify-center
                  px-6 py-3 rounded-full
                  text-sm sm:text-base
                  border border-primary text-primary
                  hover:bg-primary/10 transition-colors duration-300
                "
              >
                Download CV
              </a>
            </div>
          </div>

          {/* RIGHT SIDE - SKILLS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            
            {/* UI/UX */}
            <div className="gradient-border p-5 sm:p-6 card-hover">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>

                <div>
                  <h4 className="font-semibold text-base sm:text-lg tracking-tight mb-1">
                    UI/UX Design
                  </h4>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    Designing intuitive interfaces and clean user experiences
                    using modern layouts and wireframes.
                  </p>
                </div>
              </div>
            </div>

            {/* Web Dev */}
            <div className="gradient-border p-5 sm:p-6 card-hover">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>

                <div>
                  <h4 className="font-semibold text-base sm:text-lg tracking-tight mb-1">
                    Web Development
                  </h4>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    Building responsive and scalable web applications using
                    modern frameworks and tools.
                  </p>
                </div>
              </div>
            </div>

            {/* 3D */}
            <div className="gradient-border p-5 sm:p-6 card-hover">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Box className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>

                <div>
                  <h4 className="font-semibold text-base sm:text-lg tracking-tight mb-1">
                    3D Design
                  </h4>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    Creating optimized 3D visuals and product renders for
                    digital and web experiences.
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="gradient-border p-5 sm:p-6 card-hover">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>

                <div>
                  <h4 className="font-semibold text-base sm:text-lg tracking-tight mb-1">
                    Social Media
                  </h4>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    Managing content, branding, and engagement strategies for
                    growing digital presence.
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
import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Frontend & Backend
  { name: "HTML/CSS", level: 70, category: "Web Development" },
  { name: "JavaScript", level: 70, category: "Web Development" },
  { name: "React", level: 60, category: "Web Development" },
  { name: "TypeScript", level: 50, category: "Web Development" },
  { name: "Tailwind CSS", level: 70, category: "Web Development" },
  { name: "Node.js", level: 30, category: "Web Development" },
  { name: "Firebase", level: 50, category: "Web Development" },
 

  // 3D Design
  { name: "Animation", level: 40, category: "3D Designs" },
  { name: "Modeling", level: 75, category: "3D Designs" },
  { name: "Texture", level: 70, category: "3D Designs" },
  { name: "Typography", level: 40, category: "3D Designs" },
  { name: "VFX", level: 20, category: "3D Designs" },
  { name: "Video editing", level: 40, category: "3D Designs" },
  { name: "Geo Nodes", level: 20, category: "3D Designs" },
  { name: "Lightings", level: 40, category: "3D Designs" },
  { name: "Shading", level: 70, category: "3D Designs" },

  // Tools
  { name: "Git/GitHub", level: 40, category: "tools" },
  { name: "Blender", level: 75, category: "tools" },
  { name: "Figma", level: 70, category: "tools" },
  { name: "VS Code", level: 70, category: "tools" },
  { name: "Vercel", level: 40, category: "tools" },
  { name: "Capcut", level: 40, category: "tools" },
  { name: "Unity hub", level: 60, category: "tools" },
   { name: "Microsoft Word", level: 80, category: "tools" },
  

  // Bonus
  { name: "Capcut Video Editing", level: 40, category: "Bonus" },
  { name: "C#", level: 50, category: "Bonus" },
  { name: "C++", level: 50, category: "Bonus" },
  { name: "Game Dev", level: 50, category: "Bonus" },
  { name: "Documentation", level: 75, category: "Bonus" },
  { name: "Marketing", level: 50, category: "Bonus" },
  
  

];

const categories = ["all", "Web Development", "3D Designs", "tools", "Bonus"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
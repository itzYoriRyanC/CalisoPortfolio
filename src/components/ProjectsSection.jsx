import { useEffect, useState } from "react";
import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Trust Club Documentation",
    description:
      "Documentation-based project showcasing organized client work, digital file handling, and structured proof of completed tasks.",
    images: ["/projects/Trustclubproof.png"],
    tags: ["Gmail", "Microsoft Word", "Excel"],
    demoUrl: "/trustclubfinalproof.pdf",
  },
  {
    id: 2,
    title: "GDS Budgetarian",
    description:
      "A collaborative capstone web platform designed to deliver a user-friendly food ordering experience with clean interface and responsive performance.",
    images: ["/projects/GDS.png"],
    tags: ["React", "Firebase", "TailwindCSS", "Vercel"],
    demoUrl: "https://gds-budgetarian-gamma.vercel.app/",
    githubUrl: "https://github.com/bryalwaysfindways/gds-budgetarian",
  },
  {
    id: 3,
    title: "Majestic Fragrance Perfume",
    description:
      "A 3D product render for a local perfume brand featuring realistic materials, refined lighting, and smooth presentation for visual promotion.",
    video: "/projects/0001-0250.mp4",
    tags: ["Blender", "Modeling", "Animation"],
    demoUrl: "https://www.facebook.com/people/Majestic-Fragrance/61560987964311/",
  },
  {
    id: 4,
    title: "MHARSMC Inventory System",
    description:
      "An inventory management system focused on stock monitoring, expiry tracking, and report-ready workflows for healthcare operations.",
    images: ["/projects/mharsmc.png"],
    tags: ["React", "JavaScript", "Vercel", "Inventory System"],
    demoUrl: "https://mharsmc-inventory-system.vercel.app/login",
    githubUrl: "https://github.com/itzYoriRyanC/MHARSMC-Inventory-System",
  },
  {
    id: 5,
    title: "Alano & Sons Credit Scoring",
    description:
      "A weighted credit scoring system built to evaluate applicants through structured scoring, business logic, and decision support workflows.",
    images: ["/projects/alano.png"],
    tags: ["XAML (WPF)", "C# (.NET)", "UI/UX", "Scoring Algorithm"],
    githubUrl:
      "https://github.com/itzYoriRyanC/weighted-credit-scoring-alano-and-sons",
  },
  {
    id: 6,
    title: "Cherry Red Glam",
    description:
      "Social media management for a beauty brand through content creation, branding, page handling, and audience engagement strategies.",
    images: ["/projects/RedGlam.png", "/projects/CRG.jpg"],
    tags: [
      "Facebook",
      "Content Creation",
      "Canva",
      "Marketing Strategy",
      "Engagement",
    ],
    demoUrl: "https://www.facebook.com/profile.php?id=61587940575288",
  },
  {
  id: 7,
  title: "Mama Dit’s Kitchen",
  description:
    "Managed social media presence during the pandemic (2021–2022), creating promotional food content, handling customer inquiries, and supporting online orders and deliveries.",
  images: [
    "/projects/dits.png",
    "/projects/dits1.png"
  ],
  tags: [
    "Facebook",
    "Content Creation",
    "Food Marketing",
    "Customer Engagement",
    "Online Orders"
  ],
  demoUrl: "https://www.facebook.com/mamaditskitchen"
},

{
  id: 8,
  title: "Cucina Online",
  description:
    "Managed social media and online presence for a food business, creating promotional content, assisting with customer inquiries, and supporting online orders and delivery coordination.",
  images: [
    "/projects/Conline.png"
  ],
  tags: [
    "Facebook",
    "Content Creation",
    "Food Marketing",
    "Customer Engagement",
    "Online Orders"
  ],
  demoUrl: "https://www.facebook.com/cariton.thewheeldeal"
},
{
  id: 9,
  title: "3D Portfolio UI Design",
  description:
    "Designed the visual layout and wireframes for a 3D portfolio website, including UI structure, scene composition, and user flow planning for an interactive front-end experience.",
  images: [
    "/projects/3DGraphics.png"
  ],
  tags: [
    "UI/UX Design",
    "Wireframing",
    "Figma",
    "3D Concept",
    "Frontend Planning"
  ]
}
];

export const ProjectsSection = () => {
  const [currentImages, setCurrentImages] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImages((prev) => {
        const updated = {};

        projects.forEach((project) => {
          if (project.images && project.images.length > 1) {
            const currentIndex = prev[project.id] || 0;
            updated[project.id] = (currentIndex + 1) % project.images.length;
          } else {
            updated[project.id] = 0;
          }
        });

        return updated;
      });
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground text-sm md:text-base leading-7 mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each one reflects my work across
          web development, documentation, 3D design, and social media
          management.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            const activeImageIndex = currentImages[project.id] || 0;

            return (
              <div
                key={project.id}
                className="group bg-card rounded-xl overflow-hidden shadow-xs card-hover h-full flex flex-col border border-border/40"
              >
                <div className="h-52 overflow-hidden relative bg-black">
                  {project.video ? (
                    <video
                      src={project.video}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      autoPlay
                      muted
                      loop
                      playsInline
                    />
                  ) : (
                    <img
                      src={project.images?.[activeImageIndex] || project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  )}

                  {project.images && project.images.length > 1 && (
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                      {project.images.map((_, index) => (
                        <span
                          key={index}
                          className={`h-2 w-2 rounded-full transition-all duration-300 ${
                            activeImageIndex === index
                              ? "bg-white"
                              : "bg-white/40"
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2.5 py-1 text-[11px] font-medium border rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-semibold leading-tight min-h-[56px] mb-3">
                    {project.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-7 min-h-[120px] mb-6">
                    {project.description}
                  </p>

                  <div className="mt-auto flex items-center gap-3">
                    {project.demoUrl && project.demoUrl !== "#" && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-foreground/70 hover:text-primary transition-colors duration-300"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-foreground/70 hover:text-primary transition-colors duration-300"
                      >
                        <Github size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/itzYoriRyanC"
            target="_blank"
            rel="noreferrer"
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
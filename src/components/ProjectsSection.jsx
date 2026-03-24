import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Trust Club Documentation",
    description: "Gig work experience, for more proof navigate to pdf",
    image: "/projects/Trustclubproof.png",
    tags: ["Gmail", "Microsoft Word", "Excel"],
    demoUrl: "/trustclubfinalproof.pdf",
  },
  {
    id: 2,
    title: "GDS Budgetarian",
    description:
      "A collaborative capstone project building a user-friendly web platform for GDS Budgetarian.",
    image: "/projects/GDS.png",
    tags: ["React", "Firebase", "TailwindCSS", "Vercel"],
    demoUrl: "https://gds-budgetarian-gamma.vercel.app/",
    githubUrl: "https://github.com/bryalwaysfindways/gds-budgetarian",
  },
  {
    id: 3,
    title: "Majestic Fragrance Perfume",
    description:
      "3D product render for a local perfume brand, featuring realistic materials, elegant lighting, and refined motion.",
    video: "/projects/0001-0250.mp4",
    tags: ["Blender", "Modeling", "Animation"],
    demoUrl: "https://www.facebook.com/people/Majestic-Fragrance/61560987964311/",
  },
  {
    id: 4,
    title: "MHARSMC Inventory System",
    description:
      "An inventory management system focused on stock monitoring, expiry tracking, and report-ready workflows for healthcare operations.",
    image: "/projects/mharsmc.png",
    tags: ["React", "JavaScript", "Vercel", "Inventory System"],
    demoUrl: "https://mharsmc-inventory-system.vercel.app/login",
    githubUrl: "https://github.com/itzYoriRyanC/MHARSMC-Inventory-System",
  },
  {
    id: 5,
    title: "Alano & Sons Weighted Credit Scoring",
    description:
      "A weighted credit scoring system designed to help evaluate applicants through structured scoring and decision support.",
    image: "/projects/alano.png",
    tags: ["XAML (WPF)", "C# (.NET)", "UI/UX", "Scoring Algorithm"],
     githubUrl: "https://github.com/itzYoriRyanC/weighted-credit-scoring-alano-and-sons",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground text-sm md:text-base leading-relaxed mb-12 max-w-xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to client needs, performance, and user
          experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden relative bg-black">
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
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                )}
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-[11px] font-medium tracking-tight border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-lg md:text-xl font-semibold tracking-tight leading-snug mb-1">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
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
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/itzYoriRyanC"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
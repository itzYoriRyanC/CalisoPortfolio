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
    images: ["/projects/dits.png", "/projects/dits1.png"],
    tags: [
      "Facebook",
      "Canva",
      "Content Creation",
      "Food Marketing",
      "Customer Engagement",
      "Online Orders",
    ],
    demoUrl: "https://www.facebook.com/mamaditskitchen",
  },
  {
    id: 8,
    title: "Cucina Online",
    description:
      "Managed social media and online presence for a food business, creating promotional content, assisting with customer inquiries, and supporting online orders and delivery coordination.",
    images: ["/projects/Conline.png"],
    tags: [
      "Facebook",
      "Content Creation",
      "Food Marketing",
      "Customer Engagement",
      "Online Orders",
    ],
    demoUrl: "https://www.facebook.com/cariton.thewheeldeal",
  },
  {
    id: 9,
    title: "3D Portfolio UI Design",
    description:
      "Designed the visual layout and wireframes for a 3D portfolio website, including UI structure, scene composition, and user flow planning for an interactive front-end experience.",
    images: ["/projects/3DGraphics.png"],
    tags: [
      "UI/UX Design",
      "Wireframing",
      "Figma",
      "3D Concept",
      "Frontend Planning",
    ],
  },
  {
    id: 10,
    title: "Google Data Analytics Certificate - Data, Data, Everywhere",
    description:
      "Completed the Google Data Analytics course on Coursera, covering the foundations of data, analytics workflows, and data-driven decision-making.",
    images: ["/projects/DataAnalyst.png"],
    tags: ["Google", "Coursera", "Data Analytics"],
    demoUrl: "https://www.coursera.org/account/accomplishments/certificate/I00HCV8ZSXC4",
  },
  {
    id: 11,
    title: "Google Data Analytics – Ask Questions to Make Data-Driven Decisions",
    description:
      "Completed a Google Data Analytics course on Coursera focused on asking effective questions, defining business problems, and supporting data-driven decision-making. Learned how to translate stakeholder needs into actionable analysis.",
    images: ["/projects/StructuredThinking.png"],
    tags: ["Google", "Coursera", "Data Analytics"],
    demoUrl: "https://www.coursera.org/account/accomplishments/certificate/3SI9WB6A5BJW",
  },
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
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="projects"
      className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>

          <p className="text-sm sm:text-base text-muted-foreground leading-7 max-w-2xl mx-auto">
            A selection of freelance, self-initiated, and academic projects
            showcasing my hands-on experience in development, design, and
            real-world problem solving.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project) => {
            const activeImageIndex = currentImages[project.id] || 0;

            return (
              <article
                key={project.id}
                className="group h-full flex flex-col overflow-hidden rounded-2xl border border-border/40 bg-card/95 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-48 sm:h-52 lg:h-56 overflow-hidden bg-black">
                  {project.video ? (
                    <video
                      src={project.video}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      autoPlay
                      muted
                      loop
                      playsInline
                    />
                  ) : (
                    <img
                      src={project.images?.[activeImageIndex] || project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                  )}

                  {project.images && project.images.length > 1 && (
                    <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5 rounded-full bg-black/25 px-2 py-1 backdrop-blur-sm">
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

                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="rounded-full border bg-secondary px-2.5 py-1 text-[11px] font-medium text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="mb-3 text-lg sm:text-xl font-semibold leading-tight min-h-[56px]">
                    {project.title}
                  </h3>

                  <p className="mb-6 text-sm leading-6 sm:leading-7 text-muted-foreground min-h-[108px] sm:min-h-[120px]">
                    {project.description}
                  </p>

                  <div className="mt-auto flex items-center gap-3">
                    {project.demoUrl && project.demoUrl !== "#" && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Open ${project.title}`}
                        className="inline-flex items-center justify-center rounded-full p-2 text-foreground/70 transition-colors duration-300 hover:text-primary hover:bg-primary/10"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`View ${project.title} source code`}
                        className="inline-flex items-center justify-center rounded-full p-2 text-foreground/70 transition-colors duration-300 hover:text-primary hover:bg-primary/10"
                      >
                        <Github size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://github.com/itzYoriRyanC"
            target="_blank"
            rel="noreferrer"
            className="cosmic-button mx-auto inline-flex w-fit items-center gap-2"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
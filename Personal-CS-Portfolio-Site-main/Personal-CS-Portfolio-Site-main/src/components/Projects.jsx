import { ArrowRight, ArrowUpRight, Github } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { profile } from "../data/profile";
import ElectricBorderWrapper from "./ui/ElectricBorderWrapper";

export const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, // animation happens only once
    });
  }, []);

  return (
    <section id="projects" className="relative w-full py-16 sm:py-20">
      <div data-aos="fade-up" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-4 text-center">
          <ElectricBorderWrapper radius={14} thickness={2} chaos={0.1} className="inline-block">
            <h2 className="text-3xl md:text-4xl font-bold px-4 py-2 inline-block">
              Featured <span className="text-primary">Projects</span>
            </h2>
          </ElectricBorderWrapper>
        </div>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          These projects reflect my approach to writing clean, maintainable code
          and building user-friendly interfaces. I’ve focused on practical
          solutions that balance performance, usability, and reliability.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {profile.projects.map((project, key) => (
            <ElectricBorderWrapper key={key} radius={18} thickness={2} chaos={0.12} className="rounded-lg card-hover w-full max-w-sm mx-auto">
            <div className="group bg-card rounded-lg overflow-hidden shadow-xs w-full">
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 border text-xs rounded-full bg-secondary text-secondary-foreground ">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl text-left font-semibold mb-3">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-left text-xs mb-4">
                  {project.description}
                </p>

                <ul className="text-left text-xs text-muted-foreground mb-4 space-y-1">
                  {project.highlights.map((highlight) => (
                    <li key={highlight}>• {highlight}</li>
                  ))}
                </ul>

                <div className="flex justify-between items-center">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cosmic-button text-xs text-muted-foreground font-semibold flex gap-1"
                  >
                    Live Link <ArrowUpRight size={16} />
                  </a>

                  <a
                    href={project.git}
                    className="text-foreground hover:text-primary transition-colors duration-300"
                  >
                    <Github />
                  </a>
                </div>
              </div>
            </div>
            </ElectricBorderWrapper>
          ))}
        </div>

        <div className="text-center mt-12">
          <ElectricBorderWrapper radius={18} thickness={2} chaos={0.08} className="inline-block">
            <a
              target="_blank"
              href={profile.github}
              className="cosmic-button w-fit flex items-center mx-auto gap-2"
            >
              Check My Github <ArrowRight size={16} />
            </a>
          </ElectricBorderWrapper>
        </div>
      </div>
    </section>
  );
};

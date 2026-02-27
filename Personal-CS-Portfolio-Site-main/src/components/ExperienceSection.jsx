import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { profile } from "../data/profile";
import keanLogo from "../assets/kean-logo.png";
import ElectricBorderWrapper from "./ui/ElectricBorderWrapper";

export const ExperienceSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <section id="experience" className="relative w-full py-16 sm:py-20">
      <div data-aos="fade-up" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-4 text-center">
          <ElectricBorderWrapper radius={14} thickness={2} chaos={0.1} className="inline-block">
            <h2 className="text-3xl md:text-4xl font-bold px-4 py-2 inline-block">
              Professional <span className="text-primary">Experience</span>
            </h2>
          </ElectricBorderWrapper>
        </div>

        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
          I contribute across research, campus IT operations, and technical instruction,
          applying software and systems knowledge in real-world environments.
        </p>

        <div className="space-y-6">
          {profile.experience.map((item) => (
            <ElectricBorderWrapper key={item.title} radius={18} thickness={2} chaos={0.12} className="rounded-lg card-hover w-full max-w-4xl mx-auto">
            <article className="bg-card rounded-lg p-6 sm:p-8 shadow-xs">
              <div className="flex items-start gap-4 md:gap-6 mb-4">
                <div className="shrink-0 self-start">
                  <div className="bg-white/5 border border-white/10 rounded-xl w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 overflow-hidden">
                    <img
                      src={keanLogo}
                      alt="Kean University"
                      className="w-full h-full object-cover opacity-80"
                    />
                  </div>
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                    <div>
                      <h3 className="text-xl font-semibold text-left">{item.title}</h3>
                      <p className="text-muted-foreground text-left">
                        {item.organization} · {item.location}
                      </p>
                    </div>
                    <p className="text-xl text-primary font-semibold text-left md:text-right">{item.period}</p>
                  </div>
                </div>
              </div>

              <ul className="space-y-2">
                {item.bullets.map((bullet) => (
                  <li key={bullet} className="text-sm text-muted-foreground text-left">
                    • {bullet}
                  </li>
                ))}
              </ul>
            </article>
            </ElectricBorderWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};
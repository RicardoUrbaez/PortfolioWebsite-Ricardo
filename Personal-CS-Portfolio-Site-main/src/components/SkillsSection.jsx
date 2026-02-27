import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { profile } from "../data/profile";
import ElectricBorderWrapper from "./ui/ElectricBorderWrapper";
import SkillIcon from "./SkillIcon";

const skillTypeMap = {
    Java: "devicon",
    Python: "devicon",
    JavaScript: "devicon",
    HTML: "devicon",
    SQL: "lucide",
    "C#": "devicon",
    "VS Code": "devicon",
    Cursor: "lucide",
    React: "devicon",
    "React Native": "devicon",
    "Node.js": "devicon",
    Express: "devicon",
    "Socket.IO": "si",
    OpenCV: "si",
    MediaPipe: "lucide",
    PostgreSQL: "devicon",
    MongoDB: "devicon",
    Git: "devicon",
    GitHub: "devicon",
    Postman: "si",
    Vercel: "si",
    "Okta Verification": "si",
    "Active Directory": "lucide",
    Windows: "devicon",
    macOS: "devicon",
    "Full-Stack Development": "lucide",
    "Computer Vision": "lucide",
    "AI/ML Integration": "lucide",
    "Prompt Engineering": "lucide",
    "QA Testing": "lucide",
    "DS&A": "lucide",
    "Computer Systems": "lucide",
    "IT Troubleshooting": "lucide",
    Networking: "lucide",
};

const skillGroups = [
    { title: "Languages", key: "languages" },
    { title: "Tools & Platforms", key: "technologies" },
    { title: "Concept Skills", key: "concepts" },
];

export const SkillsSection = () => {
    useEffect(() => {
      AOS.init({
        duration: 1000,
        once: false, // animation happens only once
      });
    }, []);

    return <section id="skills" className="relative w-full py-16 sm:py-20 bg-secondary/30">
        <div data-aos = "fade-up" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
                <ElectricBorderWrapper radius={14} thickness={2} chaos={0.1} className="inline-block">
                    <h2 className="text-3xl md:text-4xl font-bold px-4 py-2 inline-block">
                        My <span className="text-primary">Skills</span>
                    </h2>
                </ElectricBorderWrapper>
            </div>

                        <div className="space-y-10">
                            {skillGroups.map((group) => (
                                <div key={group.key} className="space-y-4">
                                    <h3 className="text-xl font-semibold text-left">{group.title}</h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                                        {profile.skills[group.key].map((skillName) => (
                                            <div
                                                key={skillName}
                                                className="group flex items-center gap-3 rounded-xl border border-border/70 bg-card/80 px-3 py-3 transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_14px_rgba(99,235,235,0.2)]"
                                            >
                                                <div className="shrink-0 flex items-center justify-center text-primary">
                                                    <SkillIcon type={skillTypeMap[skillName] ?? "lucide"} name={skillName} />
                                                </div>
                                                <span className="text-sm md:text-base font-medium text-left">{skillName}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
            </div>
        </div>
    </section>
}
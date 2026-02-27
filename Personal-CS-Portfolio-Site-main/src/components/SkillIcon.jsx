import {
  Binary,
  BrainCircuit,
  Building2,
  Cpu,
  Database,
  Eye,
  GitBranch,
  Layers,
  MessageSquareText,
  MousePointer2,
  Network,
  Scan,
  Wrench,
  BadgeCheck,
} from "lucide-react";
import { SiOkta, SiOpencv, SiPostman, SiSocketdotio, SiVercel } from "react-icons/si";

const deviconClassByName = {
  Java: "devicon-java-plain",
  Python: "devicon-python-plain",
  JavaScript: "devicon-javascript-plain",
  HTML: "devicon-html5-plain",
  "C#": "devicon-csharp-plain",
  "VS Code": "devicon-vscode-plain",
  React: "devicon-react-original",
  "React Native": "devicon-react-original",
  "Node.js": "devicon-nodejs-plain",
  Express: "devicon-express-original",
  PostgreSQL: "devicon-postgresql-plain",
  MongoDB: "devicon-mongodb-plain",
  Git: "devicon-git-plain",
  GitHub: "devicon-github-original",
  Windows: "devicon-windows8-original",
  macOS: "devicon-apple-original",
};

const simpleIconByName = {
  "Socket.IO": SiSocketdotio,
  OpenCV: SiOpencv,
  Postman: SiPostman,
  Vercel: SiVercel,
  "Okta Verification": SiOkta,
};

const lucideIconByName = {
  SQL: Database,
  Cursor: MousePointer2,
  MediaPipe: Scan,
  "Active Directory": Building2,
  "Full-Stack Development": Layers,
  "Computer Vision": Eye,
  "AI/ML Integration": BrainCircuit,
  "Prompt Engineering": MessageSquareText,
  "QA Testing": BadgeCheck,
  "DS&A": GitBranch,
  "Computer Systems": Cpu,
  "IT Troubleshooting": Wrench,
  Networking: Network,
};

export default function SkillIcon({ type, name }) {
  if (type === "devicon") {
    const className = deviconClassByName[name];
    if (!className) return <Binary className="skillIcon" aria-hidden="true" />;
    return <i className={`${className} skillIcon`} aria-hidden="true" />;
  }

  if (type === "si") {
    const IconComponent = simpleIconByName[name];
    if (!IconComponent) return <Binary className="skillIcon" aria-hidden="true" />;
    return <IconComponent className="skillIcon" aria-hidden="true" />;
  }

  if (type === "lucide") {
    const IconComponent = lucideIconByName[name];
    if (!IconComponent) return <Binary className="skillIcon" aria-hidden="true" />;
    return <IconComponent className="skillIcon" aria-hidden="true" />;
  }

  return <Binary className="skillIcon" aria-hidden="true" />;
}

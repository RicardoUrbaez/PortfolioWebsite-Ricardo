export const profile = {
  name: "Ricardo Urbaez",
  role: "Computer Science student (Kean '26) focused on full-stack development, computer vision, and applied AI.",
  heroCta: "View My Work",
  email: "Urbaezr@kean.edu",
  phone: "732-277-8403",
  website: "https://RicardoUrbaez.com",
  github: "https://github.com/RicardoUrbaez",
  linkedin: "https://www.linkedin.com/in/ricardourbaez/",
  location: "Union, New Jersey, USA",
  resumePath: "/Resume/Resume___Ricardo_Urbaez (2).pdf",
  aboutTitle: "Computer Science student at Kean University with minors in Cybersecurity and Mathematics, graduating in May 2026.",
  about: [
    "I work at the intersection of applied AI, campus technology support, and teaching. I enjoy taking complex technical problems and turning them into practical solutions.",
    "As a Research and Development Intern at Kean’s Center for Undergraduate Research, I build emotion detection systems for text and evaluate how different models perform across real data, while also running container networking experiments that measure throughput and latency.",
    "In my role with Kean IT OCIS, I provide Level 1 and Level 2 support across hardware, software, Wi Fi and VPN access, authentication, printing, and device setup for a large campus community.",
    "I also serve as a Supplemental Instructor and Code Samurai CS Tutor, where I help students strengthen their foundations in computer science, math, and problem solving through clear guidance and consistent support."
  ],
  experience: [
    {
      title: "Research and Development Intern",
      organization: "Center for Undergraduate Research, Kean University",
      location: "Union, NJ",
      period: "Jun 2025 – Present",
      bullets: [
        "Built a Python AI system for emotion detection from text using a GoEmotions-trained BERT model across 27 categories.",
        "Compared model behavior and outputs across OpenAI, Qwen, Gemini, and Claude to evaluate consistency and quality.",
        "Conducted a secure-cloud container networking study measuring throughput and latency across configurations and workloads."
      ]
    },
    {
      title: "Desktop Support Technician",
      organization: "Kean IT OCIS",
      location: "Union, NJ",
      period: "Dec 2024 – Present",
      bullets: [
        "Delivered Level 1-2 desktop and network support for 4,000+ users across hardware, software, Wi-Fi/VPN, authentication, printing, and imaging.",
        "Standardized troubleshooting and documentation workflows to improve support quality and consistency.",
        "Escalated complex incidents effectively and mentored fellow student technicians."
      ]
    },
    {
      title: "Supplemental Instructor + Code Samurai CS Tutor",
      organization: "Department of CS & Technology",
      location: "Union, NJ",
      period: "Aug 2024 – Present",
      bullets: [
        "Mentored students in Computer Systems, Algorithms, Computer Organization/Architecture, Data Structures, Java, Linux, Python, and Cloud System Administration.",
        "Supported foundational STEM learning in Pre-Calculus, Calculus I-II, and General Chemistry I.",
        "Reinforced problem-solving habits and academic confidence through structured technical coaching."
      ]
    }
  ],
  projects: [
    {
      id: 1,
      title: "AutoShop Appointment & Service Management System",
      description:
        "Led a team of 5 to deploy a full-stack app for R&L Auto Repair to book appointments, select services, and manage shop workflow.",
      image: "/Images/Mercedes.jpg",
      tags: ["React", "Node.js", "Express", "PostgreSQL", "Tekmetric API", "Vercel", "Supabase", "Postman"],
      highlights: [
        "Stored customer and vehicle records, including year/make/model and VIN, in Supabase.",
        "Integrated Tekmetric API for job status synchronization and validated workflows with Postman."
      ],
      url: "https://RicardoUrbaez.com",
      git: "https://github.com/RicardoUrbaez"
    },
    {
      id: 2,
      title: "Computer Vision Tetris Game",
      description:
        "Built classic Tetris with single-player and real-time two-player gameplay, including competitive mechanics that increase opponent difficulty.",
      image: "/Projects/Tetris.jpg",
      tags: ["Node.js", "Socket.IO", "Phaser 3", "Python", "OpenCV", "MediaPipe"],
      highlights: [
        "Implemented CV hand-gesture controls through a Python pipeline using OpenCV and MediaPipe.",
        "Added keyboard fallback controls to preserve accessibility and gameplay reliability."
      ],
      url: "https://RicardoUrbaez.com",
      git: "https://github.com/RicardoUrbaez"
    },
    {
      id: 3,
      title: "Journal + Meditation App",
      description:
        "Developed a cross-platform journaling and meditation app with secure authentication, personalized prompts, and guided mindfulness content.",
      image: "/Images/Meditation-man-meditating-scaled.jpeg",
      tags: ["React Native", "Node.js", "Express", "PostgreSQL", "Firebase Auth", "OpenAI"],
      highlights: [
        "Engineered a Node/Express backend with PostgreSQL to store entries and user history.",
        "Integrated OpenAI to generate personalized journaling prompts and meditation guidance."
      ],
      url: "https://RicardoUrbaez.com",
      git: "https://github.com/RicardoUrbaez"
    }
  ],
  skills: {
    languages: ["Java", "Python", "JavaScript", "HTML", "SQL", "C#"],
    technologies: [
      "VS Code",
      "Cursor",
      "React",
      "React Native",
      "Node.js",
      "Express",
      "Socket.IO",
      "OpenCV",
      "MediaPipe",
      "PostgreSQL",
      "MongoDB",
      "Git",
      "GitHub",
      "Postman",
      "Vercel",
      "Okta Verification",
      "Active Directory",
      "Windows",
      "macOS"
    ],
    concepts: [
      "Full-Stack Development",
      "Computer Vision",
      "AI/ML Integration",
      "Prompt Engineering",
      "QA Testing",
      "DS&A",
      "Computer Systems",
      "IT Troubleshooting",
      "Networking",
      "Software Engineering Ethics"
    ]
  }
};
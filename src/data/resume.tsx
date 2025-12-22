import { Icons } from "@/components/icons";
import { CodeIcon, HomeIcon } from "lucide-react";

export const DATA = {
  name: "Anuj Kumar",
  initials: "AK",
  url: "https://x.com/anujxforge",
  location: "Noida, Uttar Pradesh, India",
  locationLink: "https://www.google.com/maps/place/Noida",
  description:
    "Self-taught Full Stack Developer building scalable web applications. Active in hackathons and open source.",
  summary:
    "Hey! I'm Anuj Kumar, a self-taught full stack developer from Noida, India. I'm currently pursuing my Bachelor's in **Computer Science and Technology**. I love building software that solves real-world problems, which is why I actively [participate in hackathons](/#hackathons) where most of my projects are developed. My everyday tech stack includes **Next.js, TypeScript, Prisma ORM, Docker** and more. I'm always open for freelance projects and collaborations!",
  avatarUrl: "/pp.jpeg",
  skills: [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Go",
    "PostgreSQL",
    "MongoDB",
    "Docker",
    "Redis",
    "Prisma",
    "Tailwind CSS",
    "Python",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/snippets", icon: CodeIcon, label: "Snippets" },
  ],
  contact: {
    email: "anuj846k@gmail.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/anuj846k",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/anuj-kumar-6aa13b264/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/anujxforge",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:anuj846k@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [

    {
      company: "Freelance",
      href: "https://github.com/anuj846k",
      badges: ["Remote"],
      location: "Remote",
      title: "Full Stack Developer",
      logoUrl: "/codesblue.png",
      start: "March 2025",
      end: "Present",
      description:
        "Developing scalable web and mobile applications for diverse clients. Built trekking company backend, managed AWS infrastructure and CRM systems for an adventure park, and engineered Not OUT, a real-time fantasy cricket platform with live contest features.",
    },
    {
      company: "Propview.ai",
      href: "https://github.com/anuj846k",
      badges: ["Remote"],
      location: "Remote",
      title: "Full Stack Developer",
      logoUrl: "/propviewLOGO.svg",
      start: "July 2025",
      end: "August 2025",
      description:
        "Built a AI application for real estate. Engineered intelligent AI agents and a robust backend infrastructure using FastAPI and the Agno framework to automate property discovery and insights.",
    },
    {
      company: "Open Source & Hackathons",
      href: "https://github.com/anuj846k",
      badges: [],
      location: "Remote",
      title: "Developer",
      logoUrl: "",
      start: "March 2023",
      end: "Present",
      description:
        "Active participant in hackathons with multiple wins. Building open-source projects including HopesAlive (animal rescue platform), Interview Genie (AI-powered interview prep), and more.",
    },
  ],
  education: [
    {
      school: "AKTU University (B.Tech CSE(Data Science))",
      href: "https://aktu.ac.in/",
      degree: "Bachelor's in Computer Science and Technology",
      logoUrl: "https://aktu.ac.in/images/logo.png",
      start: "2021",
      end: "2025",
    },
  ],
  projects: [

    {
      title: "CodesBlue",
      href: "https://www.codesblue.com/",
      dates: "2025",
      active: true,
      description:
        "Modern agency landing page with sleek design, smooth animations, and responsive layout for a professional web presence.",
      technologies: [
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "Framer Motion",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.codesblue.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/landing.png",
      video: "",
    },
    {
      title: "EOD Parks",
      href: "https://www.eodparks.com/",
      dates: "2025",
      active: true,
      description:
        "Adventure park platform in Delhi with live users, 100% uptime, and 400ms latency. Full-stack solution for booking and park management.",
      technologies: [
        "Next.js",
        "TypeScript",
        "AWS",
        "MongoDB",
        "Vercel",
        "Resend",
        "Razorpay"
      ],
      links: [
        {
          type: "Website",
          href: "https://www.eodparks.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/eod.png",
      video: "",
    },

    {
      title: "CollisionCloud 🚗",
      href: "https://github.com/anuj846k/Collision-Cloud",
      dates: "2025",
      active: true,
      description:
        "AI-powered accident reconstruction from CCTV footage. Detects collisions, tracks vehicles, generates PDF reports & audio summaries in English/Hindi using Kestra, Gemini AI, and ElevenLabs.",
      technologies: [
        "Next.js",
        "FastAPI",
        "Kestra",
        "Gemini AI",
        "Python",
        "OpenCV",
      ],
      links: [
        {
          type: "Source",

          href: "https://github.com/anuj846k/Collision-Cloud",
          icon: <Icons.github className="size-3" />,
        },

        {
          type: "Demo",
          href: "https://www.youtube.com/watch?v=TlImgfYaTP4",
          icon: <Icons.youtube className="size-3" />,
        }
      ],
      image: "https://raw.githubusercontent.com/anuj846k/Collision-Cloud/main/accident-frontend/public/step1.png",
      video: "",
    },
    {
      title: "Interview Genie 🧞‍♂️",
      href: "https://interview-genie-eta.vercel.app/",
      dates: "2025",
      active: true,
      description:
        "AI-powered interview practice platform providing real-time feedback to boost confidence and help land dream jobs.",
      technologies: [
        "Next.js",
        "TypeScript",
        "AI/ML",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://interview-genie-eta.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/anuj846k/InterviewGenie",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/robot.png",
      video: "",
    },
    {
      title: "MealOBox Vendor App",
      href: "https://github.com/anuj846k/MealOBox",
      dates: "2025",
      active: true,
      description:
        "Platform connecting home chefs with customers seeking authentic homemade meals. Vendor app for managing menus, orders, and payments.",
      technologies: [
        "React Native",
        "TypeScript",
        "Node.js",
        "MongoDB",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/anuj846k/MealOBox",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/mealobox.png",
      video: "",
    },
    {
      title: "Not OUT Fantasy App",
      href: "https://github.com/anuj846k/NotOut99-FantasyAPP.git",
      dates: "2025",
      active: true,
      description:
        "Dynamic fantasy cricket platform where enthusiasts create dream teams, compete in contests based on real matches, and win rewards.",
      technologies: [
        "React Native",
        "TypeScript",
        "Node.js",
        "PostgreSQL",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/anuj846k/NotOut99-FantasyAPP.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/notout.png",
      video: "",
    },
    {
      title: "HopesAlive",
      href: "https://hopes-alive.vercel.app/",
      dates: "2025",
      active: true,
      description:
        "Web platform for reporting animal-related incidents. NGOs and volunteers are promptly notified for quick action.",
      technologies: [
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "Prisma",
      ],
      links: [
        {
          type: "Website",
          href: "https://hopes-alive.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/anuj846k/HopesAlive",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/hopesalive.png",
      video: "",
    },
    {
      title: "90's Developers Blog",
      href: "https://90-s-blog-codedex-hackathon.vercel.app/",
      dates: "2024",
      active: true,
      description:
        "Innovative Dev.to reimagination with 1990s look and feel. Combines vintage web design with modern features. 🏆 Hackathon Winner",
      technologies: [
        "Next.js",
        "TypeScript",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://90-s-blog-codedex-hackathon.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/anuj846k/90-s-Blog-Codedex-Hackathon",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/retro.png",
      video: "",
    },
    {
      title: "ML Model Automation",
      href: "https://github.com/anuj846k/HACKFROST-POLARDEV",
      dates: "2024",
      active: true,
      description:
        "Automated ML pipeline monitoring data drift, retraining, and redeploying models with Kestra orchestration. 🏆 Hackathon Winner",
      technologies: [
        "Python",
        "Kestra",
        "Machine Learning",
        "Docker",
      ],
      links: [
        {
          type: "Demo",
          href: "https://youtu.be/VPWFfgOpi6E?si=yv14FKrQW7Wl4Lbs",
          icon: <Icons.youtube className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/anuj846k/HACKFROST-POLARDEV",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Codedex Hackathon",
      dates: "2024",
      location: "Online",
      description:
        "Built 90's Developers Blog - reimagined Dev.to with vintage 1990s look and feel. Won for creative design and execution.",
      image: "https://api.accredible.com/v1/frontend/credential_website_embed_image/badge/126917254",
      win: "Winner 🏆",
      links: [
        {
          title: "Project",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://90-s-blog-codedex-hackathon.vercel.app/",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/anuj846k/90-s-Blog-Codedex-Hackathon",
        },
      ],
    },
    {
      title: "HackFrost - PolarDev",
      dates: "2024",
      location: "Online",
      description:
        "Developed ML Model Automation pipeline with Kestra for monitoring data drift, retraining, and redeploying models automatically.",
      image: "/wkm.png",
      win: "Winner 🏆",
      links: [
        {
          title: "Demo",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://youtu.be/VPWFfgOpi6E?si=yv14FKrQW7Wl4Lbs",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/anuj846k/HACKFROST-POLARDEV",
        },
      ],
    },
    {
      title: "HopesAlive Hackathon",
      dates: "2024",
      location: "Online",
      description:
        "Built HopesAlive - a platform for reporting animal-related incidents and notifying NGOs and volunteers for quick rescue action.",
      image: "https://d2dmyh35ffsxbl.cloudfront.net/assets/reimagine2/devpost-logo-mobile-f3aff76bfc0b6ada9bb4ddd773bfc534769ed793f962612804a1e84c305a5f94.svg",
      links: [
        {
          title: "Website",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://hopes-alive.vercel.app/",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/anuj846k/HopesAlive",
        },
      ],
    },
  ],
} as const;

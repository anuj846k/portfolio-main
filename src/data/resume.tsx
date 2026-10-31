import { Icons } from '@/components/icons';
import { CodeIcon, HomeIcon } from 'lucide-react';

export const DATA = {
  name: 'Anuj Kumar',
  initials: 'AK',
  url: 'https://www.anuj846k.dev',
  location: 'Noida, Uttar Pradesh, India',
  locationLink: 'https://www.google.com/maps/place/Noida',
  description:
    'Full-Stack Engineer focused on performance, scalability, and shipping production-grade software.',
  summary:
    'Full-Stack Engineer focused on performance, scalability, and shipping production-grade software.\n\nCurrently freelancing — shipped a **live adventure park platform** (100% uptime, 400ms latency), a **role-based trek management system**, an **AI-powered accident reconstruction tool**, an **AI-powered outreach platform**, and an **AI-driven real estate platform** at Propview.ai.\n\nI pick up whatever stack a problem needs and ship it fast. Multiple [hackathon winner](/#hackathons) and always open to collaborations.',
  avatarUrl: '/images/avatar/avatar.png',
  resumeUrl: '/files/anuj-kumar-resume.pdf',
  bookingUrl: 'https://cal.com/anuj846k/30min',
  navbar: [
    { href: '/', icon: HomeIcon, label: 'Home' },

    { href: '/snippets', icon: CodeIcon, label: 'Snippets' },
  ],
  contact: {
    email: 'anuj846k@gmail.com',
    tel: '',
    social: {
      GitHub: {
        name: 'GitHub',
        url: 'https://github.com/anuj846k',
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/anuj-kumar-jaiswal-6aa13b264/',
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: 'X',
        url: 'https://x.com/anujxforge',
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: 'Send Email',
        url: 'mailto:anuj846k@gmail.com',
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: 'CampusMesh',
      href: 'https://campusmesh.com',
      badges: ['Remote'],
      location: 'Remote',
      title: 'Software Engineer Intern – Backend',
      logoUrl: '/images/logos/campusmesh.svg',
      logoBackground: '#9391FC',
      start: 'August 2026',
      end: 'October 2026',
      description:
        'Built the backend for the B2B Institution and Employer portals on 15 AWS Lambda microservices. Shipped the Institution Portal (84 APIs) and the Employer Portal (45 APIs), and architected JobMesh, which scrapes jobs from 170+ ATS sources into an S3 data lake.',
    },
    {
      company: 'Freelance',
      href: 'https://github.com/anuj846k',
      badges: ['Remote'],
      location: 'Remote',
      title: 'Full Stack Developer',
      logoUrl: '/images/logos/codesblue.png',
      start: 'March 2025',
      end: 'Present',
      description:
        'Developing scalable web and mobile applications for diverse clients. Built trekking company backend, managed AWS infrastructure and CRM systems for an adventure park, and engineered Not OUT, a real-time fantasy cricket platform with live contest features.',
    },
    {
      company: 'Propview.ai',
      href: 'https://github.com/anuj846k',
      badges: ['Remote'],
      location: 'Remote',
      title: 'Full Stack Developer',
      logoUrl: '/images/logos/propview.svg',
      start: 'July 2025',
      end: 'August 2025',
      description:
        'Built a AI application for real estate. Engineered intelligent AI agents and a robust backend infrastructure using FastAPI and the Agno framework to automate property discovery and insights.',
    },
  ],
  certifications: [
    {
      title: 'AWS Academy Cloud Architecting',
      issuer: 'Amazon Web Services',
      href: 'https://www.credly.com/badges/efeff9ab-712b-4cb1-aae6-2682f63e1d30',
      image:
        'https://images.credly.com/images/fcafd0c9-42da-4703-a191-0c397203dc1b/linkedin_thumb_blob',
    },
    {
      title: 'Codedex Hackathon Winner',
      issuer: 'Codédex',
      href: 'https://www.credential.net/126917254',
      image:
        'https://api.accredible.com/v1/frontend/credential_website_embed_image/badge/126917254',
    },
    {
      title: 'Codedex React Course',
      issuer: 'Codédex',
      href: 'https://www.credential.net/110689200',
      image:
        'https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/110689200',
    },
    {
      title: 'The Legend of Python - Python Course',
      issuer: 'Codédex',
      href: 'https://www.credential.net/107093355',
      image:
        'https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/107093355',
    },
  ],
  projects: [
    {
      title: 'EOD Parks',
      href: 'https://www.eodparks.com/',
      dates: '2025',
      active: true,
      description:
        'End-to-end platform for EOD Adventure Parks across 4 parks in Delhi, Ghaziabad and Agra. About 400ms API latency, 70K+ monthly visitors and 143K+ pageviews.',
      highlights: [
        '**Booking website:** tickets, annual passes and offers with weekday and weekend pricing, Razorpay payments with webhooks, QR tickets and Inngest background jobs.',
        '**Staff app:** Expo app to scan tickets, wristbands and passes at the gate, with over-the-air updates.',
        '**EventCRM:** lead tracking for school, corporate and birthday events, with round-robin assignment, call transcription, email campaigns and an AI assistant on MCP.',
        '**Ops dashboard:** finance and operations reports that merge POS and ticketing sales, with nightly S3 backups.',
      ],
      technologies: [
        'Next.js',
        'TypeScript',
        'React Native',
        'Expo',
        'Node.js',
        'Express',
        'MongoDB',
        'AWS',
        'Razorpay',
        'Inngest',
        'Vercel',
      ],
      links: [
        {
          type: 'Website',
          href: 'https://www.eodparks.com/',
          icon: <Icons.globe className='size-3' />,
        },
      ],
      image: '/images/projects/eod-parks.png',
      video: '',
    },
    {
      title: 'Scalo',
      href: 'https://scalocx.com',
      dates: '2026',
      active: true,
      description:
        'AI customer feedback platform that pulls reviews from Google Reviews, Instagram, Zendesk and CSV into one place. Feedback is embedded with Gemini and stored in pgvector, so teams can chat with it in plain language. Includes daily Inngest syncs, multi-workspace auth and an MCP server for AI editors.',
      technologies: [
        'Next.js',
        'TypeScript',
        'PostgreSQL',
        'pgvector',
        'Drizzle',
        'Gemini',
        'Vercel AI SDK',
        'Inngest',
        'MCP',
      ],
      links: [
        {
          type: 'Website',
          href: 'https://scalocx.com',
          icon: <Icons.globe className='size-3' />,
        },
      ],
      image: 'https://www.scalocx.com/og.png',
      video: '',
    },
    {
      title: 'Reachy',
      href: 'https://reachy-outreach.vercel.app',
      dates: '2026',
      active: true,
      description:
        'AI-powered outreach platform that extracts prospect profiles from URLs through background workflows, and generates personalized outreach messages with conversation memory for follow-ups. Built with Inngest for durable background job orchestration and Gemini for AI consolidation.',
      technologies: [
        'Next.js 15',
        'TypeScript',
        'Neon PostgreSQL',
        'Drizzle ORM',
        'Inngest',
        'AI Sdk',
        'Firecrawl',
        'Apify',
        'Better Auth',
        'Tailwind CSS',
      ],
      links: [
        {
          type: 'Website',
          href: 'https://reachy-outreach.vercel.app',
          icon: <Icons.globe className='size-3' />,
        },
        {
          type: 'Source',
          href: 'https://github.com/anuj846k/reachy-outreach',
          icon: <Icons.github className='size-3' />,
        },
      ],
      image: '/images/projects/reachy.png',
      video: '',
    },
    {
      title: 'CodesBlue',
      href: 'https://codesblue-git-main-kshitijakarshs-projects.vercel.app/',
      dates: '2025',
      active: true,
      description:
        'Modern agency landing page with sleek design, smooth animations, and responsive layout for a professional web presence.',
      technologies: ['Next.js', 'TypeScript', 'TailwindCSS', 'Framer Motion'],
      links: [
        {
          type: 'Website',
          href: 'https://codesblue-git-main-kshitijakarshs-projects.vercel.app/',
          icon: <Icons.globe className='size-3' />,
        },
      ],
      image: '/images/projects/codesblue.png',
      video: '',
    },
    {
      title: 'Travel agency platform',
      href: 'https://ttt.swifty9.com',
      dates: '2025',
      active: true,
      description:
        'Role-based trek management platform with User, Admin, and Superadmin dashboards. Built on PostgreSQL (Neon) with Prisma ORM and Twilio integration for OTP verification and notifications.',
      technologies: [
        'NodeJs',
        'TypeScript',
        'NeonDB',
        'Twilio',
        'Resend',
        'NextJs',
        'Tanstack',
        'Tailwind css',
      ],
      links: [
        {
          type: 'Website',
          href: 'https://ttt.swifty9.com',
          icon: <Icons.globe className='size-3' />,
        },
      ],
      image: '/images/projects/trek-platform.png',
      video: '',
    },
    

    {
      title: 'Not OUT Fantasy App',
      href: 'https://github.com/anuj846k/NotOut99-FantasyAPP.git',
      dates: '2025',
      active: true,
      description:
        'Dynamic fantasy cricket platform where enthusiasts create dream teams, compete in contests based on real matches, and win rewards.',
      technologies: [
        'React Native',
        'TypeScript',
        'Node.js',
        'MongoDB',
        'Twilio',
      ],
      links: [
        {
          type: 'Source',
          href: 'https://github.com/anuj846k/NotOut99-FantasyAPP.git',
          icon: <Icons.github className='size-3' />,
        },
      ],
      image: '/images/projects/notout-fantasy.png',
      video: '',
    },
  ],
  hackathonsCount: 10,
  hackathons: [
    {
      title: 'Codedex Hackathon',
      dates: '2024',
      location: 'Online',
      description:
        "Built 90's Developers Blog - reimagined Dev.to with vintage 1990s look and feel. Won for creative design and execution.",
      image:
        'https://api.accredible.com/v1/frontend/credential_website_embed_image/badge/126917254',
      win: 'Winner 🏆',
      links: [
        {
          title: 'Project',
          icon: <Icons.globe className='h-4 w-4' />,
          href: 'https://90-s-blog-codedex-hackathon.vercel.app/',
        },
        {
          title: 'Source',
          icon: <Icons.github className='h-4 w-4' />,
          href: 'https://github.com/anuj846k/90-s-Blog-Codedex-Hackathon',
        },
      ],
    },
    {
      title: 'HackFrost - PolarDev',
      dates: '2024',
      location: 'Online',
      description:
        'Developed ML Model Automation pipeline with Kestra for monitoring data drift, retraining, and redeploying models automatically.',
      image: '/images/projects/hackfrost-polardev.png',
      win: 'Winner 🏆',
      links: [
        {
          title: 'Demo',
          icon: <Icons.youtube className='h-4 w-4' />,
          href: 'https://youtu.be/VPWFfgOpi6E?si=yv14FKrQW7Wl4Lbs',
        },
        {
          title: 'Source',
          icon: <Icons.github className='h-4 w-4' />,
          href: 'https://github.com/anuj846k/HACKFROST-POLARDEV',
        },
      ],
    },
    {
      title: 'LMA EDGE Hackathon',
      dates: '2026',
      location: 'Online',
      description:
        'AI that turns legal loan agreements into automated compliance calculations',
      image:
        'https://d2dmyh35ffsxbl.cloudfront.net/assets/reimagine2/devpost-logo-mobile-f3aff76bfc0b6ada9bb4ddd773bfc534769ed793f962612804a1e84c305a5f94.svg',
      links: [
        {
          title: 'Website',
          icon: <Icons.globe className='h-4 w-4' />,
          href: 'https://axiom-complier.vercel.app',
        },
        {
          title: 'Source',
          icon: <Icons.github className='h-4 w-4' />,
          href: 'https://github.com/anuj846k/Covenant-Logic-Compiler-',
        },
      ],
    },
  ],
} as const;

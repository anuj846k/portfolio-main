import Github from '@/components/Github';
import { AnimatedText } from '@/components/animated-text';
import { CredlyBadge } from '@/components/credly-badge';
import { HackathonCard } from '@/components/hackathon-card';
import BlurFade from '@/components/magicui/blur-fade';
import { ProjectCard } from '@/components/project-card';
import { ResumeCard } from '@/components/resume-card';
import Docker from '@/components/technologies/Docker';
import Expo from '@/components/technologies/Expo';
import FastApi from '@/components/technologies/FastApi';
import Kubernetes from '@/components/technologies/Kubernetes';
import MongoDBIcon from '@/components/technologies/MongoDB';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import PostgreSQLIcon from '@/components/technologies/PostgreSQL';
import PrismaIcon from '@/components/technologies/Prisma';
import Python from '@/components/technologies/Python';
import ReactIcon from '@/components/technologies/ReactIcon';
import ReactNative from '@/components/technologies/ReactNative';
import ShadcnIcon from '@/components/technologies/Shadcn';
import TailwindCssIcon from '@/components/technologies/TailwindCss';
import TypeScriptIcon from '@/components/technologies/TypeScript';
import { ThemeAvatar } from '@/components/theme-avatar';
import { DATA } from '@/data/resume';
import Link from 'next/link';
import Markdown from 'react-markdown';

const BLUR_FADE_DELAY = 0.04;

const SKILL_ICON_MAP: Record<string, React.ReactNode> = {
  React: <ReactIcon />,
  'Next.js': <NextJs />,
  TypeScript: <TypeScriptIcon />,
  'Node.js': <NodeJs />,
  PostgreSQL: <PostgreSQLIcon />,
  MongoDB: <MongoDBIcon />,
  Prisma: <PrismaIcon />,
  'Shadcn UI': <ShadcnIcon />,
  'Tailwind CSS': <TailwindCssIcon />,
  FastAPI: <FastApi />,
  Python: <Python />,
  Docker: <Docker />,
  Expo: <Expo />,
  'React Native': <ReactNative />,
  Kubernetes: <Kubernetes />,
};

export default function Page() {
  return (
    <div className="relative min-h-[100dvh] w-full selection:bg-primary selection:text-primary-foreground">
      <main className="relative flex flex-col min-h-screen space-y-10 rounded-xl my-8 bg-background max-w-6xl mx-auto px-6 py-8 sm:py-12 lg:py-8">
        <section id="hero">
          <div className="mx-auto w-full space-y-8 flex flex-col items-center text-center">
            <BlurFade delay={BLUR_FADE_DELAY}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/30 to-primary/20 blur-3xl opacity-50 rounded-full animate-pulse" />
                <ThemeAvatar
                  name={DATA.name}
                  initials={DATA.initials}
                  className="size-32 md:size-40 border-4 border-border shadow-xl relative"
                />
              </div>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 2}>
              <div className="space-y-2">
                <h1 className="font-serif text-3xl font-bold sm:text-5xl xl:text-6xl/none">
                  Hi, I&apos;m {DATA.name.split(' ')[0]}
                </h1>
                <p className="text-muted-foreground flex items-center justify-center gap-2 text-sm">
                  <span className="inline-flex items-center rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium">
                    Noida, India
                  </span>
                  <span className="text-muted-foreground/60">•</span>
                  <span>Full Stack Developer</span>
                </p>
              </div>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 3}>
              <div className="h-8 flex items-center justify-center">
                <AnimatedText />
              </div>
            </BlurFade>
          </div>
        </section>
        <section id="about">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <h2 className="font-serif text-xl font-bold">About</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
              {DATA.summary}
            </Markdown>
          </BlurFade>
        </section>
        <section id="work">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 5}>
              <h2 className="font-serif text-xl font-bold">Work Experience</h2>
            </BlurFade>
            {DATA.work.map((work, id) => (
              <BlurFade
                key={work.company}
                delay={BLUR_FADE_DELAY * 6 + id * 0.05}
              >
                <ResumeCard
                  key={work.company}
                  logoUrl={work.logoUrl}
                  altText={work.company}
                  title={work.company}
                  subtitle={work.title}
                  href={work.href}
                  badges={work.badges}
                  period={`${work.start} - ${work.end ?? 'Present'}`}
                  description={work.description}
                />
              </BlurFade>
            ))}
          </div>
        </section>
        <section id="education">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 7}>
              <h2 className="font-serif text-xl font-bold">Education</h2>
            </BlurFade>
            {DATA.education.map((education, id) => (
              <BlurFade
                key={education.school}
                delay={BLUR_FADE_DELAY * 8 + id * 0.05}
              >
                <ResumeCard
                  key={education.school}
                  href={education.href}
                  logoUrl={education.logoUrl}
                  altText={education.school}
                  title={education.school}
                  subtitle={education.degree}
                  period={`${education.start} - ${education.end}`}
                />
              </BlurFade>
            ))}
          </div>
        </section>
        <section id="certifications">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 8.5}>
              <h2 className="font-serif text-xl font-bold">Certifications</h2>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 8.7}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="flex flex-col items-center justify-between gap-4 rounded-xl border bg-card/40 p-4 shadow-sm transition hover:border-primary/60 hover:bg-card/80 min-h-[350px]">
                  <div className="flex flex-1 items-center justify-center w-full">
                    <CredlyBadge
                      badgeId="efeff9ab-712b-4cb1-aae6-2682f63e1d30"
                      width="150"
                      height="270"
                      className="flex items-center justify-center"
                    />
                  </div>
                  <p className="text-sm font-medium text-muted-foreground text-center">
                    AWS Academy Cloud Architecting
                  </p>
                </div>
                <div className="flex flex-col items-center justify-between gap-4 rounded-xl border bg-card/40 p-4 shadow-sm transition hover:border-primary/60 hover:bg-card/80 min-h-[350px]">
                  <div className="flex flex-1 items-center justify-center w-full">
                    <Link href="https://www.credential.net/126917254" target="_blank" className="flex items-center justify-center w-full h-full cursor-pointer">
                      <img
                        src="https://api.accredible.com/v1/frontend/credential_website_embed_image/badge/126917254"
                        alt="Codedex Hackathon Winner"
                        className="max-h-[270px] w-auto object-contain transition-transform hover:scale-105"
                      />
                    </Link>
                  </div>
                  <p className="text-sm font-medium text-muted-foreground text-center">
                    Codedex Hackathon Winner
                  </p>
                </div>
                <div className="flex flex-col items-center justify-between gap-4 rounded-xl border bg-card/40 p-4 shadow-sm transition hover:border-primary/60 hover:bg-card/80 min-h-[350px]">
                  <div className="flex flex-1 items-center justify-center w-full">
                    <Link href="https://www.credential.net/110689200" target="_blank" className="flex items-center justify-center w-full h-full cursor-pointer">
                      <img
                        src="https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/110689200"
                        alt="AI Certification"
                        className="max-h-[270px] w-auto object-contain rounded-md transition-transform hover:scale-105"
                      />
                    </Link>
                  </div>
                  <p className="text-sm font-medium text-muted-foreground text-center">
                    Codedex React Course 
                  </p>
                </div>
                <div className="flex flex-col items-center justify-between gap-4 rounded-xl border bg-card/40 p-4 shadow-sm transition hover:border-primary/60 hover:bg-card/80 min-h-[350px]">
                  <div className="flex flex-1 items-center justify-center w-full">
                    <Link href="https://www.credential.net/107093355" target="_blank" className="flex items-center justify-center w-full h-full cursor-pointer">
                      <img
                        src="https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/107093355"
                        alt="Certification"
                        className="max-h-[270px] w-auto object-contain rounded-md transition-transform hover:scale-105"
                      />
                    </Link>
                  </div>
                  <p className="text-sm font-medium text-muted-foreground text-center">
                    Certification
                  </p>
                </div>
              </div>
            </BlurFade>
          </div>
        </section>
        <section id="skills">
          <div className="flex min-h-0 flex-col gap-y-4">
            <BlurFade delay={BLUR_FADE_DELAY * 9}>
              <div>
                <p className="font-serif text-xs font-medium uppercase tracking-wide text-primary">
                  Technologies & Tools
                </p>
              </div>
            </BlurFade>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {DATA.skills.map((skill, id) => {
                const icon = SKILL_ICON_MAP[skill];
                const fallbackInitials = skill
                  .split(/[\s.]+/)
                  .map((part) => part[0])
                  .join('')
                  .slice(0, 3);

                return (
                  <BlurFade
                    key={skill}
                    delay={BLUR_FADE_DELAY * 10 + id * 0.05}
                  >
                    <div className="group flex items-center gap-3 rounded-xl border bg-card/40 px-3 py-2 text-sm shadow-sm transition hover:border-primary/60 hover:bg-card/80">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-primary">
                        {icon ?? (
                          <span className="text-xs font-semibold uppercase">
                            {fallbackInitials}
                          </span>
                        )}
                      </div>
                      <span className="font-medium text-foreground">
                        {skill}
                      </span>
                    </div>
                  </BlurFade>
                );
              })}
            </div>
          </div>
        </section>
        <section id="projects">
          <div className="space-y-12 w-full py-12">
            <BlurFade delay={BLUR_FADE_DELAY * 11}>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="font-serif inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                    My Projects
                  </div>
                  <h2 className="font-serif text-3xl font-bold sm:text-5xl">
                    Check out my latest work
                  </h2>
                  <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    I&apos;ve worked on a variety of projects, from simple
                    websites to complex web applications. Here are a few of my
                    favorites.
                  </p>
                </div>
              </div>
            </BlurFade>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
              {DATA.projects.map((project, id) => (
                <BlurFade
                  key={project.title}
                  delay={BLUR_FADE_DELAY * 12 + id * 0.05}
                >
                  <ProjectCard
                    href={project.href}
                    key={project.title}
                    title={project.title}
                    description={project.description}
                    dates={project.dates}
                    tags={project.technologies}
                    image={project.image}
                    video={project.video}
                    links={project.links}
                  />
                </BlurFade>
              ))}
            </div>
          </div>
        </section>
        <section id="github-activity" className="py-4">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <Github />
          </BlurFade>
        </section>
        <section id="hackathons">
          <div className="space-y-12 w-full py-12">
            <BlurFade delay={BLUR_FADE_DELAY * 15}>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="font-serif inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                    Hackathons
                  </div>
                  <h2 className="font-serif text-3xl font-bold sm:text-5xl">
                    I like building things
                  </h2>
                  <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    During my time in university, I attended{' '}
                    {DATA.hackathons.length}+ hackathons. People from around the
                    country would come together and build incredible things in
                    2-3 days. It was eye-opening to see the endless
                    possibilities brought to life by a group of motivated and
                    passionate individuals.
                  </p>
                </div>
              </div>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 16}>
              <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
                {DATA.hackathons.map((project, id) => (
                  <BlurFade
                    key={project.title + project.dates}
                    delay={BLUR_FADE_DELAY * 17 + id * 0.05}
                  >
                    <HackathonCard
                      title={project.title}
                      description={project.description}
                      location={project.location}
                      dates={project.dates}
                      image={project.image}
                      links={project.links}
                    />
                  </BlurFade>
                ))}
              </ul>
            </BlurFade>
          </div>
        </section>
        <section id="contact">
          <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
            <BlurFade delay={BLUR_FADE_DELAY * 18}>
              <div className="space-y-3">
                <div className="font-serif inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Contact
                </div>
                <h2 className="font-serif text-3xl font-bold sm:text-5xl">
                  Get in Touch
                </h2>
                <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Want to chat? Just shoot me a dm{' '}
                  <Link
                    href={DATA.contact.social.X.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    with a direct question on twitter
                  </Link>{' '}
                  and I&apos;ll respond whenever I can. I will ignore all
                  soliciting.
                </p>
              </div>
            </BlurFade>
          </div>
        </section>
      </main>
    </div>
  );
}

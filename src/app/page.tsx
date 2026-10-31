import Github from '@/components/Github';
import { AnimatedText } from '@/components/animated-text';
import { HackathonCard } from '@/components/hackathon-card';
import BlurFade from '@/components/magicui/blur-fade';
import { ProjectCard } from '@/components/project-card';
import { ResumeCard } from '@/components/resume-card';
import { ThemeAvatar } from '@/components/theme-avatar';
import { AnimatedShinyText } from '@/components/ui/animated-shiny-text';
import { ShinyButton } from '@/components/ui/shiny-button';
import { DATA } from '@/data/resume';
import { ArrowUpRight, CalendarDays, FileText, MapPin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Markdown from 'react-markdown';

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <div className="relative min-h-dvh w-full selection:bg-primary selection:text-primary-foreground">
      <main className="relative flex flex-col min-h-screen space-y-10 rounded-xl my-8 bg-background max-w-6xl mx-auto px-6 py-8 sm:py-12 lg:py-8">
        <section id="hero" className="relative">
          <BlurFade className="pointer-events-none absolute inset-x-0 -top-10 select-none mix-blend-multiply dark:mix-blend-normal">
            <Image
              src="/images/hero-streak.png"
              alt=""
              width={580}
              height={112}
              priority
              className="mx-auto w-full max-w-3xl opacity-80 mask-[radial-gradient(ellipse_at_center,black_35%,transparent_70%)]"
            />
          </BlurFade>
          <div className="relative mx-auto w-full space-y-8 flex flex-col items-center text-center">
            <BlurFade delay={BLUR_FADE_DELAY}>
              <div className="relative">
                <div className="absolute inset-0 bg-linear-to-r from-primary/20 via-primary/30 to-primary/20 blur-3xl opacity-50 rounded-full motion-safe:animate-pulse" aria-hidden="true" />
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
                <p className="mx-auto flex w-fit items-center rounded-full border bg-neutral-100 text-xs shadow-xs dark:border-white/10 dark:bg-neutral-900 sm:text-sm">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 text-muted-foreground">
                    <MapPin className="size-3.5" aria-hidden="true" />
                    Noida, India
                  </span>
                  <span className="h-4 w-px bg-border" aria-hidden="true" />
                  <AnimatedShinyText className="px-3 py-1 font-medium">
                    Full Stack Developer
                  </AnimatedShinyText>
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
            <div className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
              <Markdown>
                {DATA.summary}
              </Markdown>
            </div>
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
                  logoBackground={'logoBackground' in work ? work.logoBackground : undefined}
                  altText={work.company}
                  title={work.company}
                  subtitle={work.title}
                  href={work.href}
                  badges={work.badges}
                  period={`${work.start} – ${work.end ?? 'Present'}`}
                  description={work.description}
                />
              </BlurFade>
            ))}
          </div>
        </section>
        <section id="github-activity" className="py-4">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <Github />
          </BlurFade>
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
                    highlights={'highlights' in project ? project.highlights : undefined}
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
        <section id="certifications">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 8.5}>
              <h2 className="font-serif text-xl font-bold">Certifications</h2>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 8.7}>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {DATA.certifications.map((cert) => (
                  <Link
                    key={cert.title}
                    href={cert.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 rounded-xl border bg-card/40 p-2 transition-colors hover:bg-card/80 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <Image
                      src={cert.image}
                      alt=""
                      width={48}
                      height={48}
                      className="size-12 shrink-0 rounded-md bg-muted object-cover"
                    />
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium">{cert.title}</p>
                      <p className="truncate text-xs text-muted-foreground">
                        {cert.issuer}
                      </p>
                    </div>
                    <ArrowUpRight
                      aria-hidden="true"
                      className="size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-foreground"
                    />
                  </Link>
                ))}
              </div>
            </BlurFade>
          </div>
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
                    {DATA.hackathonsCount}+ hackathons. People from around the
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
                  Want to chat? Just shoot me a DM{' '}
                  <Link
                    href={DATA.contact.social.X.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    with a direct question on X
                  </Link>{' '}
                  and I&apos;ll respond whenever I can. I will ignore all
                  soliciting.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
                  <ShinyButton
                    href={DATA.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <CalendarDays className="size-4" aria-hidden="true" />
                    Book a Call
                  </ShinyButton>
                  <ShinyButton href="/resume">
                    <FileText className="size-4" aria-hidden="true" />
                    View Resume
                  </ShinyButton>
                </div>
              </div>
            </BlurFade>
          </div>
        </section>
      </main>
    </div>
  );
}

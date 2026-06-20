"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { BsCheck2Circle } from "react-icons/bs";
import { classNames, Card, SectionHeading } from "./ui";
import {
  education,
  experience,
  galleryImages,
  projectFilters,
  projects,
  skillCategories,
  skillNavCategories,
  socialLinks,
  type ProjectCategory,
} from "../lib/portfolio-data";

function TypewriterText({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const activeWord = words[index];
    const timeout = window.setTimeout(
      () => {
        if (!deleting) {
          if (text.length < activeWord.length) {
            setText(activeWord.slice(0, text.length + 1));
            return;
          }
          setDeleting(true);
          return;
        }

        if (text.length > 0) {
          setText(activeWord.slice(0, text.length - 1));
          return;
        }

        setDeleting(false);
        setIndex((current) => (current + 1) % words.length);
      },
      deleting ? 52 : 76,
    );

    return () => window.clearTimeout(timeout);
  }, [deleting, index, text, words]);

  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-[color-mix(in_srgb,var(--border)_70%,transparent)] bg-[var(--surface)] px-4 py-2 text-sm font-medium text-[var(--foreground)] shadow-sm">
      <span className="min-w-[12ch] text-left text-[var(--accent)]">
        {text}
      </span>
      <span className="h-4 w-px bg-[var(--accent)] opacity-70" />
    </span>
  );
}

export function HeroSection() {
  return (
    <section id="home" className="scroll-mt-28">
      <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-[color-mix(in_srgb,var(--border)_70%,transparent)] bg-[var(--surface)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-[var(--muted)]">
              Portfolio
            </span>
            <span className="rounded-full border border-[color-mix(in_srgb,var(--border)_70%,transparent)] bg-[var(--surface)] px-4 py-2 text-sm text-[var(--muted)]">
              Clean, calm, responsive
            </span>
          </div>

          <div className="space-y-5">
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Designing thoughtful digital experiences with a soft, polished
              feel.
            </h1>
            <div className="flex flex-wrap items-center gap-3 text-base sm:text-lg">
              <span className="text-[var(--muted)]">I am</span>
              <TypewriterText
                words={[
                  "AI/ML enthusiastic",
                  "quick learner",
                  "adaptable",
                  "calm builder",
                ]}
              />
            </div>
            <p className="max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">
              I build responsive interfaces that stay clean on mobile, tablet,
              laptop, and larger screens. The goal is a modern, quiet portfolio
              that feels designed rather than overloaded.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_var(--glow)] transition duration-300 hover:-translate-y-0.5 hover:scale-[1.01]"
            >
              View projects
            </a>
            <a
              href="#contact"
              className="rounded-full border border-[color-mix(in_srgb,var(--border)_70%,transparent)] bg-[var(--surface)] px-6 py-3 text-sm font-semibold text-[var(--foreground)] transition duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            >
              Contact me
            </a>
          </div>
        </div>

        <Card className="relative min-h-[30rem] overflow-hidden p-4 sm:p-6">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.16),transparent_50%),radial-gradient(circle_at_bottom_right,rgba(45,212,191,0.16),transparent_42%)]" />
          <div className="relative flex h-full flex-col justify-between gap-6">
            <div className="flex items-center justify-between gap-3">
              <div className="rounded-full border border-[color-mix(in_srgb,var(--border)_70%,transparent)] bg-[var(--surface-strong)] px-4 py-2 text-xs font-medium text-[var(--muted)]">
                Open to internships and collaborations
              </div>
              <div className="rounded-full border border-[color-mix(in_srgb,var(--border)_70%,transparent)] bg-[var(--surface-strong)] px-4 py-2 text-xs font-medium text-[var(--muted)]">
                2026 build
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-[1fr_0.9fr] sm:items-end">
              <div className="rounded-[28px] border border-[color-mix(in_srgb,var(--border)_70%,transparent)] bg-[var(--surface-strong)] p-3 shadow-[0_20px_40px_rgba(15,23,42,0.08)]">
                <Image
                  src="/assets/Profile.jpg"
                  alt="Profile photo"
                  width={720}
                  height={900}
                  priority
                  className="aspect-[4/5] w-full rounded-[22px] object-cover"
                />
              </div>

              <div className="space-y-3 rounded-[26px] border border-[color-mix(in_srgb,var(--border)_70%,transparent)] bg-[var(--surface-strong)] p-5 shadow-[0_20px_40px_rgba(15,23,42,0.06)]">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--muted)]">
                  Focus
                </p>
                <p className="text-lg font-semibold text-[var(--foreground)]">
                  Web, mobile, and AI interfaces with a calm visual tone.
                </p>
                <p className="text-sm leading-7 text-[var(--muted)]">
                  Soft gradients, subtle depth, and clear structure are used
                  here to keep the page readable and modern on every screen
                  size.
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-28">
      <SectionHeading
        eyebrow="About me"
        title="A clean introduction with a personal touch"
        description="The layout stays open and calm, with just enough detail to introduce who I am without stacking unnecessary blocks."
      />

      <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
        <Card className="overflow-hidden p-4 sm:p-5">
          <Image
            src="/assets/about-me.jpeg"
            alt="About me"
            width={720}
            height={900}
            className="aspect-[4/5] w-full rounded-[22px] object-cover"
          />
        </Card>

        <Card className="p-6 sm:p-8">
          <div className="space-y-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--muted)]">
                Who I am
              </p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight">
                I like interfaces that feel simple, honest, and easy to use.
              </h3>
            </div>

            <p className="max-w-2xl text-sm leading-7 text-[var(--muted)] sm:text-base">
              I am building my path through web development, mobile design, and
              AI/ML work. My goal is to create useful products with clear
              structure, gentle motion, and responsive behavior that works from
              small phones to large displays.
            </p>

            <div className="grid gap-3 sm:grid-cols-3">
              {[
                "Responsive by default",
                "Local assets only",
                "Light and dark modes",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-[22px] border border-[color-mix(in_srgb,var(--border)_70%,transparent)] bg-[var(--surface-strong)] px-4 py-4 text-sm text-[var(--foreground)]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}

export function ExperienceSection() {
  const posts = [
    {
      title: "Started at Codimite",
      date: "May 2026",
      text: "Joined as an intern and started working inside a real product team environment.",
    },
    {
      title: "Focused on product polish",
      date: "Now",
      text: "Improving interface details, responsive structure, and cleaner user flows on live work.",
    },
    {
      title: "Learning through reviews",
      date: "Ongoing",
      text: "Following team feedback, refining UI decisions, and staying consistent with delivery quality.",
    },
  ];

  return (
    <section id="experience" className="scroll-mt-28">
      <SectionHeading
        eyebrow="Experience"
        title="A linked, post-style experience layout"
        description="This keeps the Codimite section visually closer to a modern professional feed instead of a big flat card."
      />

      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <Card className="p-6 sm:p-8">
          <div className="flex flex-col items-center gap-5 text-center">
            <div className="rounded-[28px] border border-[color-mix(in_srgb,var(--border)_70%,transparent)] bg-[var(--surface-strong)] p-5">
              <Image
                src={experience.logo}
                alt={`${experience.company} logo`}
                width={260}
                height={260}
                className="h-36 w-36 rounded-[22px] object-cover shadow-lg sm:h-40 sm:w-40"
              />
            </div>

            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--muted)]">
                {experience.role}
              </p>
              <h3 className="text-2xl font-semibold tracking-tight">
                {experience.company}
              </h3>
              <p className="text-sm text-[var(--muted)]">
                Since {experience.since}
              </p>
            </div>

            <p className="text-sm leading-7 text-[var(--muted)]">
              {experience.summary}
            </p>
          </div>
        </Card>

        <div className="relative pl-4 sm:pl-6">
          <div className="absolute left-[1.15rem] top-2 bottom-2 w-px bg-gradient-to-b from-[var(--accent)] via-[var(--border)] to-transparent sm:left-6" />
          <div className="space-y-4">
            {posts.map((post, index) => (
              <div key={post.title} className="relative pl-8 sm:pl-12">
                <span className="absolute left-0 top-4 flex h-7 w-7 items-center justify-center rounded-full border border-[color-mix(in_srgb,var(--accent)_30%,var(--border))] bg-[var(--surface-strong)] text-[var(--accent)] shadow-sm sm:left-2">
                  <BsCheck2Circle className="h-4 w-4" />
                </span>
                <Card className="p-5 sm:p-6">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h4 className="text-lg font-semibold tracking-tight">
                      {post.title}
                    </h4>
                    <span className="rounded-full border border-[color-mix(in_srgb,var(--border)_70%,transparent)] bg-[var(--surface-strong)] px-3 py-1 text-xs font-medium text-[var(--muted)]">
                      {post.date}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                    {post.text}
                  </p>
                </Card>
                {index < posts.length - 1 ? <div className="h-5" /> : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function SkillsSection() {
  const [selectedSkillCategory, setSelectedSkillCategory] = useState(
    skillCategories[0].title,
  );
  const activeSkillCategory =
    skillCategories.find(
      (category) => category.title === selectedSkillCategory,
    ) ?? skillCategories[0];

  return (
    <section id="skills" className="scroll-mt-28">
      <SectionHeading
        eyebrow="Skills"
        title="A toggleable skill map with clear categories"
        description="The skills are grouped by function and shown as modern chips, without percentages or number clutter."
      />

      <div className="mb-6 flex flex-wrap justify-center gap-3">
        {skillNavCategories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setSelectedSkillCategory(category)}
            className={classNames(
              selectedSkillCategory === category
                ? "bg-[var(--accent)] text-white shadow-[0_18px_40px_var(--glow)]"
                : "bg-[var(--surface)] text-[var(--muted)] hover:text-[var(--foreground)]",
              "rounded-full border border-[color-mix(in_srgb,var(--border)_70%,transparent)] px-5 py-2 text-sm font-medium transition duration-300 hover:-translate-y-0.5",
            )}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-[0.84fr_1.16fr]">
        <Card className="h-fit p-6 sm:p-8 lg:sticky lg:top-28">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-[color-mix(in_srgb,var(--border)_70%,transparent)] bg-[var(--surface-strong)] px-3 py-1 text-xs font-medium text-[var(--muted)]">
              <activeSkillCategory.icon className="h-4 w-4" />
              {activeSkillCategory.title}
            </div>
            <h3 className="text-2xl font-semibold tracking-tight">
              {activeSkillCategory.summary}
            </h3>
            <p className="text-sm leading-7 text-[var(--muted)] sm:text-base">
              Tap another category to switch the stack view.
            </p>
          </div>
        </Card>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {activeSkillCategory.skills.map((skill) => {
            const SkillIcon = skill.icon;

            return (
              <Card key={skill.name} className="p-4">
                <div className="flex items-center gap-3">
                  <span
                    className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[color-mix(in_srgb,var(--border)_70%,transparent)] bg-[var(--surface-strong)]"
                    style={{ color: skill.color }}
                  >
                    <SkillIcon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-[var(--foreground)]">
                      {skill.name}
                    </p>
                    <p className="mt-1 text-xs text-[var(--muted)]">
                      Core stack item
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function EducationSection() {
  return (
    <section id="education" className="scroll-mt-28">
      <SectionHeading
        eyebrow="Education"
        title="A connected learning timeline"
        description="The three milestones are linked with a vertical line so the section feels like one path instead of three separate boxes."
      />

      <div className="relative mx-auto max-w-4xl">
        <div className="absolute left-5 top-4 bottom-4 w-px bg-gradient-to-b from-[var(--accent)] via-[var(--border)] to-transparent sm:left-1/2 sm:-translate-x-px" />
        <div className="space-y-6">
          {education.map((item, index) => (
            <div
              key={item.title}
              className={classNames(
                "relative grid gap-4 sm:grid-cols-[1fr_1fr] sm:items-center",
                index % 2 === 1 ? "sm:[&>div:first-child]:order-2" : "",
              )}
            >
              <div className="relative pl-12 sm:pl-0">
                <span className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full border border-[color-mix(in_srgb,var(--accent)_34%,var(--border))] bg-[var(--surface-strong)] shadow-sm sm:left-1/2 sm:-translate-x-1/2" />
                <div className="inline-flex rounded-full border border-[color-mix(in_srgb,var(--border)_70%,transparent)] bg-[var(--surface)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-[var(--muted)] shadow-sm">
                  {item.yearRange}
                </div>
              </div>

              <Card className="overflow-hidden p-4 sm:p-5">
                <div className="grid gap-4 sm:grid-cols-[0.9fr_1.1fr] sm:items-center">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={720}
                    height={520}
                    className="aspect-[4/3] w-full rounded-[22px] object-cover"
                  />
                  <div className="space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--muted)]">
                      {item.subtitle}
                    </p>
                    <h3 className="text-xl font-semibold tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-7 text-[var(--muted)]">
                      {item.note}
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProjectsSection() {
  const [projectFilter, setProjectFilter] = useState<ProjectCategory>("all");
  const visibleProjects = projects.filter(
    (project) => projectFilter === "all" || project.category === projectFilter,
  );

  return (
    <section id="projects" className="scroll-mt-28">
      <SectionHeading
        eyebrow="Projects"
        title="Category-based project browsing"
        description="The cards are lighter, cleaner, and sized to keep the screenshot previews readable on every screen width."
      />

      <div className="mb-8 flex flex-wrap justify-center gap-3">
        {projectFilters.map((filter) => (
          <button
            key={filter.value}
            type="button"
            onClick={() => setProjectFilter(filter.value)}
            className={classNames(
              projectFilter === filter.value
                ? "bg-[var(--accent)] text-white shadow-[0_18px_40px_var(--glow)]"
                : "bg-[var(--surface)] text-[var(--muted)] hover:text-[var(--foreground)]",
              "rounded-full border border-[color-mix(in_srgb,var(--border)_70%,transparent)] px-5 py-2 text-sm font-medium transition duration-300 hover:-translate-y-0.5",
            )}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {visibleProjects.map((project) => (
          <Card key={project.title} className="overflow-hidden">
            <div
              className={classNames("bg-gradient-to-br p-4", project.accent)}
            >
              <Image
                src={project.image}
                alt={project.title}
                width={900}
                height={700}
                className="aspect-[4/3] w-full rounded-[22px] object-cover shadow-2xl"
              />
            </div>
            <div className="space-y-3 p-5 sm:p-6">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-lg font-semibold tracking-tight">
                  {project.title}
                </h3>
                <span className="rounded-full border border-[color-mix(in_srgb,var(--border)_70%,transparent)] bg-[var(--surface-strong)] px-3 py-1 text-xs font-medium text-[var(--muted)] capitalize">
                  {project.category}
                </span>
              </div>
              <p className="text-sm leading-7 text-[var(--muted)]">
                {project.description}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

export function GallerySection() {
  return (
    <section id="gallery" className="scroll-mt-28">
      <SectionHeading
        eyebrow="Gallery"
        title="A softer masonry photo wall"
        description="The gallery now uses a staggered column layout so the images breathe instead of forcing the same height everywhere."
      />

      <div className="columns-1 gap-4 sm:columns-2 xl:columns-3">
        {galleryImages.map((image, index) => (
          <div key={image} className="mb-4 break-inside-avoid">
            <Card className="overflow-hidden p-3">
              <Image
                src={image}
                alt={`Gallery image ${index + 1}`}
                width={900}
                height={900}
                className={classNames(
                  "w-full rounded-[22px] object-cover",
                  index % 3 === 0
                    ? "aspect-[4/5]"
                    : index % 3 === 1
                      ? "aspect-[5/4]"
                      : "aspect-square",
                )}
              />
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-28 pb-20">
      <SectionHeading
        eyebrow="Contact"
        title="Reach out through the channels below"
        description="The contact area keeps the same calm style and gives clear actions without extra clutter."
      />

      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <Card className="p-6 sm:p-8">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--muted)]">
              Quick contact
            </p>
            <h3 className="text-2xl font-semibold tracking-tight">
              Available for conversation, feedback, and opportunities.
            </h3>
            <p className="text-sm leading-7 text-[var(--muted)] sm:text-base">
              Email or WhatsApp are the fastest ways to reach me. The social
              links below cover the rest.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="mailto:liyanaarachchidilan@gmail.com"
                className="rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_var(--glow)] transition duration-300 hover:-translate-y-0.5 hover:scale-[1.01]"
              >
                Email me
              </a>
              <a
                href="https://wa.me/94713804825"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-[color-mix(in_srgb,var(--border)_70%,transparent)] bg-[var(--surface)] px-5 py-3 text-sm font-semibold text-[var(--foreground)] transition duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </Card>

        <Card className="p-6 sm:p-8">
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {socialLinks.map((link) => {
              const Icon = link.icon;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={
                    link.href.startsWith("mailto:") ? undefined : "_blank"
                  }
                  rel={
                    link.href.startsWith("mailto:") ? undefined : "noreferrer"
                  }
                  className="group flex items-center gap-3 rounded-[22px] border border-[color-mix(in_srgb,var(--border)_70%,transparent)] bg-[var(--surface-strong)] px-4 py-4 transition duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[color-mix(in_srgb,var(--border)_70%,transparent)] bg-[var(--surface)] text-[var(--foreground)] transition group-hover:bg-[var(--accent)] group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-[var(--foreground)]">
                      {link.label}
                    </p>
                    <p className="text-xs text-[var(--muted)]">Open link</p>
                  </div>
                </a>
              );
            })}
          </div>
        </Card>
      </div>
    </section>
  );
}

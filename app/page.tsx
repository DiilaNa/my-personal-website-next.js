import { PortfolioChrome } from "../components/portfolio-chrome";
import {
  AboutSection,
  ContactSection,
  EducationSection,
  ExperienceSection,
  GallerySection,
  HeroSection,
  ProjectsSection,
  SkillsSection,
} from "../components/portfolio-sections";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[radial-gradient(circle_at_top_left,_rgba(57,163,255,0.12),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(78,205,196,0.12),_transparent_26%),linear-gradient(180deg,_var(--background),_color-mix(in_srgb,_var(--background)_88%,_var(--surface)_12%))] text-[var(--foreground)]">
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-70 [background-image:radial-gradient(rgba(148,163,184,0.14)_1px,transparent_1px)] [background-size:22px_22px]" />
      <div className="pointer-events-none fixed left-1/2 top-0 -z-10 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(79,140,255,0.14),transparent_68%)] blur-3xl" />

      <PortfolioChrome />

      <main className="mx-auto flex w-full max-w-7xl flex-col gap-24 px-4 py-10 pb-32 sm:px-6 lg:px-10 md:pl-24">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <EducationSection />
        <ProjectsSection />
        <GallerySection />
        <ContactSection />
      </main>
    </div>
  );
}

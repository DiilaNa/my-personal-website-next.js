"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { BsMoonStars, BsSun, BsThreeDots, BsX } from "react-icons/bs";
import { navigation, type Theme } from "../lib/portfolio-data";
import { classNames } from "./ui";

export function PortfolioChrome() {
  const [theme, setTheme] = useState<Theme>("light");
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const storedTheme = window.localStorage.getItem(
      "portfolio-theme",
    ) as Theme | null;
    const preferredTheme: Theme = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches
      ? "dark"
      : "light";
    setTheme(storedTheme ?? preferredTheme);
  }, []);

  useEffect(() => {
    if (!mounted) {
      return;
    }

    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("portfolio-theme", theme);
  }, [mounted, theme]);

  useEffect(() => {
    const closeMenu = () => setMenuOpen(false);
    window.addEventListener("hashchange", closeMenu);
    return () => window.removeEventListener("hashchange", closeMenu);
  }, []);

  const toggleTheme = () => {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  };

  return (
    <>
      <aside className="fixed left-5 top-1/2 z-50 hidden -translate-y-1/2 md:block">
        <div className="flex flex-col items-center gap-4 rounded-[32px] border border-[color-mix(in_srgb,var(--border)_80%,transparent)] bg-[var(--surface)] p-3 shadow-[0_20px_60px_rgba(15,23,42,0.12)] backdrop-blur-2xl">
          <div className="rounded-2xl border border-[color-mix(in_srgb,var(--border)_70%,transparent)] p-1">
            <Image
              src="/assets/Profile.jpg"
              alt="Dilan profile"
              width={52}
              height={52}
              priority
              className="h-13 w-13 rounded-2xl object-cover ring-1 ring-[color-mix(in_srgb,var(--accent)_28%,transparent)]"
            />
          </div>

          <button
            type="button"
            onClick={toggleTheme}
            className="rounded-2xl border border-[color-mix(in_srgb,var(--border)_80%,transparent)] bg-[var(--surface-strong)] p-3 text-[var(--foreground)] transition duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <BsSun className="h-5 w-5" />
            ) : (
              <BsMoonStars className="h-5 w-5" />
            )}
          </button>

          <div className="h-px w-10 bg-[var(--border)]" />

          {navigation.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.name}
                href={item.href}
                title={item.name}
                className="group relative rounded-2xl border border-transparent p-3 text-[var(--muted)] transition duration-300 hover:-translate-y-0.5 hover:border-[var(--border)] hover:bg-[var(--surface-strong)] hover:text-[var(--foreground)]"
              >
                <Icon className="h-5 w-5" />
                <span className="pointer-events-none absolute left-16 top-1/2 -translate-y-1/2 rounded-full border border-[var(--border)] bg-[var(--surface-strong)] px-3 py-1 text-xs font-medium text-[var(--foreground)] opacity-0 shadow-lg transition group-hover:opacity-100">
                  {item.name}
                </span>
              </a>
            );
          })}
        </div>
      </aside>

      <header className="sticky top-0 z-40 border-b border-[color-mix(in_srgb,var(--border)_70%,transparent)] bg-[color-mix(in_srgb,_var(--background)_72%,_transparent)] backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-10 md:pl-24">
          <a href="#home" className="flex items-center gap-3">
            <Image
              src="/assets/Profile.jpg"
              alt="Dilan profile"
              width={44}
              height={44}
              priority
              className="h-11 w-11 rounded-2xl border border-[color-mix(in_srgb,var(--border)_70%,transparent)] object-cover"
            />
            <div>
              <p className="text-sm font-semibold tracking-wide text-[var(--foreground)]">
                Dilan Liyanaarachchi
              </p>
              <p className="text-xs text-[var(--muted)]">Portfolio</p>
            </div>
          </a>

          <div className="hidden items-center gap-2 md:flex">
            <a
              href="#contact"
              className="rounded-full border border-[color-mix(in_srgb,var(--border)_70%,transparent)] bg-[var(--surface)] px-4 py-2 text-sm font-medium text-[var(--foreground)] transition duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            >
              Contact me
            </a>
            <button
              type="button"
              onClick={toggleTheme}
              className="rounded-full border border-[color-mix(in_srgb,var(--border)_70%,transparent)] bg-[var(--surface)] px-4 py-2 text-sm font-medium text-[var(--foreground)] transition duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            >
              {theme === "dark" ? "Light mode" : "Dark mode"}
            </button>
          </div>
        </div>
      </header>

      <nav className="fixed inset-x-4 bottom-4 z-50 md:hidden">
        <div className="relative rounded-[32px] border border-[color-mix(in_srgb,var(--border)_70%,transparent)] bg-[var(--surface)] p-2 shadow-[0_20px_60px_rgba(15,23,42,0.16)] backdrop-blur-2xl">
          <div className="grid grid-cols-5 gap-2">
            {navigation.slice(0, 4).map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex flex-col items-center rounded-2xl px-2 py-2 text-[10px] font-medium text-[var(--muted)] transition duration-300 hover:bg-[var(--surface-strong)] hover:text-[var(--foreground)]"
                >
                  <Icon className="h-5 w-5" />
                  <span className="mt-1">{item.name}</span>
                </a>
              );
            })}

            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              className="flex flex-col items-center rounded-2xl px-2 py-2 text-[10px] font-medium text-[var(--muted)] transition duration-300 hover:bg-[var(--surface-strong)] hover:text-[var(--foreground)]"
              aria-expanded={menuOpen}
              aria-label="Open mobile menu"
            >
              {menuOpen ? (
                <BsX className="h-5 w-5" />
              ) : (
                <BsThreeDots className="h-5 w-5" />
              )}
              <span className="mt-1">Menu</span>
            </button>
          </div>

          {menuOpen ? (
            <div className="absolute bottom-[calc(100%+0.75rem)] left-0 right-0 rounded-[28px] border border-[color-mix(in_srgb,var(--border)_70%,transparent)] bg-[var(--surface)] p-4 shadow-[0_20px_60px_rgba(15,23,42,0.18)] backdrop-blur-2xl">
              <div className="mb-4 flex items-center justify-between">
                <p className="text-sm font-semibold text-[var(--foreground)]">
                  Quick links
                </p>
                <button
                  type="button"
                  onClick={toggleTheme}
                  className="rounded-full border border-[color-mix(in_srgb,var(--border)_70%,transparent)] bg-[var(--surface-strong)] px-4 py-2 text-xs font-medium text-[var(--foreground)]"
                >
                  {theme === "dark" ? "Light mode" : "Dark mode"}
                </button>
              </div>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {navigation.map((item) => {
                  const Icon = item.icon;

                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="flex flex-col items-center gap-2 rounded-2xl border border-[color-mix(in_srgb,var(--border)_70%,transparent)] bg-[var(--surface-strong)] px-3 py-4 text-center text-xs font-medium text-[var(--foreground)]"
                    >
                      <Icon className="h-5 w-5" />
                      <span>{item.name}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          ) : null}
        </div>
      </nav>
    </>
  );
}

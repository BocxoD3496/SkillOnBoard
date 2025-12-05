"use client";

import React from "react";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Главная" },
  { href: "/messenger", label: "Мессенджер" },
  { href: "/chat", label: "Чат с ИИ" },
  { href: "/learning", label: "Обучение" },
  { href: "/progress", label: "Карта прогресса" },
  { href: "/news", label: "Новости" },
  { href: "/company", label: "О компании" },
];

export const Header: React.FC = () => {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-20 flex h-16 items-center justify-between border-b border-slate-200 bg-white px-6">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-white shadow-soft">
            S
          </div>
          <span className="text-lg font-semibold">SkillOnBoard</span>
        </div>
        <nav className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => {
            const active = item.href === "/" ? pathname === "/" : false;
            return (
              <button
                key={item.href}
                className={
                  "flex items-center gap-1 rounded-full px-3 py-1 text-xs " +
                  (active
                    ? "bg-primary-soft text-primary font-semibold"
                    : "text-slate-500 hover:bg-slate-100")
                }
              >
                {item.label}
              </button>
            );
          })}
        </nav>
      </div>
      <div className="flex items-center gap-3">
        <button className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-slate-500">
          🔔
        </button>
        <div className="flex h-8 w-8 items-center justify-center rounded-full border border-primary-light bg-primary-soft text-sm font-semibold text-primary">
          A
        </div>
      </div>
    </header>
  );
};

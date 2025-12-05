"use client";

import React from "react";
import Link from "next/link";
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
    <header className="sticky top-0 z-20 flex h-16 items-center justify-between border-b border-slate-200 bg-white px-4 lg:px-6">
      <div className="flex items-center gap-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white shadow">
            S
          </div>
          <span className="text-lg font-semibold text-slate-900">
            SkillOnBoard
          </span>
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={
                  "rounded-full px-3 py-1 text-xs transition " +
                  (active
                    ? "bg-blue-50 text-blue-600 font-semibold"
                    : "text-slate-500 hover:bg-slate-100")
                }
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="flex items-center gap-3">
        <button className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-slate-500">
          🔔
        </button>
        <div className="flex h-8 w-8 items-center justify-center rounded-full border border-blue-200 bg-blue-50 text-sm font-semibold text-blue-600">
          A
        </div>
      </div>
    </header>
  );
};

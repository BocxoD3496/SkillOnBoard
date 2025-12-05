import "./../styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SkillOnBoard — панель стажёра",
  description: "AI-платформа для онбординга и обучения сотрудников",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className="min-h-screen">{children}</body>
    </html>
  );
}

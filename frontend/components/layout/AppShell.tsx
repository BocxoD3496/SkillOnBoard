import React from "react";
import { Header } from "./Header";

interface AppShellProps {
  children: React.ReactNode;
}

export const AppShell: React.FC<AppShellProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="mx-auto flex w-full max-w-6xl flex-1 gap-6 px-4 py-6 lg:px-0">
        <div className="flex w-full flex-col gap-6 lg:grid lg:grid-cols-3">
          {children}
        </div>
      </main>
    </div>
  );
};

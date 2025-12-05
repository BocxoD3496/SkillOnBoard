import React from "react";
import { Header } from "./Header";

interface Props {
  children: React.ReactNode;
}

export const AppShell: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col bg-slate-100">
      <Header />
      <main className="flex-1 px-6 pb-8 pt-5">
        <div className="grid gap-5 lg:grid-cols-[280px,minmax(0,1.6fr),320px]">
          {children}
        </div>
      </main>
    </div>
  );
};

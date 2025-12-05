import { AppShell } from "@/components/layout/AppShell";
import { TasksCard } from "@/components/dashboard/TasksCard";
import { CalendarCard } from "@/components/dashboard/CalendarCard";
import { CoursesCard } from "@/components/dashboard/CoursesCard";
import { AIAssistantCard } from "@/components/dashboard/AIAssistantCard";
import { calendarEvents, courses, tasks } from "@/lib/mockDashboardData";

export default function HomePage() {
  return (
    <AppShell>
      {/* Левая колонка */}
      <TasksCard
        tasks={tasks}
        userName="Александр"
        onboardingProgress={45}
      />

      {/* Центральная колонка */}
      <section className="flex flex-col gap-4">
        <CalendarCard monthLabel="December 2025" events={calendarEvents} />
        <CoursesCard courses={courses} />
      </section>

      {/* Правая колонка */}
      <section>
        <AIAssistantCard />
      </section>
    </AppShell>
  );
}

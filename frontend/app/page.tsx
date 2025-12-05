import { AppShell } from "@/components/layout/AppShell";
import { TasksCard } from "@/components/dashboard/TasksCard";
import { CalendarCard } from "@/components/dashboard/CalendarCard";
import { CoursesCard } from "@/components/dashboard/CoursesCard";
import { AIAssistantCard } from "@/components/dashboard/AIAssistantCard";
import {
  calendarEvents,
  courses,
  initialTasks,
} from "@/lib/mockDashboardData";

export default function DashboardPage() {
  return (
    <AppShell>
      {/* Левая колонка — задачи */}
      <div className="lg:col-span-1">
        <div className="mb-4 rounded-2xl bg-white p-5 shadow-sm">
          <h1 className="mb-1 text-lg font-semibold text-slate-900">
            Добро пожаловать, Александр! 👋
          </h1>
          <p className="text-sm text-slate-600">
            Ваш прогресс онбординга:{" "}
            <span className="font-semibold text-blue-600">45% завершено</span>
          </p>
        </div>

        <TasksCard tasks={initialTasks} />
      </div>

      {/* Центральная колонка — календарь + курсы */}
      <div className="flex flex-col gap-4 lg:col-span-1">
        <CalendarCard events={calendarEvents} />
        <CoursesCard courses={courses} />
      </div>

      {/* Правая колонка — AI-чат */}
      <div className="lg:col-span-1">
        <AIAssistantCard />
      </div>
    </AppShell>
  );
}

import { AppShell } from "@/components/layout/AppShell";
import { courses } from "@/lib/mockDashboardData";
import { CoursesCard } from "@/components/dashboard/CoursesCard";

export default function LearningPage() {
  return (
    <AppShell>
      <section className="lg:col-span-2">
        <div className="mb-4 rounded-2xl bg-white p-6 shadow-sm">
          <h1 className="mb-2 text-xl font-semibold text-slate-900">
            Обучение
          </h1>
          <p className="text-sm text-slate-600">
            Здесь собраны все курсы и модули, доступные стажёру в рамках
            онбординга.
          </p>
        </div>
        <CoursesCard courses={courses} />
      </section>
      <div className="lg:col-span-1">
        <div className="rounded-2xl bg-white p-6 shadow-sm text-sm text-slate-600">
          <h2 className="mb-2 text-sm font-semibold text-slate-900">
            Рекомендации ассистента
          </h2>
          <p className="mb-2">
            Сейчас вам рекомендуются курсы по безопасности данных и работе с
            CRM-системой. После завершения онбординга список рекомендаций
            будет строиться на основе вашей роли и результатов.
          </p>
        </div>
      </div>
    </AppShell>
  );
}

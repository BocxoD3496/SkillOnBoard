import { AppShell } from "@/components/layout/AppShell";
import { courses } from "@/lib/mockDashboardData";

export default function ProgressPage() {
  const totalLessons = courses.reduce(
    (sum, c) => sum + c.lessonsTotal,
    0
  );
  const completedLessons = courses.reduce(
    (sum, c) => sum + c.lessonsCompleted,
    0
  );
  const overallProgress = (completedLessons / totalLessons) * 100;

  return (
    <AppShell>
      <section className="lg:col-span-3">
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <h1 className="mb-2 text-xl font-semibold text-slate-900">
            Карта прогресса
          </h1>
          <p className="mb-4 text-sm text-slate-600">
            Здесь отображается общий прогресс онбординга и состояние ключевых
            модулей.
          </p>

          <div className="mb-6">
            <div className="mb-1 flex items-center justify-between text-xs">
              <span className="font-medium text-slate-800">
                Общий прогресс
              </span>
              <span className="text-slate-600">
                {completedLessons} из {totalLessons} уроков (
                {Math.round(overallProgress)}%)
              </span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
              <div
                className="h-full rounded-full bg-blue-500"
                style={{ width: `${overallProgress}%` }}
              />
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {courses.map((course) => {
              const progress =
                (course.lessonsCompleted / course.lessonsTotal) * 100;
              return (
                <div
                  key={course.id}
                  className="rounded-xl border border-slate-200 bg-slate-50 p-4"
                >
                  <div className="mb-1 text-sm font-medium text-slate-900">
                    {course.title}
                  </div>
                  <div className="mb-2 text-xs text-slate-600">
                    {course.lessonsCompleted} из {course.lessonsTotal} уроков
                  </div>
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-200">
                    <div
                      className="h-full rounded-full bg-blue-500"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </AppShell>
  );
}

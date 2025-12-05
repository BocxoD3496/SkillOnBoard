import { AppShell } from "@/components/layout/AppShell";
import { initialTeamMessages } from "@/lib/mockDashboardData";

export default function MessengerPage() {
  return (
    <AppShell>
      <section className="lg:col-span-3">
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <h1 className="mb-2 text-xl font-semibold text-slate-900">
            Мессенджер
          </h1>
          <p className="mb-4 text-sm text-slate-600">
            Демонстрация корпоративного канала для стажёров. Здесь будут чаты
            по командам, общие объявления и ответы на вопросы.
          </p>

          <div className="space-y-2 rounded-xl bg-slate-50 p-4 text-xs">
            {initialTeamMessages.map((m) => (
              <div key={m.id} className="rounded-lg bg-white p-3 shadow-sm">
                {m.text}
              </div>
            ))}
          </div>
        </div>
      </section>
    </AppShell>
  );
}

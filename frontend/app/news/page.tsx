import { AppShell } from "@/components/layout/AppShell";

const news = [
  {
    id: "n1",
    title: "Запуск программы онбординга 2025",
    date: "04.12.2025",
    text: "Обновили структуру курсов для стажёров и добавили AI-помощника в процесс адаптации.",
  },
  {
    id: "n2",
    title: "Новая политика по безопасности данных",
    date: "01.12.2025",
    text: "Появился обязательный модуль по работе с персональными данными и корпоративной информацией.",
  },
];

export default function NewsPage() {
  return (
    <AppShell>
      <section className="lg:col-span-3">
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <h1 className="mb-2 text-xl font-semibold text-slate-900">
            Новости компании
          </h1>
          <p className="mb-4 text-sm text-slate-600">
            Здесь отображаются внутренние новости и важные объявления для новых
            сотрудников.
          </p>

          <div className="space-y-3 text-sm">
            {news.map((n) => (
              <div
                key={n.id}
                className="rounded-xl border border-slate-200 bg-slate-50 p-4"
              >
                <div className="mb-1 flex items-center justify-between text-xs text-slate-500">
                  <span>{n.date}</span>
                </div>
                <div className="mb-1 text-sm font-semibold text-slate-900">
                  {n.title}
                </div>
                <div className="text-sm text-slate-700">{n.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </AppShell>
  );
}

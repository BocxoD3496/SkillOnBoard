import { AppShell } from "@/components/layout/AppShell";

export default function CompanyPage() {
  return (
    <AppShell>
      <section className="lg:col-span-3">
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <h1 className="mb-2 text-xl font-semibold text-slate-900">
            О компании
          </h1>
          <p className="mb-4 text-sm text-slate-600">
            Страница, которую компания будет настраивать под себя: профиль,
            структура, ключевые контакты и FAQ.
          </p>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm">
              <h2 className="mb-2 text-sm font-semibold text-slate-900">
                Кто мы
              </h2>
              <p className="text-slate-700">
                Здесь будет описание компании, направления бизнеса и продуктов.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm">
              <h2 className="mb-2 text-sm font-semibold text-slate-900">
                Контакты
              </h2>
              <ul className="space-y-1 text-slate-700 text-xs">
                <li>HR: hr@example.com</li>
                <li>IT-поддержка: it-support@example.com</li>
                <li>Бухгалтерия: finance@example.com</li>
              </ul>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm">
              <h2 className="mb-2 text-sm font-semibold text-slate-900">
                Частые вопросы
              </h2>
              <ul className="space-y-1 text-xs text-slate-700">
                <li>Где находится кабинет директора?</li>
                <li>По каким дням принимает бухгалтерия?</li>
                <li>Как оформить пропуск в офис?</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </AppShell>
  );
}

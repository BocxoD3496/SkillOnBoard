import { AppShell } from "@/components/layout/AppShell";
import { AIAssistantCard } from "@/components/dashboard/AIAssistantCard";

export default function ChatPage() {
  return (
    <AppShell>
      <section className="lg:col-span-2">
        <div className="mb-4 rounded-2xl bg-white p-6 shadow-sm">
          <h1 className="mb-2 text-xl font-semibold text-slate-900">
            Чат с ИИ
          </h1>
          <p className="text-sm text-slate-600">
            Отдельный режим общения с AI-ассистентом. В продукте сюда будет
            подключена корпоративная база знаний и LLM-модель.
          </p>
        </div>
        <AIAssistantCard />
      </section>
      <div className="lg:col-span-1">
        <div className="rounded-2xl bg-white p-6 shadow-sm text-sm text-slate-600">
          <h2 className="mb-2 text-sm font-semibold text-slate-900">
            Примеры запросов
          </h2>
          <ul className="list-disc space-y-1 pl-4">
            <li>«С чего начать онбординг в моей команде?»</li>
            <li>«Какие курсы обязательны для стажёра?»</li>
            <li>«Как оформить отпуск через внутреннюю систему?»</li>
          </ul>
        </div>
      </div>
    </AppShell>
  );
}

"use client";

import React, { FormEvent, useState } from "react";
import { ChatMessage } from "@/lib/types";
import { initialAiMessages } from "@/lib/mockDashboardData";

export const AIAssistantCard: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>(initialAiMessages);
  const [input, setInput] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;

    const userMsg: ChatMessage = {
      id: `u-${Date.now()}`,
      author: "user",
      text: trimmed,
      createdAt: new Date().toISOString(),
    };

    const assistantMsg: ChatMessage = {
      id: `a-${Date.now()}`,
      author: "assistant",
      text: "Хороший вопрос! В этой демо-версии я отвечаю на основе статических данных. В боевой версии здесь будет подключена ваша корпоративная база знаний и LLM-модель.",
      createdAt: new Date().toISOString(),
    };

    setMessages((prev) => [...prev, userMsg, assistantMsg]);
    setInput("");
  };

  return (
    <section className="flex h-full flex-col rounded-2xl bg-white p-4 shadow-sm">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-sm font-semibold text-slate-900">AI-Помощник</h2>
        <button className="text-[11px] text-blue-600 hover:underline">
          Настроить
        </button>
      </div>

      <div className="mb-3 rounded-xl bg-slate-50 p-3 text-[11px] text-slate-600">
        Я анализирую материалы компании и помогаю с онбордингом: объясняю
        процессы, подсказываю следующий шаг и собираю обратную связь.
      </div>

      <div className="chat-scroll mb-3 flex-1 space-y-2 overflow-y-auto rounded-xl bg-slate-50 p-3 text-xs">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={
              "flex " +
              (msg.author === "user" ? "justify-end" : "justify-start")
            }
          >
            <div
              className={
                "max-w-[85%] rounded-2xl px-3 py-2 " +
                (msg.author === "user"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-slate-900 shadow-sm")
              }
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-2 py-1"
      >
        <input
          className="flex-1 border-none bg-transparent text-xs text-slate-900 outline-none placeholder:text-slate-400"
          placeholder="Задайте вопрос об онбординге или компании..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-[11px] font-semibold text-white"
        >
          →
        </button>
      </form>
    </section>
  );
};

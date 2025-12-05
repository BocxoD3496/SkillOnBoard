"use client";

import React, { useState } from "react";

export const AIAssistantCard: React.FC = () => {
  const [messages, setMessages] = useState<
    { id: string; from: "user" | "bot"; text: string }[]
  >([
    {
      id: "m1",
      from: "bot",
      text: "Привет! 👋 Я твой AI-помощник в SkillOnBoard. Могу помочь с обучением, ответить на вопросы о компании или подсказать следующий шаг. Чем помочь?",
    },
    {
      id: "m2",
      from: "user",
      text: "привет",
    },
    {
      id: "m3",
      from: "bot",
      text: "Хороший вопрос! Я анализирую информацию и готовлю ответ на основе материалов компании...",
    },
  ]);

  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages((prev) => [
      ...prev,
      { id: crypto.randomUUID(), from: "user", text: input.trim() },
    ]);
    setInput("");
    // здесь потом можно дергать реальный API
  };

  return (
    <div className="flex h-full flex-col rounded-lg2 bg-white p-4 shadow-soft">
      <div className="mb-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary-soft text-primary">
            🤖
          </div>
          <div className="text-sm font-semibold">AI-Помощник</div>
        </div>
      </div>

      <div className="mb-2 flex flex-wrap gap-2 text-[11px]">
        <button className="rounded-full bg-primary-soft px-2.5 py-1 font-medium text-primary">
          Что изучить?
        </button>
        <button className="rounded-full bg-slate-100 px-2.5 py-1 text-slate-600">
          Помощь
        </button>
        <button className="rounded-full bg-slate-100 px-2.5 py-1 text-slate-600">
          FAQ
        </button>
      </div>

      <div className="chat-scroll mb-2 flex min-h-[220px] flex-1 flex-col gap-2 overflow-y-auto rounded-md border border-slate-200 bg-slate-50 p-2.5 text-[13px]">
        {messages.map((m) => (
          <div
            key={m.id}
            className={
              "max-w-[90%] rounded-2xl px-3 py-2 " +
              (m.from === "bot"
                ? "self-start border border-slate-200 bg-white"
                : "self-end rounded-br-sm bg-primary text-white")
            }
          >
            {m.text}
          </div>
        ))}
      </div>

      <div className="mt-1 flex items-center gap-2">
        <input
          className="h-9 flex-1 rounded-full border border-slate-200 px-3 text-[13px] outline-none focus:border-primary focus:ring-1 focus:ring-primary/20"
          placeholder="Задайте вопрос..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button
          type="button"
          onClick={handleSend}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm text-white shadow-sm hover:bg-blue-600"
        >
          ➤
        </button>
      </div>
    </div>
  );
};

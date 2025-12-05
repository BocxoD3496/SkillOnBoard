"use client";

import React, { useMemo, useState } from "react";
import { Task } from "@/lib/types";

interface Props {
  tasks: Task[];
}

const priorityLabel: Record<Task["priority"], string> = {
  high: "Важно",
  medium: "Средний",
  low: "Низкий",
};

const priorityColor: Record<Task["priority"], string> = {
  high: "border-red-200 text-red-600 bg-red-50",
  medium: "border-amber-200 text-amber-600 bg-amber-50",
  low: "border-slate-200 text-slate-500 bg-slate-50",
};

export const TasksCard: React.FC<Props> = ({ tasks }) => {
  const [items, setItems] = useState(tasks);

  const completedCount = useMemo(
    () => items.filter((t) => t.status === "done").length,
    [items]
  );

  const toggleTask = (id: string) => {
    setItems((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, status: t.status === "done" ? "todo" : "done" } : t
      )
    );
  };

  return (
    <section className="rounded-2xl bg-white p-6 shadow-sm">
      <div className="mb-4 flex items-baseline justify-between gap-2">
        <div>
          <h2 className="text-sm font-semibold text-slate-900">
            Задачи на сегодня
          </h2>
          <p className="text-xs text-slate-500">
            Выполнено {completedCount} из {items.length}
          </p>
        </div>
        <button className="text-xs text-blue-600 hover:underline">
          + Новая задача
        </button>
      </div>

      <div className="space-y-2">
        {items.map((task) => (
          <button
            key={task.id}
            onClick={() => toggleTask(task.id)}
            className={
              "flex w-full items-center justify-between rounded-xl border px-3 py-2 text-left transition hover:bg-slate-50 " +
              (task.status === "done"
                ? "border-slate-200 bg-slate-50 opacity-70"
                : "border-slate-200 bg-white")
            }
          >
            <div className="flex items-center gap-3">
              <div
                className={
                  "flex h-5 w-5 items-center justify-center rounded-full border text-[10px] " +
                  (task.status === "done"
                    ? "border-blue-500 bg-blue-500 text-white"
                    : "border-slate-300 bg-white")
                }
              >
                {task.status === "done" ? "✓" : ""}
              </div>
              <div>
                <div
                  className={
                    "text-xs font-medium " +
                    (task.status === "done" ? "line-through text-slate-400" : "")
                  }
                >
                  {task.title}
                </div>
                <div className="text-[11px] text-slate-500">
                  {task.time ?? "—"}
                </div>
              </div>
            </div>

            <span
              className={
                "rounded-full border px-2 py-[2px] text-[10px] font-medium " +
                priorityColor[task.priority]
              }
            >
              {priorityLabel[task.priority]}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
};

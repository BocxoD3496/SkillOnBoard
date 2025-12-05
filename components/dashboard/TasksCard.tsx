import React from "react";
import { Task } from "@/lib/types";

interface Props {
  tasks: Task[];
  userName: string;
  onboardingProgress: number;
}

const priorityLabel: Record<Task["priority"], string> = {
  high: "Важно",
  medium: "Средний",
  low: "Низкий",
};

const priorityClasses: Record<Task["priority"], string> = {
  high: "border-red-200 bg-red-50 text-red-600",
  medium: "border-amber-200 bg-amber-50 text-amber-600",
  low: "border-slate-200 bg-slate-50 text-slate-500",
};

export const TasksCard: React.FC<Props> = ({
  tasks,
  userName,
  onboardingProgress,
}) => {
  const completed = tasks.filter((t) => t.completed).length;

  return (
    <section>
      <div className="mb-3 rounded-lg2 bg-white p-4 shadow-soft">
        <div className="mb-1 text-xl font-semibold">
          Добро пожаловать, {userName}! 👋
        </div>
        <div className="text-xs text-slate-500">
          Ваш прогресс онбординга:{" "}
          <span className="font-semibold">{onboardingProgress}% завершено</span>
        </div>
      </div>

      <div className="rounded-lg2 bg-white p-4 shadow-soft">
        <div className="mb-3 flex items-baseline justify-between">
          <div>
            <div className="text-sm font-semibold">Задачи на сегодня</div>
            <div className="text-xs text-slate-500">
              Выполнено {completed} из {tasks.length}
            </div>
          </div>
          <button className="text-lg leading-none text-slate-400 hover:text-slate-600">
            +
          </button>
        </div>

        <div className="flex flex-col gap-2">
          {tasks.map((task) => (
            <div
              key={task.id}
              className={
                "flex items-start gap-2 rounded-md border border-slate-200 bg-white px-2.5 py-2 text-xs " +
                (task.completed ? "opacity-60" : "")
              }
            >
              <div
                className={
                  "mt-1 h-4 w-4 rounded-full border-2 " +
                  (task.completed
                    ? "border-primary bg-primary"
                    : "border-slate-300")
                }
              ></div>
              <div className="flex-1">
                <div className="flex items-center justify-between gap-2">
                  <div className="text-[13px] font-medium">
                    {task.title}
                  </div>
                  <span
                    className={
                      "whitespace-nowrap rounded-full border px-2 py-[2px] text-[10px] font-medium " +
                      priorityClasses[task.priority]
                    }
                  >
                    {priorityLabel[task.priority]}
                  </span>
                </div>
                <div className="mt-1 flex items-center gap-2 text-[11px] text-slate-500">
                  <span>{task.time ?? "—"}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

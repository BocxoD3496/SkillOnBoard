"use client";

import React, { useState } from "react";
import { Course } from "@/lib/types";

interface Props {
  courses: Course[];
}

const statusLabel: Record<Course["status"], string> = {
  completed: "Завершён",
  in_progress: "В процессе",
  not_started: "Не начат",
};

const statusColor: Record<Course["status"], string> = {
  completed: "bg-emerald-50 text-emerald-700 border-emerald-200",
  in_progress: "bg-blue-50 text-blue-700 border-blue-200",
  not_started: "bg-slate-50 text-slate-500 border-slate-200",
};

export const CoursesCard: React.FC<Props> = ({ courses }) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section className="rounded-2xl bg-white p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-sm font-semibold text-slate-900">Мои курсы</h2>
        <button className="text-xs text-blue-600 hover:underline">
          Все курсы
        </button>
      </div>

      <div className="space-y-3">
        {courses.map((course) => {
          const progress =
            (course.lessonsCompleted / course.lessonsTotal) * 100;

          const isExpanded = expandedId === course.id;

          return (
            <div
              key={course.id}
              className="rounded-xl border border-slate-200 bg-white p-3"
            >
              <button
                onClick={() =>
                  setExpandedId((prev) =>
                    prev === course.id ? null : course.id
                  )
                }
                className="flex w-full items-center justify-between text-left"
              >
                <div>
                  <div className="text-xs font-medium text-slate-900">
                    {course.title}
                  </div>
                  <div className="text-[11px] text-slate-500">
                    {course.lessonsCompleted} из {course.lessonsTotal} уроков
                  </div>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span
                    className={
                      "rounded-full border px-2 py-[2px] text-[10px] font-medium " +
                      statusColor[course.status]
                    }
                  >
                    {statusLabel[course.status]}
                  </span>
                  <span className="text-[10px] text-slate-500">
                    {Math.round(progress)}%
                  </span>
                </div>
              </button>

              <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
                <div
                  className="h-full rounded-full bg-blue-500 transition-all"
                  style={{ width: `${progress}%` }}
                />
              </div>

              {isExpanded && (
                <div className="mt-3 text-[11px] text-slate-600">
                  <p className="mb-1">{course.description}</p>
                  <p className="text-slate-500">
                    Примерная длительность: {course.durationMinutes} мин.
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

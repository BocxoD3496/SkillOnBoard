import React from "react";
import { Course } from "@/lib/types";

interface Props {
  courses: Course[];
}

const statusLabel: Record<Course["status"], string> = {
  done: "Завершён",
  "in-progress": "В процессе",
  "not-started": "Не начат",
};

const statusClasses: Record<Course["status"], string> = {
  done: "bg-emerald-100 text-emerald-700",
  "in-progress": "bg-primary-soft text-primary",
  "not-started": "bg-slate-100 text-slate-500",
};

export const CoursesCard: React.FC<Props> = ({ courses }) => {
  return (
    <div className="rounded-lg2 bg-white p-4 shadow-soft">
      <div className="mb-2 flex items-center justify-between">
        <div className="text-sm font-semibold">Мои курсы</div>
        <button className="text-xs font-medium text-primary">
          Все курсы
        </button>
      </div>

      {courses.map((course) => {
        const progress =
          course.lessonsTotal > 0
            ? Math.round(
                (course.lessonsCompleted / course.lessonsTotal) * 100
              )
            : 0;

        return (
          <div
            key={course.id}
            className="mt-2 rounded-md border border-slate-200 bg-white p-3"
          >
            <div className="mb-1 flex items-center justify-between gap-2">
              <div className="text-[13px] font-medium">{course.title}</div>
              <span
                className={
                  "whitespace-nowrap rounded-full px-2 py-[2px] text-[10px] font-medium " +
                  statusClasses[course.status]
                }
              >
                {statusLabel[course.status]}
              </span>
            </div>
            <div className="mb-2 text-[11px] text-slate-500">
              {course.description}
            </div>
            <div className="mb-1 h-1.5 w-full rounded-full bg-slate-200">
              <div
                className="h-1.5 rounded-full bg-primary"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="flex items-center justify-between text-[11px] text-slate-500">
              <span>
                {course.lessonsCompleted} из {course.lessonsTotal} уроков
              </span>
              <span>{course.duration}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

import React from "react";
import { CalendarEvent } from "@/lib/types";

interface Props {
  monthLabel: string;
  events: CalendarEvent[];
}

const typeLabel: Record<CalendarEvent["type"], string> = {
  meeting: "Встреча",
  deadline: "Дедлайн",
  training: "Тренинг",
  event: "Мероприятие",
};

const typeColorClass: Record<CalendarEvent["type"], string> = {
  meeting: "bg-blue-500",
  deadline: "bg-red-500",
  training: "bg-amber-500",
  event: "bg-green-600",
};

export const CalendarCard: React.FC<Props> = ({ monthLabel, events }) => {
  const markedDays = new Set(events.map((e) => e.day));
  const selectedEvent = events[0];

  // для демо – жёсткая сетка дек 2025
  const weeks = [
    [null, 1, 2, 3, 4, 5, 6],
    [7, 8, 9, 10, 11, 12, 13],
    [14, 15, 16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25, 26, 27],
    [28, 29, 30, 31, null, null, null],
  ];

  return (
    <div className="rounded-lg2 bg-white p-4 shadow-soft">
      <div className="mb-2 flex items-center justify-between">
        <div className="text-sm font-semibold">Календарь событий</div>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between text-xs font-medium">
          <span>{monthLabel}</span>
          <div className="flex gap-1">
            <button className="flex h-6 w-6 items-center justify-center rounded-full border border-slate-200 text-[11px] text-slate-500">
              ‹
            </button>
            <button className="flex h-6 w-6 items-center justify-center rounded-full border border-slate-200 text-[11px] text-slate-500">
              ›
            </button>
          </div>
        </div>

        <table className="w-full table-fixed text-[11px]">
          <thead>
            <tr className="text-slate-500">
              {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((d) => (
                <th key={d} className="pb-1 text-center font-medium">
                  {d}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {weeks.map((week, wi) => (
              <tr key={wi}>
                {week.map((day, di) => (
                  <td key={di} className="h-7 text-center align-middle">
                    {day ? (
                      <div className="relative inline-flex h-7 w-7 items-center justify-center">
                        <div
                          className={
                            "flex h-7 w-7 items-center justify-center rounded-full text-[11px] " +
                            (day === 4
                              ? "bg-primary text-white font-semibold"
                              : "text-slate-700")
                          }
                        >
                          {day}
                        </div>
                        {markedDays.has(day) && (
                          <span className="absolute bottom-[2px] left-1/2 h-[5px] w-[5px] -translate-x-1/2 rounded-full bg-primary"></span>
                        )}
                      </div>
                    ) : null}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>

        {selectedEvent && (
          <div className="mt-1 text-xs">
            <div className="mb-1 flex items-center gap-2">
              <span
                className={
                  "rounded-full px-2 py-[2px] text-[10px] font-medium text-white " +
                  typeColorClass[selectedEvent.type]
                }
              >
                {typeLabel[selectedEvent.type]}
              </span>
              <span>{selectedEvent.title}</span>
            </div>
          </div>
        )}

        <div className="mt-1 flex flex-wrap gap-3 text-[11px] text-slate-500">
          <span className="flex items-center gap-1">
            <span className="h-2 w-2 rounded-full bg-blue-500" /> Встреча
          </span>
          <span className="flex items-center gap-1">
            <span className="h-2 w-2 rounded-full bg-red-500" /> Дедлайн
          </span>
          <span className="flex items-center gap-1">
            <span className="h-2 w-2 rounded-full bg-amber-500" /> Тренинг
          </span>
          <span className="flex items-center gap-1">
            <span className="h-2 w-2 rounded-full bg-green-600" /> Мероприятие
          </span>
        </div>
      </div>
    </div>
  );
};

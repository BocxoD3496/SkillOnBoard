"use client";

import React, { useMemo, useState } from "react";
import { CalendarEvent } from "@/lib/types";

interface Props {
  events: CalendarEvent[];
}

const eventTypeLabel: Record<CalendarEvent["type"], string> = {
  meeting: "Встреча",
  deadline: "Дедлайн",
  training: "Тренинг",
  event: "Мероприятие",
};

const eventTypeColor: Record<CalendarEvent["type"], string> = {
  meeting: "bg-sky-500",
  deadline: "bg-red-500",
  training: "bg-blue-500",
  event: "bg-emerald-500",
};

export const CalendarCard: React.FC<Props> = ({ events }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date(2025, 11, 1)); // December 2025
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const days = useMemo(() => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const firstDay = new Date(year, month, 1);
    const startWeekday = firstDay.getDay() || 7; // 1..7 (Mon=1)
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const cells: (Date | null)[] = [];
    for (let i = 1; i < startWeekday; i++) cells.push(null);
    for (let d = 1; d <= daysInMonth; d++) {
      cells.push(new Date(year, month, d));
    }
    return cells;
  }, [currentMonth]);

  const selectedDateStr =
    selectedDate?.toISOString().split("T")[0] ?? undefined;

  const eventsForSelected = useMemo(
    () =>
      selectedDateStr
        ? events.filter((e) => e.date === selectedDateStr)
        : [],
    [events, selectedDateStr]
  );

  const monthFormatter = new Intl.DateTimeFormat("ru-RU", {
    month: "long",
    year: "numeric",
  });

  const goPrev = () => {
    setCurrentMonth(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1)
    );
    setSelectedDate(null);
  };

  const goNext = () => {
    setCurrentMonth(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1)
    );
    setSelectedDate(null);
  };

  return (
    <section className="rounded-2xl bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-sm font-semibold text-slate-900">
        Календарь событий
      </h2>

      <div className="mb-3 flex items-center justify-between">
        <span className="text-xs font-medium capitalize text-slate-700">
          {monthFormatter.format(currentMonth)}
        </span>
        <div className="flex gap-2">
          <button
            onClick={goPrev}
            className="flex h-6 w-6 items-center justify-center rounded-full border border-slate-200 text-xs text-slate-600 hover:bg-slate-50"
          >
            ‹
          </button>
          <button
            onClick={goNext}
            className="flex h-6 w-6 items-center justify-center rounded-full border border-slate-200 text-xs text-slate-600 hover:bg-slate-50"
          >
            ›
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-1 text-center text-[11px] text-slate-500">
        {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((d) => (
          <div key={d} className="py-1">
            {d}
          </div>
        ))}
      </div>

      <div className="mt-1 grid grid-cols-7 gap-1 text-center text-xs">
        {days.map((date, idx) => {
          if (!date) return <div key={idx} />;
          const dateStr = date.toISOString().split("T")[0];
          const hasEvents = events.some((e) => e.date === dateStr);
          const isSelected =
            selectedDate && dateStr === selectedDateStr;

          return (
            <button
              key={dateStr}
              onClick={() => setSelectedDate(date)}
              className={
                "flex h-8 w-8 items-center justify-center rounded-full mx-auto transition " +
                (isSelected
                  ? "bg-blue-600 text-white"
                  : "text-slate-700 hover:bg-slate-100")
              }
            >
              <span className="relative">
                {date.getDate()}
                {hasEvents && !isSelected && (
                  <span className="absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-blue-500" />
                )}
              </span>
            </button>
          );
        })}
      </div>

      <div className="mt-4 space-y-2 text-xs">
        {selectedDateStr ? (
          eventsForSelected.length > 0 ? (
            eventsForSelected.map((e) => (
              <div
                key={e.id}
                className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-3 py-2"
              >
                <div>
                  <div className="font-medium text-slate-800">
                    {e.title}
                  </div>
                  <div className="text-[11px] text-slate-500">
                    {eventTypeLabel[e.type]}
                  </div>
                </div>
                <span
                  className={
                    "h-2 w-2 rounded-full " + eventTypeColor[e.type]
                  }
                />
              </div>
            ))
          ) : (
            <p className="text-slate-500">
              На выбранную дату событий нет.
            </p>
          )
        ) : (
          <p className="text-slate-500">
            Выберите дату, чтобы увидеть события.
          </p>
        )}
      </div>
    </section>
  );
};

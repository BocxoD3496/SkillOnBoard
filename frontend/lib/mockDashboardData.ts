import { CalendarEvent, Course, Task, ChatMessage } from "./types";

export const initialTasks: Task[] = [
  {
    id: "t1",
    title: "Пройти модуль по безопасности",
    time: "09:00",
    priority: "high",
    status: "done",
  },
  {
    id: "t2",
    title: "Встреча с наставником",
    time: "11:00",
    priority: "high",
    status: "todo",
  },
  {
    id: "t3",
    title: "Изучить документацию API",
    time: "14:00",
    priority: "medium",
    status: "todo",
  },
  {
    id: "t4",
    title: "Тест по корпоративной культуре",
    time: "16:00",
    priority: "medium",
    status: "todo",
  },
  {
    id: "t5",
    title: "Заполнить профиль сотрудника",
    priority: "low",
    status: "todo",
  },
];

export const calendarEvents: CalendarEvent[] = [
  {
    id: "e1",
    date: "2025-12-08",
    title: "Дедлайн модуля",
    type: "deadline",
  },
  {
    id: "e2",
    date: "2025-12-12",
    title: "Корпоративное мероприятие",
    type: "event",
  },
  {
    id: "e3",
    date: "2025-12-18",
    title: "Завершение курса",
    type: "deadline",
  },
];

export const courses: Course[] = [
  {
    id: "c1",
    title: "Введение в компанию",
    description: "Корпоративная культура и ценности",
    lessonsTotal: 5,
    lessonsCompleted: 5,
    durationMinutes: 45,
    status: "completed",
  },
  {
    id: "c2",
    title: "Безопасность данных",
    description: "Политики безопасности и защита информации",
    lessonsTotal: 8,
    lessonsCompleted: 5,
    durationMinutes: 90,
    status: "in_progress",
  },
  {
    id: "c3",
    title: "Работа с CRM-системой",
    description: "Работа с клиентской базой и задачами",
    lessonsTotal: 12,
    lessonsCompleted: 3,
    durationMinutes: 120,
    status: "in_progress",
  },
  {
    id: "c4",
    title: "Продуктовая линейка",
    description: "Продукты и услуги компании",
    lessonsTotal: 10,
    lessonsCompleted: 0,
    durationMinutes: 180,
    status: "not_started",
  },
];

export const initialAiMessages: ChatMessage[] = [
  {
    id: "m1",
    author: "assistant",
    text: "Привет! 👋 Я твой AI-помощник в SkillOnBoard. Могу помочь с обучением, ответить на вопросы о компании или подсказать следующий шаг.",
    createdAt: new Date().toISOString(),
  },
];

export const initialTeamMessages: ChatMessage[] = [
  {
    id: "m1",
    author: "system",
    text: "Канал #onboarding: здесь команда делится новостями и отвечает на вопросы стажеров.",
    createdAt: new Date().toISOString(),
  },
  {
    id: "m2",
    author: "assistant",
    text: "Не забудьте заполнить профиль в системе до конца недели ✅",
    createdAt: new Date().toISOString(),
  },
];

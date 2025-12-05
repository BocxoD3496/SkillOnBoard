import { Task, CalendarEvent, Course } from "./types";

export const tasks: Task[] = [
  {
    id: "1",
    title: "Пройти модуль по безопасности",
    time: "09:00",
    priority: "high",
    completed: false,
  },
  {
    id: "2",
    title: "Встреча с наставником",
    time: "11:00",
    priority: "high",
    completed: false,
  },
  {
    id: "3",
    title: "Изучить документацию API",
    time: "14:00",
    priority: "medium",
    completed: true,
  },
  {
    id: "4",
    title: "Тест по корпоративной культуре",
    time: "16:00",
    priority: "medium",
    completed: false,
  },
  {
    id: "5",
    title: "Заполнить профиль сотрудника",
    priority: "low",
    completed: false,
  },
];

export const calendarEvents: CalendarEvent[] = [
  {
    id: "ce1",
    day: 8,
    type: "deadline",
    title: "Дедлайн модуля",
  },
  {
    id: "ce2",
    day: 12,
    type: "event",
    title: "Корпоративное мероприятие",
  },
  {
    id: "ce3",
    day: 18,
    type: "deadline",
    title: "Завершение курса",
  },
];

export const courses: Course[] = [
  {
    id: "c1",
    title: "Введение в компанию",
    description: "Основы корпоративной культуры и ценности",
    status: "done",
    lessonsCompleted: 5,
    lessonsTotal: 5,
    duration: "45 мин",
  },
  {
    id: "c2",
    title: "Безопасность данных",
    description: "Политики безопасности и защита информации",
    status: "in-progress",
    lessonsCompleted: 5,
    lessonsTotal: 8,
    duration: "1.5 часа",
  },
  {
    id: "c3",
    title: "Работа с CRM системой",
    description: "Обучение работе с клиентской базой",
    status: "in-progress",
    lessonsCompleted: 3,
    lessonsTotal: 12,
    duration: "2 часа",
  },
  {
    id: "c4",
    title: "Продуктовая линейка",
    description: "Изучение продуктов и услуг компании",
    status: "not-started",
    lessonsCompleted: 0,
    lessonsTotal: 10,
    duration: "3 часа",
  },
];

export type TaskPriority = "low" | "medium" | "high";
export type TaskStatus = "todo" | "done";

export interface Task {
  id: string;
  title: string;
  time?: string;
  priority: TaskPriority;
  status: TaskStatus;
}

export type EventType = "meeting" | "deadline" | "training" | "event";

export interface CalendarEvent {
  id: string;
  date: string; // YYYY-MM-DD
  title: string;
  type: EventType;
}

export type CourseStatus = "not_started" | "in_progress" | "completed";

export interface Course {
  id: string;
  title: string;
  description: string;
  lessonsTotal: number;
  lessonsCompleted: number;
  durationMinutes: number;
  status: CourseStatus;
}

export interface ChatMessage {
  id: string;
  author: "user" | "assistant" | "system";
  text: string;
  createdAt: string;
}

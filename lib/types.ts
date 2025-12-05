export type Priority = "high" | "medium" | "low";

export interface Task {
  id: string;
  title: string;
  time?: string;
  priority: Priority;
  completed: boolean;
}

export type EventType = "meeting" | "deadline" | "training" | "event";

export interface CalendarEvent {
  id: string;
  day: number;
  type: EventType;
  title: string;
}

export type CourseStatus = "done" | "in-progress" | "not-started";

export interface Course {
  id: string;
  title: string;
  description: string;
  status: CourseStatus;
  lessonsCompleted: number;
  lessonsTotal: number;
  duration: string;
}

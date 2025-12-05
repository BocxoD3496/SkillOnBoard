# SkillOnBoard — AI-панель онбординга стажёра

Интерфейс дашборда для платформы онбординга и обучения сотрудников с AI-помощником.  
Фронтенд реализован на **Next.js + TypeScript + Tailwind CSS** с модульной структурой компонентов.

---

## Функционал (MVP)

- Главная страница дашборда стажёра:
  - Блок **"Задачи на сегодня"** с приоритетами и статусами.
  - **Календарь событий** (встречи, дедлайны, тренинги, мероприятия).
  - Блок **"Мои курсы"** с прогресс-баром и статусами.
  - **AI-помощник** в правой колонке (чат с заглушкой, готов к подключению бэкенда).

- Адаптивный layout:
  - Desktop: 3 колонки (задачи / календарь+курсы / чат).
  - Mobile: колонки складываются вертикально.

---

## Технологический стек

**Основное:**

- [Next.js](https://nextjs.org/) (App Router)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)

**Структура кода:**

- `app/` — страницы и layout:
  - `layout.tsx` — базовый layout.
  - `page.tsx` — главная страница дашборда.
- `components/` — переиспользуемые компоненты:
  - `layout/AppShell.tsx` — общий каркас приложения.
  - `layout/Header.tsx` — шапка с навигацией.
  - `dashboard/TasksCard.tsx` — карточка задач.
  - `dashboard/CalendarCard.tsx` — календарь.
  - `dashboard/CoursesCard.tsx` — карточка курсов.
  - `dashboard/AIAssistantCard.tsx` — карточка AI-помощника.
- `lib/` — вспомогательные модули:
  - `types.ts` — общие типы (Task, Course, CalendarEvent и т.д.).
  - `mockDashboardData.ts` — мок-данные для интерфейса.
- `styles/globals.css` — глобальные стили и настройки.

---

## Требования

### ПО

- **Node.js**: версия **>= 18** (рекомендовано LTS)
- **npm** или **pnpm** / **yarn**
- Git (для работы с репозиторием)

### Аппаратные

Для разработки достаточно:

- 4+ GB RAM
- Любая современная ОС (Linux / macOS / Windows)

---

## Установка и запуск

```bash
# 1. Клонировать репозиторий
git clone https://github.com/BocxoD3496/skillonboard.git
cd skillonboard

# 2. Установить зависимости
npm install
# или
# pnpm install
# yarn install

# 3. Запустить dev-сервер
npm run dev
# или
# pnpm dev
# yarn dev

# 4. Открыть в браузере
# http://localhost:3000

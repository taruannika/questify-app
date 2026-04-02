import type { Achievement } from "../types/types";

export const achievements: Achievement[] = [
  {
    id: 1,
    label: "First Steps",
    desc: "Complete your first task",
    icon: "🎯",
    condition: (c: number) => c >= 1,
  },
  {
    id: 2,
    label: "Getting Started",
    desc: "Complete 5 tasks",
    icon: "🚀",
    condition: (c: number) => c >= 5,
  },
  {
    id: 3,
    label: "Halfway There",
    desc: "Complete 10 tasks",
    icon: "⚡",
    condition: (c: number) => c >= 10,
  },
  {
    id: 4,
    label: "Task Master",
    desc: "Complete all tasks",
    icon: "👑",
    condition: (c: number, total: number) => c >= total,
  },
  {
    id: 5,
    label: "Level Up",
    desc: "Reach level 3",
    icon: "⭐",
    condition: (_c: number, _t: number, level: number) => level >= 3,
  },
  {
    id: 6,
    label: "Veteran",
    desc: "Reach level 5",
    icon: "🏆",
    condition: (_c: number, _t: number, level: number) => level >= 5,
  },
  {
    id: 7,
    label: "Collector",
    desc: "Favorite 3 tasks",
    icon: "❤️",
    condition: (_c: number, _t: number, _l: number, fav: number) => fav >= 3,
  },
  {
    id: 8,
    label: "XP Hunter",
    desc: "Earn 200 total XP",
    icon: "💎",
    condition: (_c: number, _t: number, _l: number, _f: number, xp: number) =>
      xp >= 200,
  },
];

export type Task = {
  id: number;
  title: string;
  description: string;
  hint: string;
  xp: number;
  completed: boolean;
  category: "explore" | "move" | "creative" | "mindfulness";
  difficulty: "easy" | "medium" | "hard";
  favorite: boolean;
};

export type Theme = {
  id: number;
  name: string;
  image: string;
};

export type Achievement = {
  id: number;
  label: string;
  desc: string;
  icon: string;
  condition: (
    completedTasks: number,
    totalTasks: number,
    level: number,
    favoriteTasks: number,
    totalXp: number,
  ) => boolean;
};

export type Store = {
  tasks: Task[];
  level: number;
  xp: number;
  totalXp: number;
  setFavorite: (taskId: number) => void;
  completeTask: (taskId: number) => void;
  theme: string;
  setTheme: (themeName: string) => void;
  userName: string;
  setUsername: (value: string) => void;
  reset: () => void;
};

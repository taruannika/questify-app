import { create } from "zustand";
import { taskData } from "../data/taskData";
import type { Store } from "../types/types";
import { persist } from "zustand/middleware";

export const useGameStore = create<Store>()(
  persist(
    (set) => ({
      // tehtävät
      tasks: taskData,
      setFavorite: (taskId) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === taskId ? { ...task, favorite: !task.favorite } : task,
          ),
        })),
      completeTask: (taskId) =>
        set((state) => {
          const task = state.tasks.find((t) => t.id === taskId);
          if (!task) return state;

          const completing = !task.completed;
          const xpChange = completing ? task.xp : -task.xp;

          // kokonais xp
          const totalXp = (state.level - 1) * 100 + state.xp + xpChange;

          // seuraava level, kasvaa yhdellä joka 100 xp
          const newLevel = Math.max(
            1,
            Math.floor(Math.max(0, totalXp) / 100) + 1,
          );

          // nollaantuu joka level
          const newXp = Math.max(0, totalXp) % 100;

          return {
            tasks: state.tasks.map((t) =>
              t.id === taskId ? { ...t, completed: completing } : t,
            ),
            xp: newXp,
            totalXp: totalXp,
            level: newLevel,
          };
        }),

      //pelaaja
      level: 1,
      xp: 0,
      totalXp: 0,
      userName: "",
      setUsername: (value) => set({ userName: value }),

      //asetukset
      theme: "light",
      setTheme: (themeName) => set({ theme: themeName }),

      //resetoi
      reset: () =>
        set({
          xp: 0,
          totalXp: 0,
          level: 1,
          userName: "",
          tasks: taskData,
          theme: "light",
        }),
    }),
    { name: "game-storage" },
  ),
);

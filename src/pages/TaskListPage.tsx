import { useState } from "react";
import TaskCard from "../components/TaskCard";
import { useGameStore } from "../stores/gameStore";
import type { Task } from "../types/types";

type Category = Task["category"] | "all";

const categories: { value: Category; label: string }[] = [
  { value: "all", label: "All" },
  { value: "explore", label: "Explore" },
  { value: "move", label: "Move" },
  { value: "creative", label: "Creative" },
  { value: "mindfulness", label: "Mindfulness" },
];

const TaskListPage = () => {
  const tasks = useGameStore((state) => state.tasks);
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const filteredTasks =
    activeCategory === "all"
      ? tasks
      : tasks.filter((task) => task.category === activeCategory);

  return (
    <div className="max-w-6xl mx-auto p-4 grid gap-4">
      <div className="filter flex flex-wrap gap-2">
        {categories.map((cat) => (
          <input
            key={cat.value}
            className={`btn ${cat.value === "all" ? "filter-reset" : ""}`}
            type="radio"
            name="category"
            aria-label={cat.label}
            checked={activeCategory === cat.value}
            onChange={() => setActiveCategory(cat.value)}
          />
        ))}
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {filteredTasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default TaskListPage;

import { useGameStore } from "../stores/gameStore";
import TaskCard from "../components/TaskCard";

const FavoritesPage = () => {
  const tasks = useGameStore((state) => state.tasks).filter((t) => t.favorite);

  if (tasks.length <= 0)
    return (
      <div className="min-h-[60%] flex justify-center items-center">
        <h2 className="font-semibold text-3xl text-center">
          You have not added any tasks to your favorites yet!
        </h2>
      </div>
    );
  return (
    <div>
      <div className="grid gap-4 md:grid-cols-2">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default FavoritesPage;

import { useNavigate } from "react-router-dom";
import type { Task } from "../types/types";
import { GrFavorite } from "react-icons/gr";
import { useGameStore } from "../stores/gameStore";

interface TaskCardProps {
  task: Task;
}
const TaskCard = ({ task }: TaskCardProps) => {
  const navigate = useNavigate();
  const setFavorite = useGameStore((state) => state.setFavorite);
  return (
    <div className="card w-full bg-base-100 card-sm shadow-sm p-4">
      <div className="flex items-center justify-between p-2">
        <span className="badge badge-outline badge-primary">
          {task.category}
        </span>
        <button className="btn btn-circle" onClick={() => setFavorite(task.id)}>
          <GrFavorite
            className={task.favorite ? "text-red-500" : "text-base-content"}
          />
        </button>
      </div>
      <div className="card-body">
        {task.completed && (
          <span className="badge badge-secondary">Task Completed!</span>
          // <span className="badge badge-primary">Task Completed!</span>
        )}
        <h2 className="card-title text-base-content">{task.title}</h2>
        <p className="text-base-content/60">{task.description}</p>
      </div>
      <div className="card-actions justify-end">
        <button
          className="btn btn-primary "
          onClick={() => navigate(`/task/${task.id}`)}
        >
          Go To Task
        </button>
      </div>
    </div>
  );
};

export default TaskCard;

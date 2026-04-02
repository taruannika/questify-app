import { useParams } from "react-router-dom";
import { useGameStore } from "../stores/gameStore";

const TaskPage = () => {
  const { id } = useParams();

  const completeTask = useGameStore((state) => state.completeTask);

  const task = useGameStore((state) =>
    state.tasks.find((task) => task.id === Number(id)),
  );

  if (!task) return <div>Task not found</div>;

  return (
    <div className="max-w-md bg-base-100 p-4 flex flex-col gap-5 mx-auto rounded-sm shadow-sm">
      <h1 className="font-bold text-2xl text-center mb-4">{task.title}</h1>

      <div className="flex items-center justify-evenly">
        <span className="badge badge-primary">{task.category}</span>
        <span className="badge badge-accent">{task.difficulty}</span>
        <span className="badge badge-secondary">{task.xp} XP</span>
        <span className="badge badge-error">
          {task.completed ? "Completed" : "Pending"}
        </span>
      </div>

      <p className="p-2">{task.description}</p>

      <div className="bg-base-200 text-base-content p-2 rounded-sm shadow-sm border-2 border-primary">
        <p>Hint: {task.hint}</p>
      </div>

      <button className="btn btn-primary" onClick={() => completeTask(task.id)}>
        {task.completed ? "Undo task" : "Mark as completed"}
      </button>
    </div>
  );
};

export default TaskPage;

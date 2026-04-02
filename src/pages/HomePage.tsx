import { useGameStore } from "../stores/gameStore";
import { Link, useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const level = useGameStore((state) => state.level);
  const xp = useGameStore((state) => state.xp);
  const totalXp = useGameStore((state) => state.totalXp);
  const tasks = useGameStore((state) => state.tasks);

  // tehtävien statsit
  const completedTasks = tasks.filter((task) => task.completed).length;
  const pendingTasks = tasks.filter((task) => !task.completed).length;
  const favoriteTasks = tasks.filter((task) => task.favorite).length;

  // tehtävien määrä kategorioittain
  const categoryStats = {
    explore: tasks.filter((task) => task.category === "explore").length,
    move: tasks.filter((task) => task.category === "move").length,
    creative: tasks.filter((task) => task.category === "creative").length,
    mindfulness: tasks.filter((task) => task.category === "mindfulness").length,
  };

  // etsitään ensimmäinen tehtävä jota ei ole tehty
  const nextPendingTask = tasks.find((task) => !task.completed);

  return (
    <div className="max-w-6xl mx-auto grid gap-5 p-4">
      {/* Profiili & XP kortti */}
      <div className="bg-primary p-6 rounded-lg text-primary-content shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <div>
            <p className="text-sm opacity-75">Level</p>
            <p className="text-5xl font-bold">{level}</p>
          </div>
          <div className="text-right">
            <p className="text-sm opacity-75">Total XP</p>
            <p className="text-4xl font-bold">{totalXp}</p>
          </div>
        </div>
        <div className="w-full">
          <div className="flex justify-between text-sm mb-2">
            <span>Progress to next level</span>
            <span>{xp} / 100</span>
          </div>
          <progress
            className="progress progress-warning w-full"
            value={xp}
            max="100"
          ></progress>
        </div>
      </div>

      {/* statsit */}
      <div className="grid md:grid-cols-4 gap-4">
        <div className="bg-base-100 p-4 rounded-lg shadow">
          <p className="text-sm opacity-75">Completed</p>
          <p className="text-3xl font-bold text-success">{completedTasks}</p>
          <p className="text-xs opacity-50 mt-1">of {tasks.length} tasks</p>
        </div>

        <div className="bg-base-100 p-4 rounded-lg shadow">
          <p className="text-sm opacity-75">Pending</p>
          <p className="text-3xl font-bold text-warning">{pendingTasks}</p>
          <p className="text-xs opacity-50 mt-1">Tasks to do</p>
        </div>

        <div className="bg-base-100 p-4 rounded-lg shadow">
          <p className="text-sm opacity-75">Favorites</p>
          <p className="text-3xl font-bold text-error">{favoriteTasks}</p>
          <p className="text-xs opacity-50 mt-1">Liked tasks</p>
        </div>

        <div className="bg-base-100 p-4 rounded-lg shadow">
          <p className="text-sm opacity-75">Completion Rate</p>
          <p className="text-3xl font-bold text-info">
            {tasks.length > 0
              ? Math.round((completedTasks / tasks.length) * 100)
              : 0}
            %
          </p>
          <p className="text-xs opacity-50 mt-1">Progress</p>
        </div>
      </div>

      {/* kategoriat */}
      <div className="card bg-base-100 shadow">
        <div className="card-body">
          <h2 className="card-title">Tasks by Category</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-center justify-between">
              <span>Explore</span>
              <span className="badge badge-primary">
                {categoryStats.explore}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span>Move</span>
              <span className="badge badge-secondary">
                {categoryStats.move}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span>Creative</span>
              <span className="badge badge-accent">
                {categoryStats.creative}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span>Mindfulness</span>
              <span className="badge badge-info">
                {categoryStats.mindfulness}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* seuraava tehtävä */}
      <div className="grid md:grid-cols-2 gap-4">
        {/* seuraava tehtävä on olemassa */}
        {nextPendingTask && (
          <div className="card bg-base-100 shadow">
            <div className="card-body">
              <h2 className="card-title">Up Next</h2>
              <p className="text-lg font-semibold">{nextPendingTask.title}</p>
              <p className="text-sm opacity-75">
                {nextPendingTask.description}
              </p>
              <div className="flex gap-2 mt-4">
                <span className="badge badge-outline">
                  {nextPendingTask.difficulty}
                </span>
                <span className="badge badge-outline">
                  +{nextPendingTask.xp} XP
                </span>
              </div>
              <button
                onClick={() => navigate(`/task/${Number(nextPendingTask.id)}`)}
                className="btn btn-primary btn-sm mt-4 w-full"
              >
                Go to task
              </button>
            </div>
          </div>
        )}

        {/* pikatoiminnot*/}
        <div className="card bg-base-100 shadow">
          <div className="card-body">
            <h2 className="card-title">Quick Actions</h2>
            <div className="flex flex-col gap-2">
              <Link to="/tasklist" className="btn btn-outline btn-sm">
                View All Tasks
              </Link>
              <Link to="/profile" className="btn btn-outline btn-sm">
                View Profile
              </Link>
              <Link to="/settings" className="btn btn-outline btn-sm">
                Settings
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

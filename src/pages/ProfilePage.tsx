import { useGameStore } from "../stores/gameStore";
import { achievements } from "../data/achievementsData";

const ProfilePage = () => {
  const userName = useGameStore((state) => state.userName);
  const level = useGameStore((state) => state.level);
  const xp = useGameStore((state) => state.xp);
  const totalXp = useGameStore((state) => state.totalXp);
  const tasks = useGameStore((state) => state.tasks);

  const completedTasks = tasks.filter((t) => t.completed).length;
  const favoriteTasks = tasks.filter((t) => t.favorite).length;
  const completionRate =
    tasks.length > 0 ? Math.round((completedTasks / tasks.length) * 100) : 0;

  const categoryStats = [
    {
      label: "Explore",
      color: "progress-primary",
      completed: tasks.filter((t) => t.category === "explore" && t.completed)
        .length,
      total: tasks.filter((t) => t.category === "explore").length,
    },
    {
      label: "Move",
      color: "progress-secondary",
      completed: tasks.filter((t) => t.category === "move" && t.completed)
        .length,
      total: tasks.filter((t) => t.category === "move").length,
    },
    {
      label: "Creative",
      color: "progress-accent",
      completed: tasks.filter((t) => t.category === "creative" && t.completed)
        .length,
      total: tasks.filter((t) => t.category === "creative").length,
    },
    {
      label: "Mindfulness",
      color: "progress-info",
      completed: tasks.filter(
        (t) => t.category === "mindfulness" && t.completed,
      ).length,
      total: tasks.filter((t) => t.category === "mindfulness").length,
    },
  ];

  const initials = userName
    ? userName
        .split(" ")
        .map((w) => w[0])
        .join("")
        .toUpperCase()
        .slice(0, 2)
    : "?";

  return (
    <div className="max-w-6xl mx-auto grid gap-5 p-4">
      {/* Profiilin header */}
      <div className="bg-primary p-6 rounded-lg text-primary-content shadow-lg flex flex-col sm:flex-row items-center gap-6">
        <div className="avatar placeholder">
          <div className="bg-primary-content text-primary rounded-full w-24 h-24 flex items-center justify-center">
            <span className="text-3xl font-black">{initials}</span>
          </div>
        </div>
        <div className="flex-1 text-center sm:text-left">
          <h2 className="text-3xl font-bold">{userName || "Anonymous"}</h2>
          <div className="flex flex-wrap gap-2 mt-2 justify-center sm:justify-start">
            <span className="badge badge-warning font-bold">Level {level}</span>
            <span className="badge badge-success">
              {completedTasks} completed
            </span>
            <span className="badge badge-error">{favoriteTasks} favorites</span>
          </div>
          <div className="mt-4 w-full">
            <div className="flex justify-between text-sm mb-1 opacity-80">
              <span>XP to next level</span>
              <span>{xp} / 100</span>
            </div>
            <progress
              className="progress progress-warning w-full"
              value={xp}
              max="100"
            />
          </div>
        </div>
      </div>

      {/* Statsit */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-base-100 p-4 rounded-lg shadow text-center">
          <p className="text-sm opacity-75">Total XP</p>
          <p className="text-3xl font-bold text-warning">{totalXp}</p>
          <p className="text-xs opacity-50 mt-1">Earned overall</p>
        </div>
        <div className="bg-base-100 p-4 rounded-lg shadow text-center">
          <p className="text-sm opacity-75">Level</p>
          <p className="text-3xl font-bold text-primary">{level}</p>
          <p className="text-xs opacity-50 mt-1">Current level</p>
        </div>
        <div className="bg-base-100 p-4 rounded-lg shadow text-center">
          <p className="text-sm opacity-75">Completed</p>
          <p className="text-3xl font-bold text-success">{completedTasks}</p>
          <p className="text-xs opacity-50 mt-1">of {tasks.length} tasks</p>
        </div>
        <div className="bg-base-100 p-4 rounded-lg shadow text-center">
          <p className="text-sm opacity-75">Completion</p>
          <p className="text-3xl font-bold text-info">{completionRate}%</p>
          <p className="text-xs opacity-50 mt-1">Progress rate</p>
        </div>
      </div>

      {/* Kategoriat */}
      <div className="card bg-base-100 shadow">
        <div className="card-body">
          <h2 className="card-title">Progress by Category</h2>
          <div className="grid md:grid-cols-2 gap-4 mt-2">
            {categoryStats.map((cat) => (
              <div key={cat.label}>
                <div className="flex justify-between text-sm mb-1">
                  <span>{cat.label}</span>
                  <span className="opacity-60">
                    {cat.completed} / {cat.total}
                  </span>
                </div>
                <progress
                  className={`progress ${cat.color} w-full`}
                  value={cat.completed}
                  max={cat.total || 1}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Saavutukset */}
      <div className="card bg-base-100 shadow">
        <div className="card-body">
          <h2 className="card-title">Achievements</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-2">
            {achievements.map((a) => {
              const unlocked = a.condition(
                completedTasks,
                tasks.length,
                level,
                favoriteTasks,
                totalXp,
              );
              return (
                <div
                  key={a.id}
                  className={`p-3 rounded-lg text-center border transition-all ${
                    unlocked
                      ? "border-success bg-success/10"
                      : "border-base-300 opacity-40"
                  }`}
                >
                  <div className="text-3xl mb-1">{a.icon}</div>
                  <p className="font-bold text-sm">{a.label}</p>
                  <p className="text-xs opacity-60 mt-0.5">{a.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

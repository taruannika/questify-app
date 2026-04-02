import { useLocation, useParams } from "react-router-dom";
import { useGameStore } from "../stores/gameStore";

const Navbar = () => {
  const level = useGameStore((state) => state.level);
  const tasks = useGameStore((state) => state.tasks);

  const location = useLocation();
  const { id } = useParams();

  const titles: Record<string, string> = {
    "/": "Home",
    "/tasklist": "Tasks",
    "/profile": "Profile",
    "/settings": "Settings",
  };

  const getTitle = (path: string) => {
    if (path.startsWith("/task/")) {
      const task = tasks.find((task) => task.id === Number(id));
      return `Task ${task?.id}`;
    }

    return titles[path];
  };

  return (
    <div className="bg-base-100 fixed top-0 inset-x-0 z-50 shadow-sm lg:left-56 lg:shadow-[0_8px_10px_-10px_rgba(0,0,0,0.45)] p-4 flex items-center justify-between">
      {/* Piilotettu desktopilla */}
      <h1 className="lg:hidden text-base-content font-semibold text-lg ">
        Questify
      </h1>

      {/* Otsikko asetetaan dynaamisesti riippuen sijainnista */}
      <h1 className="sm: hidden lg:block text-base-content font-semibold text-lg">
        {getTitle(location.pathname)}
      </h1>

      <div>
        <span className="badge badge-primary font-medium">{`Level ${level}`}</span>
      </div>
    </div>
  );
};

export default Navbar;

import { CiBoxList, CiHeart, CiHome, CiSettings, CiUser } from "react-icons/ci";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-base-100">
      <h1 className="text-base-content font-semibold text-xl pt-[10%] text-center">
        Questify
      </h1>

      <ul className="flex flex-col gap-5 pt-[30%] p-2">
        <li>
          {/* Käytetään Link komponentin sijaan navlink komponenttia, jotta saadaan active class suoraan määriteltyä */}
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-5 rounded-sm text-base-content  p-2  border-2 border-primary"
                : "flex items-center gap-5 rounded-sm text-base-content hover:bg-base-200 transition-colors p-2"
            }
          >
            <CiHome className="text-3xl " />
            <p>Home</p>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/tasklist"
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-5 rounded-sm text-base-content  p-2  border-2 border-primary"
                : "flex items-center gap-5 rounded-sm text-base-content hover:bg-base-200 transition-colors p-2"
            }
          >
            <CiBoxList className="text-3xl " />
            <p>Tasks</p>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/favorites"
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-5 rounded-sm text-base-content  p-2  border-2 border-primary"
                : "flex items-center gap-5 rounded-sm text-base-content hover:bg-base-200 transition-colors p-2"
            }
          >
            <CiHeart className="text-3xl " />
            <p>Favorites</p>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-5 rounded-sm text-base-content  p-2  border-2 border-primary"
                : "flex items-center gap-5 rounded-sm text-base-content hover:bg-base-200 transition-colors p-2"
            }
          >
            <CiUser className="text-3xl " />
            <p>Profile</p>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-5 rounded-sm text-base-content  p-2  border-2 border-primary"
                : "flex items-center gap-5 rounded-sm text-base-content hover:bg-base-200 transition-colors p-2"
            }
          >
            <CiSettings className="text-3xl " />
            <p>Settings</p>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

import { CiBoxList, CiHeart, CiHome, CiSettings, CiUser } from "react-icons/ci";
import { Link } from "react-router-dom";

const BottomNav = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm fixed bottom-0 inset-x-0 z-50 text-base-content">
      <ul className="flex items-center justify-between w-full">
        <li>
          <Link to="/">
            <button className="btn btn-ghost ">
              <CiHome className="text-3xl text-base-content" />
            </button>
          </Link>
        </li>

        <li>
          <Link to="/tasklist">
            <button className="btn btn-ghost ">
              <CiBoxList className="text-3xl text-base-content" />
            </button>
          </Link>
        </li>

        <li>
          <Link to="/favorites">
            <button className="btn btn-ghost ">
              <CiHeart className="text-3xl text-base-content" />
            </button>
          </Link>
        </li>

        <li>
          <Link to="/profile">
            <button className="btn btn-ghost">
              <CiUser className="text-3xl text-base-content" />
            </button>
          </Link>
        </li>

        <li>
          <Link to="/settings">
            <button className="btn btn-ghost ">
              <CiSettings className="text-3xl text-base-content" />
            </button>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default BottomNav;

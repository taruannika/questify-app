import { Outlet } from "react-router-dom";
import { BottomNav, Navbar, Sidebar } from "../components";

const Layout = () => {
  return (
    <div className="h-screen overflow-hidden bg-base-100">
      <Navbar />

      {/* pää kontentti ja sivupalkki */}
      <div className="flex h-full pb-20 md:pb-0">
        {/* Sivupalkki, piilotettu mobiilissa ja tabletilla */}
        <div className="hidden md:block w-56 h-full shrink-0">
          <Sidebar />
        </div>

        {/* Pää kontentti */}
        <main className="flex-1 min-w-0 w-full p-4 pt-20 overflow-y-auto bg-base-200">
          <Outlet />
        </main>
      </div>

      {/* Ala navigaatio */}
      <div className="md:hidden">
        <BottomNav />
      </div>
    </div>
  );
};

export default Layout;

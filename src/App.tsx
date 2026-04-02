import { Route, Routes } from "react-router-dom";
import {
  FavoritesPage,
  Home,
  Layout,
  ProfilePage,
  SettingsPage,
  TaskListPage,
  TaskPage,
} from "./pages";
import { useGameStore } from "./stores/gameStore";
import { useEffect } from "react";

function App() {
  const theme = useGameStore((state) => state.theme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
  return (
    <div>
      <Routes>
        {/* Kaikki sivut käyttää samaa layoutia */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/tasklist" element={<TaskListPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/task/:id" element={<TaskPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

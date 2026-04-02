import ThemeCard from "../components/ThemeCard";
import { useGameStore } from "../stores/gameStore";
import { Themes } from "../data/themeData";
import type React from "react";
import { useState } from "react";

const SettingsPage = () => {
  const setTheme = useGameStore((state) => state.setTheme);
  const userName = useGameStore((state) => state.userName);
  const setUsername = useGameStore((state) => state.setUsername);
  const reset = useGameStore((state) => state.reset);

  const [inputValue, setInputValue] = useState("");
  const [saved, setSaved] = useState(false);

  const onSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!inputValue) return;
    setUsername(inputValue);
    setSaved(true);
    setInputValue("");
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="max-w-6xl mx-auto grid gap-6 p-4">
      <div className="grid lg:grid-cols-2 gap-6 items-start">
        {/* teeman valinta */}
        <div className="bg-base-100 p-6 rounded-lg shadow">
          <h2 className="font-bold text-2xl mb-4">Select Theme</h2>
          <ul className="grid grid-cols-2 lg:grid-cols-3 gap-3">
            {Themes.map((theme) => (
              <ThemeCard
                onClickAction={setTheme}
                key={theme.id}
                theme={theme}
              />
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-6">
          {/* Käyttäjätunnuksen vaihtaminen */}
          <div className="bg-base-100 p-6 rounded-lg shadow">
            <h2 className="font-bold text-2xl mb-1">Username</h2>
            <p className="text-sm opacity-60 mb-4">
              Current: <span className="font-semibold">{userName || "—"}</span>
            </p>
            <form onSubmit={onSubmit} className="flex flex-col gap-3">
              <input
                type="text"
                value={inputValue}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setInputValue(event.target.value)
                }
                placeholder="New username..."
                className="input w-full"
              />
              <button className="btn btn-primary">
                {saved ? "Saved!" : "Save Username"}
              </button>
            </form>
          </div>

          {/* Sovelluksen resetointi */}
          <div className="bg-base-100 p-6 rounded-lg shadow border border-error/20">
            <h2 className="font-bold text-2xl mb-1">Reset Progress</h2>
            <p className="text-sm opacity-60 mb-4">
              This will reset your level, XP, username and all task progress.
            </p>
            <button onClick={reset} className="btn btn-error w-full">
              Reset Progress
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;

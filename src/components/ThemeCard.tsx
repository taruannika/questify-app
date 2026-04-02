import type { Theme } from "../types/types";

type ThemeCardProps = {
  theme: Theme;
  onClickAction: (themeName: string) => void;
};

const ThemeCard = ({ theme, onClickAction }: ThemeCardProps) => {
  return (
    <div
      onClick={() => onClickAction(theme.name)}
      className="bg-base-100 w-fit cursor-pointer p-2 shadow-sm hover:bg-base-300 transition-colors"
    >
      <h1 className="text-center font-semibold text-xl mb-2">{theme.name}</h1>
      <figure>
        <img src={theme.image} alt={theme.name} />
      </figure>
    </div>
  );
};

export default ThemeCard;

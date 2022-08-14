import { useDarkTheme } from "./hooks/useDarkTheme";
import { Moon } from "./icons/Moon";
import { Sun } from "./icons/Sun";

export const ThemeToggle = () => {
  const [colorTheme, setColorTheme] = useDarkTheme();

  const switchState = () => {
    setColorTheme(colorTheme);
  };

  return (
    <div className="fixed bottom-3 opacity-20 hover:opacity-100">
      <div
        onClick={switchState}
        className="absolute top-[14px] left-[10px] z-10 cursor-pointer"
      >
        <Moon />
      </div>
      <div
        onClick={switchState}
        className="absolute top-[14px] left-[52px] z-10 cursor-pointer"
      >
        <Sun />
      </div>
      <label
        htmlFor="default-toggle"
        className="relative inline-flex items-center"
      >
        <div
          onClick={switchState}
          className={`
          h-[42px]
          w-[80px] 
          cursor-pointer 
          rounded-full
          border
          border-solid
          border-[#90A4AE]
          bg-transparent 
          dark:border-[#90A4AE] 
          ${colorTheme === "dark" ? "after:translate-x-full" : ""}
          after:bg-red-300 
          after:absolute 
          after:top-[2px] 
          after:left-[2px] 
          after:h-[38px]  
          after:w-[38px] 
          after:rounded-full 
          after:transition-all 
          after:content-[''] 
          `}
        ></div>
      </label>
    </div>
  );
};

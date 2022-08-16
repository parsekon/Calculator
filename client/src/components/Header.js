import { ThemeToggle } from "./ThemeToggle";

const Header = (props) => {
  return (
    <div className="flex h-screen h-[70px] justify-between bg-white p-4 dark:bg-black">
      <h1 className="font-mono text-3xl uppercase text-black dark:text-white">
        <span className="text-bold text-red-600">Crypto </span>Calculator
      </h1>
        <ThemeToggle />
      <div className="flex">
        <h1 className="2xl h-[40px] py-2 uppercase text-black dark:text-white">
        {props.account.substring(0, 5)+"..."+props.account.substring(38, )}
        </h1>
        <button
          onClick={props.onClick}
          className="ml-4 h-[40px] dark:text-white"
        >
          <img className="w-6" alt="logout" src="/images/logout.png" />
        </button>
      </div>
    </div>
  );
};

export default Header;

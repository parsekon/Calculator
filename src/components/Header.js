const Header = (props) => {
  return (
    <div className="flex h-screen justify-between  bg-white p-4 dark:bg-black h-[70px]">
      <h1 className="font-mono text-3xl uppercase text-black dark:text-white">
        <span className="text-bold text-red-600">Crypto </span>Calculator
      </h1>
      <div className="flex">
      <h1 className="2xl py-2 h-[40px] uppercase text-black dark:text-white">
        {props.account}
      </h1>
      <button onClick={props.onClick} className="dark:text-white h-[40px] ml-4">
        <img className="w-6" alt="logout" src="/images/logout.png" />
      </button>
      </div>
    </div>
  );
};

export default Header;

// {loginAccount.substring(0, 5)+"..."+loginAccount.substring(38, )}

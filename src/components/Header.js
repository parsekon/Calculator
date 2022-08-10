import { useEffect, useState } from "react";

const Header = () => {
    const [loginAccount, setLoginAccount] = useState();

    useEffect(() => {
      setLoginAccount(sessionStorage.getItem("login"));
    }, []);
    
  return (
    <div className="flex h-screen justify-between  bg-white p-4 dark:bg-black">
      <h1 className="font-mono text-3xl uppercase text-black dark:text-white">
        <span className="text-bold text-red-600">Crypto </span>Calculator
      </h1>
      {/* <button className="xl h-12 border-2 border-red-600 px-[15px] py-2 text-xl hover:bg-red-600 hover:text-white dark:text-white">
        Connect Metamask
      </button> */}
      <h1 className="text-black uppercase 2xl py-2 dark:text-white">{loginAccount}</h1>
    </div>
  );
};

export default Header;

// {loginAccount.substring(0, 5)+"..."+loginAccount.substring(38, )}
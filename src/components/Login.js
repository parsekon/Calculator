import { useEffect, useState } from "react";
import provider from "./Provider";

const Login = () => {
  const [loginAccount, setLoginAccount] = useState();
  const [needMetamask, setNeedMetamask] = useState(false);

  useEffect(() => {
    setLoginAccount(sessionStorage.getItem("login"));
  }, [loginAccount]);

  const handleClickMetamask = async () => {
    const { ethereum } = window;
    if (!ethereum) {
      setNeedMetamask(true);
    }
    try {
      const account = await provider.send("eth_requestAccounts", []);
      sessionStorage.setItem("login", account[0]);
      setLoginAccount(account[0]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="">
      <div className="flex h-screen justify-center bg-white p-4 dark:bg-black">
        <div className="flex flex-col self-center ">
          {!needMetamask ? (
            <button
              className="xl h-12 border-2 border-red-600 px-[15px] py-2 text-xl hover:bg-red-600 hover:text-white dark:text-white"
              onClick={handleClickMetamask}
            >
              Connect Metamask
            </button>
          ) : null}
          {needMetamask ? (
            <>
              <img className="w-20 self-center" src="/images/logo_met.png" />
              <h1 className="text-xl text-red-600">
                для входа необходим <span className="text-black dark:text-white">Metamask</span>
              </h1>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Login;

import { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Login from "./Login";
import Main from "./Main";
import provider from "../provider";

const App = () => {
  const [loginAccount, setLoginAccount] = useState();
  const [needMetamask, setNeedMetamask] = useState(false);
  const [exit, setExit] = useState(false);

  useEffect(() => {
    setLoginAccount(sessionStorage.getItem("login"));
    setExit(false);
  }, [exit]);

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

  const handleExitClick = () => {
    sessionStorage.removeItem("login");
    setExit(true);
  };

  return (
    <div className="">
      {!loginAccount ? (
        <Login onClick={handleClickMetamask} needMetamask={needMetamask} />
      ) : (
        <>
          <Header onClick={handleExitClick} account={loginAccount} />
          <Main />
        </>
      )}
    </div>
  );
};

export default App;

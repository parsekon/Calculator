import { useEffect, useState } from "react";
import provider from "../contracts/provider";
import Header from "./Header";
import Login from "./Login";
import Main from "./Main";

const App = () => {
  const [loginAccount, setLoginAccount] = useState();
  const [needMetamask, setNeedMetamask] = useState(false);
  const [exit, setExit] = useState(false);

  useEffect(() => {
    setLoginAccount(sessionStorage.getItem("login"));
    setExit(false);
  }, [exit]);

  // provider.on("network", (newNetwork, oldNetwork) => {
  //   // When a Provider makes its initial connection, it emits a "network"
  //   // event with a null oldNetwork along with the newNetwork. So, if the
  //   // oldNetwork exists, it represents a changing network
  //   if (oldNetwork) {
  //     window.location.reload();
  //   }
  // });

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

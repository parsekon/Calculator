import { useEffect, useState } from "react";
import Header from "./Header";
import Login from "./Login";

const App = () => {
  const [loginAccount, setLoginAccount] = useState();

  useEffect(() => {
    setLoginAccount(sessionStorage.getItem("login"));
  }, [loginAccount]);

  return <div className="dark">
    {!loginAccount ? <Login /> : <Header />}</div>;
};

export default App;

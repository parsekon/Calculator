import { ThemeToggle } from "./ThemeToggle";

const Login = (props) => {
  return (
    <div className="">
      <div className="flex h-screen justify-center bg-white p-4 dark:bg-black">
        <div className="flex flex-col self-center ">
          {!props.needMetamask ? (
            <button
              className="xl h-12 border-2 border-red-600 px-[15px] py-2 text-xl hover:bg-red-600 hover:text-white dark:text-white"
              onClick={props.onClick}
            >
              Connect Metamask
            </button>
          ) : null}
          {props.needMetamask ? (
            <>
              <img className="w-20 self-center" alt="logo Metamask" src="/images/logo_met.png" />
              <h1 className="text-xl text-red-600">
                для входа необходим{" "}
                <span className="text-black dark:text-white">Metamask</span>
              </h1>
            </>
          ) : null}
        </div>
      </div>
      <ThemeToggle />
    </div>
  );
};

export default Login;

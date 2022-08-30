import Blocknot from "./Blocknot/Blocknot";
import Calc from "./Calculator/Calc";

const Main = () => {
  return (
    <div className="flex h-screen justify-between p-24 dark:bg-black">
      <Blocknot />
      <div>
        <Calc />
      </div>
    </div>
  );
};

export default Main;

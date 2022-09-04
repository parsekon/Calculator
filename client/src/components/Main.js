import Blocknot from "./Blocknot/Blocknot";
import Calc from "./Calculator/Calc";
import Timer from "./Timer/Timer";

const Main = () => {
  return (
    <div className="flex h-screen justify-between p-24 dark:bg-black">
      <Blocknot />
      <div>
        <Timer />
        <Calc />
      </div>
    </div>
  );
};

export default Main;

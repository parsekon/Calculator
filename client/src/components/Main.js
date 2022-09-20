import Blocknot from "./Blocknot/Blocknot";
import Button from "./Calculator/Button";
import ButtonBox from "./Calculator/ButtonBox";
import Calc from "./Calculator/Calc";
import Screen from "./Calculator/Screen";

const btnValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "x"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];

const Main = () => {
  return (
    <div className="flex h-screen justify-between p-24 dark:bg-black">
      <Blocknot />
      <div>
        <Calc>
          <Screen />
          <ButtonBox>
            {btnValues.flat().map((btn, index) => (
              <Button
                value={btn}
                key={index}
              />
            ))}
          </ButtonBox>
        </Calc>
      </div>
    </div>
  );
};

export default Main;

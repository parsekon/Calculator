import { useState } from "react";
import CalcProvider from "../context/CalcContext";
import Blocknot from "./Blocknot/Blocknot";
import Button from "./Calculator/Button";
import ButtonBox from "./Calculator/ButtonBox";
import Calc from "./Calculator/Calc";
import Screen from "./Calculator/Screen";
import Drawing from "./Drawing/Drawing";
import Menu from "./Menu";
import Rules from "./Rules/Rules";

const btnValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "x"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];

const Main = () => {
  const [page, setPage] = useState(false);
  const [isOpen, setOpen] = useState(false);

  const handleChangePage = () => {
    setPage(!page);
    console.log("page >>", page);
  };

  const modalOpenClick = () => {
    setOpen(!isOpen);
  };

  const handleStopClick = (event) => {
    event.stopPropagation();
  };

  return (
    <div className="flex h-screen `${!page ? justify-center : justify-between}` bg-blue-50 p-24 dark:bg-black">
      <Menu handleChangePage={handleChangePage} modalOpen={modalOpenClick} />
      {!page ? (
        <>
          <Blocknot />
          <CalcProvider>
            <Calc>
              <Screen />
              <ButtonBox>
                {btnValues.flat().map((btn, index) => (
                  <Button value={btn} key={index} />
                ))}
              </ButtonBox>
            </Calc>
          </CalcProvider>
        </>
      ) : (
        <Drawing />
      )}
      <Rules
        isOpen={isOpen}
        onClose={modalOpenClick}
        stopClick={handleStopClick}
      />
    </div>
  );
};

export default Main;

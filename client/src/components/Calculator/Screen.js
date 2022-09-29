import { useContext } from "react";
import { CalcContext } from "../../context/CalcContext";

const Screen = () => {
    const { calc } = useContext(CalcContext);

    return(
        <div className=""><input className="h-32 text-gray-700 dark:bg-black dark:text-white w-full p-4 bg-gray-100 font-bold text-4xl focus:outline-none text-end" disabled maxLength="11" value={calc.num ? calc.num : calc.res} /></div>
    );
}

export default Screen;
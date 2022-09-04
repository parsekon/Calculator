import { useRef, useState } from "react";

const Calc = () => {

    // numberClick - кнопки с цифрами 1-0 и . ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."]
    // signClick - кнопки с знаками + - / *  ["+", "-", "*", "/"]
    // equal - равно
    // clear - кнопка С очистка

    // inputRef - строка ввода

    // formula - стейт, в который собирается длинная строка number + sign
    // result - значение после нажатия равно

    const [a, setA] = useState("");
    const [b, setB] = useState("");
    const [result, setResult] = useState();
    const [action, setAction] = useState(false);




    const numberClick = (num) => {
            let x = a;
            setA(x += num.toString());



    }

    const signClick = (si) => {
        
    }

    const equal = () => {
        return;
    }

    const clear = () => {
        setA("");
    }

  return (
    <div>
      <div className="flex flex-wrap justify-end h-[109px] w-[534px] bg-white">
        <span className="text-[18px] px-6 py-2.5"></span>
        <span className="text-right w-[534px] text-5xl text-bold outline-none pr-6 pl-6 pb-3">{a === "" ? <p className="text-gray-400">0</p> : a}</span>
      </div>
      <div>
        <div className="mt-[8px] ">
            <button className="w-[75px] h-[48px] bg-white opacity-90 hover:opacity-70">
                <span>
                    x
                    <span>y</span>
                </span>
            </button>
            <button className="w-[75px] h-[48px] bg-white opacity-90 hover:opacity-70">
                <span>
                    x!
                </span>
            </button>
            <button className="w-[75px] h-[48px] bg-white opacity-90 hover:opacity-70">
                <span>
                    ±
                </span>
            </button>
            <button onClick={clear} className="w-[75px] h-[48px] bg-white opacity-100 hover:opacity-90">
                <span>
                    C
                </span>
            </button>
            <button className="w-[75px] h-[48px] bg-white opacity-100 hover:opacity-90">
                <span>
                    ( )
                </span>
            </button>
            <button className="w-[75px] h-[48px] bg-white opacity-100 hover:opacity-90">
                <span>
                    %
                </span>
            </button>
            <button onClick={() => signClick("/")} className="w-[84px] h-[48px] bg-white opacity-100 hover:opacity-90 bg-yellow">
                <span>
                    ÷
                </span>
            </button>
        </div>
        <div className="">
            <button className="w-[75px] h-[48px] bg-white opacity-90 hover:opacity-70">
                <span>
                    wei
                </span>
            </button>
            <button className="w-[75px] h-[48px] bg-white opacity-90 hover:opacity-70">
                <span>
                    sin
                </span>
            </button>
            <button className="w-[75px] h-[48px] bg-white opacity-90 hover:opacity-70">
                <span>
                    1/x
                </span>
            </button>
            <button onClick={() => numberClick("7")} className="w-[75px] h-[48px] bg-white opacity-100 hover:opacity-90">
                <span>
                    7
                </span>
            </button>
            <button onClick={() => numberClick("8")} className="w-[75px] h-[48px] bg-white opacity-100 hover:opacity-90">
                <span>
                    8
                </span>
            </button>
            <button onClick={() => numberClick("9")} className="w-[75px] h-[48px] bg-white opacity-100 hover:opacity-90">
                <span>
                    9
                </span>
            </button>
            <button onClick={() => signClick("*")} className="w-[84px] h-[48px] bg-white opacity-100 hover:opacity-90 bg-yellow">
                <span>
                    ×
                </span>
            </button>
        </div>
        <div className="">
            <button className="w-[75px] h-[48px] bg-white opacity-90 hover:opacity-70">
                <span>
                    gwei
                </span>
            </button>
            <button className="w-[75px] h-[48px] bg-white opacity-90 hover:opacity-70">
                <span>
                    cos
                </span>
            </button>
            <button className="w-[75px] h-[48px] bg-white opacity-90 hover:opacity-70">
                <span>
                     √
                </span>
            </button>
            <button onClick={() => numberClick(4)} className="w-[75px] h-[48px] bg-white opacity-100 hover:opacity-90">
                <span>
                    4
                </span>
            </button>
            <button onClick={() => numberClick(5)} className="w-[75px] h-[48px] bg-white opacity-100 hover:opacity-90">
                <span>
                    5
                </span>
            </button>
            <button onClick={() => numberClick(6)} className="w-[75px] h-[48px] bg-white opacity-100 hover:opacity-90">
                <span>
                    6
                </span>
            </button>
            <button onClick={() => signClick("-")} className="w-[84px] h-[48px] bg-white opacity-100 hover:opacity-90 bg-yellow">
                <span>
                    -
                </span>
            </button>
        </div>
        <div className="">
            <button className="w-[75px] h-[48px] bg-white opacity-90 hover:opacity-70">
                <span>
                    ether
                </span>
            </button>
            <button className="w-[75px] h-[48px] bg-white opacity-90 hover:opacity-70">
                <span>
                    tan
                </span>
            </button>
            <button className="w-[75px] h-[48px] bg-white opacity-90 hover:opacity-70">
                <span>
                    ln
                </span>
            </button>
            <button onClick={() => numberClick(1)} className="w-[75px] h-[48px] bg-white opacity-100 hover:opacity-90">
                <span>
                    1
                </span>
            </button>
            <button onClick={() => numberClick(2)} className="w-[75px] h-[48px] bg-white opacity-100 hover:opacity-90">
                <span>
                   2
                </span>
            </button>
            <button onClick={() => numberClick(3)} className="w-[75px] h-[48px] bg-white opacity-100 hover:opacity-90">
                <span>
                    3
                </span>
            </button>
            <button onClick={() => signClick("+")} className="w-[84px] h-[48px] bg-white opacity-100 hover:opacity-90 bg-yellow">
                <span>
                    +
                </span>
            </button>
        </div>
        <div className="">
            <button className="w-[75px] h-[48px] bg-white opacity-90 hover:opacity-70">
                <span>
                    lg
                </span>
            </button>
            <button className="w-[75px] h-[48px] bg-white opacity-90 hover:opacity-70">
                <span>
                     π
                </span>
            </button>
            <button className="w-[75px] h-[48px] bg-white opacity-90 hover:opacity-70">
                <span>
                    e
                </span>
            </button>
            <button onClick={() => numberClick(0)} className="w-[150px] h-[48px] bg-white opacity-100 hover:opacity-90">
                <span>
                    0
                </span>
            </button>
            <button onClick={() => numberClick(".")} className="w-[75px] h-[48px] bg-white opacity-100 hover:opacity-90">
                <span>
                    ,
                </span>
            </button>
            <button onClick={equal} className="w-[84px] h-[48px] bg-white opacity-100 hover:opacity-90 bg-yellow">
                <span>
                    =
                </span>
            </button>
        </div>
      </div>
    </div>
  );
};

export default Calc;

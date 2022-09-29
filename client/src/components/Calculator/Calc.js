const Calc = ({ children }) => {
    return(
        <div className="bg-gray-100 dark:bg-black w-1/3 p-8 border border-red-200 dark:border-gray-700 rounded-2xl calc">{children}</div>
    )
}

export default Calc;



// import { useRef, useState } from "react";

// const Calc = () => {
//     const inputRef = useRef();
//     const [formula, setFormula] = useState("");
//     const [result, setResult] = useState("");
//     const [deal, setDeal] = useState(false);

//     const handleNumClick = (num) => {
//         console.log("current", inputRef.current.value)
//         // if((!inputRef.current.value) && (num === 0)) {
//         //     inputRef.current.value = inputRef.current.value + ".";
//         // } 
//         if(deal) {
//             inputRef.current.value = num;
//             setFormula(formula + num);
//         }
//         inputRef.current.value += num;
//         setFormula(inputRef.current.value);
//     }

//     const handleSignClick = (val) => {
//         setFormula(formula + val);
//         setDeal(true);
//     }

//     const handleClearClick = () => {
//         inputRef.current.value = "";
//         setFormula("");
//         setResult("");
//         setDeal(false);
        
//     }

//     const equal = () => {
//         setResult(eval(formula).toString());
//         inputRef.current.value = "";
//         setFormula("");
//     }

//   return (
//     <div>
//       <div className="flex flex-wrap justify-end h-[109px] w-[534px] bg-white">
//         <span className="text-[18px] px-6 py-2.5">{formula}</span>
//         <input ref={inputRef} maxLength="10" className="text-right w-[534px] text-5xl text-bold outline-none pr-6 pl-6 pb-3" placeholder="0" />
//       </div>
//       <div>
//         <div className="mt-[8px] ">
//             <button className="w-[75px] h-[48px] bg-white opacity-90 hover:opacity-70">
//                 <span>
//                     x
//                     <span>y</span>
//                 </span>
//             </button>
//             <button className="w-[75px] h-[48px] bg-white opacity-90 hover:opacity-70">
//                 <span>
//                     x!
//                 </span>
//             </button>
//             <button className="w-[75px] h-[48px] bg-white opacity-90 hover:opacity-70">
//                 <span>
//                     ±
//                 </span>
//             </button>
//             <button onClick={handleClearClick} className="w-[75px] h-[48px] bg-white opacity-100 hover:opacity-90">
//                 <span>
//                     C
//                 </span>
//             </button>
//             <button className="w-[75px] h-[48px] bg-white opacity-100 hover:opacity-90">
//                 <span>
//                     ( )
//                 </span>
//             </button>
//             <button className="w-[75px] h-[48px] bg-white opacity-100 hover:opacity-90">
//                 <span>
//                     %
//                 </span>
//             </button>
//             <button onClick={() => handleSignClick("/")} className="w-[84px] h-[48px] bg-white opacity-100 hover:opacity-90 bg-yellow">
//                 <span>
//                     ÷
//                 </span>
//             </button>
//         </div>
//         <div className="">
//             <button className="w-[75px] h-[48px] bg-white opacity-90 hover:opacity-70">
//                 <span>
//                     wei
//                 </span>
//             </button>
//             <button className="w-[75px] h-[48px] bg-white opacity-90 hover:opacity-70">
//                 <span>
//                     sin
//                 </span>
//             </button>
//             <button className="w-[75px] h-[48px] bg-white opacity-90 hover:opacity-70">
//                 <span>
//                     1/x
//                 </span>
//             </button>
//             <button onClick={() => handleNumClick(7)} className="w-[75px] h-[48px] bg-white opacity-100 hover:opacity-90">
//                 <span>
//                     7
//                 </span>
//             </button>
//             <button onClick={() => handleNumClick(8)} className="w-[75px] h-[48px] bg-white opacity-100 hover:opacity-90">
//                 <span>
//                     8
//                 </span>
//             </button>
//             <button onClick={() => handleNumClick(9)} className="w-[75px] h-[48px] bg-white opacity-100 hover:opacity-90">
//                 <span>
//                     9
//                 </span>
//             </button>
//             <button onClick={() => handleSignClick("*")} className="w-[84px] h-[48px] bg-white opacity-100 hover:opacity-90 bg-yellow">
//                 <span>
//                     ×
//                 </span>
//             </button>
//         </div>
//         <div className="">
//             <button className="w-[75px] h-[48px] bg-white opacity-90 hover:opacity-70">
//                 <span>
//                     gwei
//                 </span>
//             </button>
//             <button className="w-[75px] h-[48px] bg-white opacity-90 hover:opacity-70">
//                 <span>
//                     cos
//                 </span>
//             </button>
//             <button className="w-[75px] h-[48px] bg-white opacity-90 hover:opacity-70">
//                 <span>
//                      √
//                 </span>
//             </button>
//             <button onClick={() => handleNumClick(4)} className="w-[75px] h-[48px] bg-white opacity-100 hover:opacity-90">
//                 <span>
//                     4
//                 </span>
//             </button>
//             <button onClick={() => handleNumClick(5)} className="w-[75px] h-[48px] bg-white opacity-100 hover:opacity-90">
//                 <span>
//                     5
//                 </span>
//             </button>
//             <button onClick={() => handleNumClick(6)} className="w-[75px] h-[48px] bg-white opacity-100 hover:opacity-90">
//                 <span>
//                     6
//                 </span>
//             </button>
//             <button onClick={() => handleSignClick("-")} className="w-[84px] h-[48px] bg-white opacity-100 hover:opacity-90 bg-yellow">
//                 <span>
//                     -
//                 </span>
//             </button>
//         </div>
//         <div className="">
//             <button className="w-[75px] h-[48px] bg-white opacity-90 hover:opacity-70">
//                 <span>
//                     ether
//                 </span>
//             </button>
//             <button className="w-[75px] h-[48px] bg-white opacity-90 hover:opacity-70">
//                 <span>
//                     tan
//                 </span>
//             </button>
//             <button className="w-[75px] h-[48px] bg-white opacity-90 hover:opacity-70">
//                 <span>
//                     ln
//                 </span>
//             </button>
//             <button onClick={() => handleNumClick(1)} className="w-[75px] h-[48px] bg-white opacity-100 hover:opacity-90">
//                 <span>
//                     1
//                 </span>
//             </button>
//             <button onClick={() => handleNumClick(2)} className="w-[75px] h-[48px] bg-white opacity-100 hover:opacity-90">
//                 <span>
//                    2
//                 </span>
//             </button>
//             <button onClick={() => handleNumClick(3)} className="w-[75px] h-[48px] bg-white opacity-100 hover:opacity-90">
//                 <span>
//                     3
//                 </span>
//             </button>
//             <button onClick={() => handleSignClick("+")} className="w-[84px] h-[48px] bg-white opacity-100 hover:opacity-90 bg-yellow">
//                 <span>
//                     +
//                 </span>
//             </button>
//         </div>
//         <div className="">
//             <button className="w-[75px] h-[48px] bg-white opacity-90 hover:opacity-70">
//                 <span>
//                     lg
//                 </span>
//             </button>
//             <button className="w-[75px] h-[48px] bg-white opacity-90 hover:opacity-70">
//                 <span>
//                      π
//                 </span>
//             </button>
//             <button className="w-[75px] h-[48px] bg-white opacity-90 hover:opacity-70">
//                 <span>
//                     e
//                 </span>
//             </button>
//             <button onClick={() => handleNumClick(0)} className="w-[150px] h-[48px] bg-white opacity-100 hover:opacity-90">
//                 <span>
//                     0
//                 </span>
//             </button>
//             <button onClick={() => handleNumClick(".")} className="w-[75px] h-[48px] bg-white opacity-100 hover:opacity-90">
//                 <span>
//                     ,
//                 </span>
//             </button>
//             <button onClick={equal} className="w-[84px] h-[48px] bg-white opacity-100 hover:opacity-90 bg-yellow">
//                 <span>
//                     =
//                 </span>
//             </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Calc;

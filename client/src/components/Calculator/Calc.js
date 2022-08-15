const Calc = () => {
  return (
    <div>
      <div className="flex flex-wrap justify-end h-[109px] w-[534px] bg-white">
        <span className="text-[18px] px-6 py-2.5">12/456=789</span>
        <input className="text-right w-[534px] text-5xl text-bold outline-none pr-6 pl-6 pb-3" placeholder="0" />
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
            <button className="w-[75px] h-[48px] bg-white opacity-100 hover:opacity-90">
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
            <button className="w-[84px] h-[48px] bg-white opacity-100 hover:opacity-90 bg-yellow">
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
            <button className="w-[75px] h-[48px] bg-white opacity-100 hover:opacity-90">
                <span>
                    7
                </span>
            </button>
            <button className="w-[75px] h-[48px] bg-white opacity-100 hover:opacity-90">
                <span>
                    8
                </span>
            </button>
            <button className="w-[75px] h-[48px] bg-white opacity-100 hover:opacity-90">
                <span>
                    9
                </span>
            </button>
            <button className="w-[84px] h-[48px] bg-white opacity-100 hover:opacity-90 bg-yellow">
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
            <button className="w-[75px] h-[48px] bg-white opacity-100 hover:opacity-90">
                <span>
                    4
                </span>
            </button>
            <button className="w-[75px] h-[48px] bg-white opacity-100 hover:opacity-90">
                <span>
                    5
                </span>
            </button>
            <button className="w-[75px] h-[48px] bg-white opacity-100 hover:opacity-90">
                <span>
                    6
                </span>
            </button>
            <button className="w-[84px] h-[48px] bg-white opacity-100 hover:opacity-90 bg-yellow">
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
            <button className="w-[75px] h-[48px] bg-white opacity-100 hover:opacity-90">
                <span>
                    1
                </span>
            </button>
            <button className="w-[75px] h-[48px] bg-white opacity-100 hover:opacity-90">
                <span>
                   2
                </span>
            </button>
            <button className="w-[75px] h-[48px] bg-white opacity-100 hover:opacity-90">
                <span>
                    3
                </span>
            </button>
            <button className="w-[84px] h-[48px] bg-white opacity-100 hover:opacity-90 bg-yellow">
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
            <button className="w-[150px] h-[48px] bg-white opacity-100 hover:opacity-90">
                <span>
                    0
                </span>
            </button>
            <button className="w-[75px] h-[48px] bg-white opacity-100 hover:opacity-90">
                <span>
                    ,
                </span>
            </button>
            <button className="w-[84px] h-[48px] bg-white opacity-100 hover:opacity-90 bg-yellow">
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

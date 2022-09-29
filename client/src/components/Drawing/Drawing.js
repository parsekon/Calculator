import Canvas from "./Canvas";
import "../../css/index.css";

function Drawing() {
  return (
    <div className="flex items-center justify-center ml-[-100px]">
      <img
        className="h-4 self-center"
        alt="logo Metamask"
        src="/images/draw.png"
      />
      <Canvas width={1024} height={500} />
    </div>
  );
}

export default Drawing;

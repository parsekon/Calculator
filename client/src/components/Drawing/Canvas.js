import { useEffect, useState } from 'react';
import {useOnDraw} from './Hooks';

const Canvas = ({
    width,
    height
}) => {
    const [clear, setClear] = useState(false);

    useEffect(() => {

    }, [clear]);

    const {
        setCanvasRef,
        onCanvasMouseDown
    } = useOnDraw(onDraw);

    function onDraw(ctx, point, prevPoint) {
        drawLine(prevPoint, point, ctx, 'orange', 5);
    }

    function drawLine(
        start,
        end,
        ctx,
        color,
        width
    ) {
        start = start ?? end;
        ctx.beginPath();
        ctx.lineWidth = width;
        ctx.strokeStyle = color;
        ctx.moveTo(start.x, start.y);
        ctx.lineTo(end.x, end.y);
        ctx.stroke();

        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(start.x, start.y, 2, 0, 2 * Math.PI);
        ctx.fill();

    }

    const handleClickClear = () => {
        setClear(!clear)
    }

    return(
        <>
        <canvas
            width={width}
            height={height}
            onMouseDown={onCanvasMouseDown}
            className="border border-black dark:border-red-600"
            ref={setCanvasRef}
        />
        <button className='dark:text' onClick={handleClickClear}>clear</button>
        </>
    );

}

export default Canvas;
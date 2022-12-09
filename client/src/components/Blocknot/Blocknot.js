import { useEffect, useRef, useState } from "react";
import blocknot from "../../contracts/blocknot";
import blocknotWithSigner from "../../contracts/blocknotWithSigner";

export default function Blocknot() {
  const [lastIndex, setLastIndex] = useState();
  const [arrayTasks, setArrayTasks] = useState([]);
  const [list, setList] = useState();
  const [loaderButton, setLoaderButton] = useState(false);
  const [loaderLiTask, setLoaderLiTask] = useState(false);
  const [numberTasks, setNumberTasks] = useState(0);
  const taskRef = useRef();

  useEffect(() => {
    const account = sessionStorage.getItem("login");
    setArrayTasks([]);
    // setLoaderTasks(true);
    try {
      (async () => {
        const indexHex = await blocknot.lastIndex(account);
        const indexToDec = Number(indexHex, 10);
        setLastIndex(indexToDec);

        for (let i = 0; i <= lastIndex; i++) {
          const taskWithComplete = {
            id: i,
            task: await blocknot.taskListOnAddress(account, i),
            complete: await blocknot.taskComplete(account, i),
          };
          if (!taskWithComplete.complete) {
            arrayTasks.push(taskWithComplete);
          }
        }

        setList(
          arrayTasks.map((taskOne, index) => {
            return (
              <li
                className={`my-3 flex list-inside justify-between uppercase text-black dark:text-orange-100 ${
                  loaderLiTask ? "animate-pulse" : null
                }`}
                key={index}
              >
                {taskOne.task}
                <button onClick={() => handleCompleteTaskClick(taskOne.id)}>
                  &#128465;
                </button>
              </li>
            );
          })
        );
        setNumberTasks(arrayTasks.length);
      })();
    } catch (error) {
      console.error(error);
    }
  }, [lastIndex, loaderLiTask, loaderButton]);

  const handleCompleteTaskClick = async (id) => {
    setLoaderLiTask(true);
    try {
      const tx = await blocknotWithSigner().taskChangeComplete(id);
      const response = await tx.wait();
      console.log("response >", response);
    } catch (error) {
      console.error(error);
    } finally {
      setLoaderLiTask(false);
    }
  };

  const handleTaskAddClick = async (event) => {
    event.preventDefault();
    try {
      setLoaderButton(true);
      const tx = await blocknotWithSigner().addTask(taskRef.current.value);
      taskRef.current.value = "";
      const response = await tx.wait();
      console.log("response", response);
    } catch (error) {
      console.error(error);
    } finally {
      setLoaderButton(false);
    }
  };

  return (
    <>
      <div className="grid w-1/3 mr-24 content-between bg-gray-100 dark:bg-black border border-red-200 dark:border-gray-700 p-8 rounded-2xl calc">
        <div className="h-full overflow-y-auto">
        <div className="absolute w-1/4">
          <div className="flex justify-between bg-gray-100 dark:bg-black">
            <h1 className="mb-8 text-xl text-black underline dark:text-red-600">
              список дел:
            </h1>
            <span className="dark:text-gray-400 text-xl">{numberTasks}</span>
          </div>
          </div>
          <div className="pt-12 pr-4">
          {numberTasks === 0 ? (
            <p className="pt-20 text-center dark:text-gray-600">
              добавьте первую задачу
            </p>
          ) : (
            <ul>{list}</ul>
          )}
          </div>
        </div>
        <div>
          <form className="items-end" onSubmit={handleTaskAddClick}>
            <label htmlFor="task" className="ml-4 text-xl">

            </label>
            <br />
            <textarea
              ref={taskRef}
              name="task"
              type="text"
              placeholder="Опишите задачу"
              className="mb-2 dark:text-white focus:outline-none w-full ring-1 ring-slate-900/10 shadow-sm dark:bg-gray-800 dark:ring-0 dark:highlight-white/5 resize-none rounded rounded-md border-2 border-gray-600 p-2 outline-none focus:border-blue-600"
              // className="resize-none text-sm p-2 w-80 ring-1 ring-slate-900/10 shadow-sm rounded-md dark:bg-slate-800 dark:ring-0 dark:highlight-white/5"
            />
            <button
              className={`w-full rounded border border-red-600 py-1 px-6 text-black hover:border-blue-300 dark:text-white ${
                loaderButton ? "animate-pulse" : null
              }`}
              type="submit"
            >
              Добавить задачу
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

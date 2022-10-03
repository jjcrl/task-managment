import { useState } from "react";

const TaskCard = ({ item, index, updateItem, removeItem }) => {
  const [toggleL, setToggleL] = useState(false);
  const [toggleR, setToggleR] = useState(false);

  const handleRHover = () => {
    setToggleR(true);
  };

  const handleRHoverLeave = () => {
    setToggleR(false);
  };

  const handleLHover = () => {
    setToggleL(true);
  };

  const handleLHoverLeave = () => {
    setToggleL(false);
  };

  const hoverItem = (
    <div className="flex flex-row w-fit h-fit">
      <div
        className={
          toggleR
            ? "w-1/2 h-full top-0 right-0 rounded-2xl opacity-100 absolute z-10"
            : "w-1/2 h-full top-0 right-0 rounded-2xl opacity-0 absolute z-10"
        }
        onMouseEnter={handleRHover}
        onMouseLeave={handleRHoverLeave}
      >
        <button
          className="bg-rose-500 h-full w-full rounded-r-2xl text-rose-700 grid items-center text-xl font-black"
          onClick={() => removeItem(item.id)}
        >
          delete
        </button>
      </div>
      <div
        onMouseEnter={handleLHover}
        onMouseLeave={handleLHoverLeave}
        className={
          toggleL
            ? "w-1/2 h-full absolute inset-0 bg-none opacity-100 z-10 pl-9"
            : "w-1/2 h-full absolute inset-0  bg-none opacity-0 z-10"
        }
      >
        <button
          className="bg-lime-600 w-full h-full rounded-l-2xl text-lime-700 grid items-center text-xl font-black"
          onClick={() => updateItem(item.id)}
        >
          done
        </button>
      </div>
    </div>
  );

  return (
    <div
      className={
        item.priority
          ? "w-full h-full relative text-rose-800  rounded-2xl mb-2 flex gap-1"
          : "w-full h-full relative text-yellow-900 rounded-2xl mb-2 flex gap-1"
      }
      key={item.priority ? `priority-list-item-${index}` : `list-item-${index}`}
    >
      {hoverItem}
      <span
        className="h-7 w-8 bg-yellow-300 opacity-80 border-2 border-yellow-200 my-auto shadow-md mt-0"
        id="rounded"
      ></span>
      <li className="w-full h-full text-left text-lg py-2 px-3 m-0 font-semibold first-letter:uppercase rounded-2xl bg-yellow-300 border-2 border-yellow-200 shadow-md">
        {item.input} <br />
      </li>
    </div>
  );
};

export default TaskCard;

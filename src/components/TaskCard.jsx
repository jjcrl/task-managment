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
          ? "w-full h-fit relative text-rose-800  rounded-2xl"
          : "w-full h-fit relative text-yellow-900 rounded-2xl"
      }
      key={item.priority ? `priority-list-item-${index}` : `list-item-${index}`}
    >
      {hoverItem}
      <li className="w-full h-full text-left text-lg font-semibold first-letter:uppercase rounded-2xl bg-yellow-300 border-2 border-yellow-200 shadow-md px-5 py-2 leading-none tracking-wide">
        {item.input}
        <span className="pl-2 italic font-light text-sm tracking-tight leading-none">
          11/12 @ 9:03
        </span>
      </li>
    </div>
  );
};

export default TaskCard;

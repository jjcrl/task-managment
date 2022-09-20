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
    <div className="flex flex-row opacity-95 bg-none">
      <div
        className={
          toggleR
            ? "w-fit h-full absolute top-0 right-0 grid items-center bg-none opacity-1"
            : "w-fit h-full absolute top-0 right-0 grid items-center bg-none opacity-0"
        }
        onMouseEnter={handleRHover}
        onMouseLeave={handleRHoverLeave}
      >
        <button
          className="m-0 p-0 grid items-center bg-red-500 mr-2"
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
            ? "w-fit h-full absolute inset-0 grid items-center bg-none opacity-1"
            : "w-fit h-full absolute inset-0  grid items-center bg-none opacity-0"
        }
      >
        <button
          className="m-auto p-0 grid items-center bg-green-500 ml-2"
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
        item.important
          ? "w-fit h-auto bg-pink-50 relative m-2"
          : "w-fit h-auto bg-neutral-50 relative m-2"
      }
      key={`item-${index}`}
    >
      {hoverItem}

      <li className="w-full h-full text-left tracking-wider leading-none text-xl text-black py-2 px-1 font-semibold first-letter:uppercase ">
        {item.input}
      </li>
    </div>
  );
};

export default TaskCard;

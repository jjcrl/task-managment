import { useState } from "react";

const TaskCard = ({ item, index, updateItem, removeItem, show, setShow }) => {
  const [toggle, setToggle] = useState(false);

  const handleHover = () => {
    setShow(true);
    setToggle(!toggle);
  };

  const handleHoverLeave = () => {
    setShow(false);
    setToggle(false);
  };

  const hoverItem = (
    <div className="flex flex-row opacity-95">
      <div
        className="w-1/2 h-full absolute top-0 right-0 bg-red-500 rounded-r-lg"
        onClick={() => removeItem(index)}
      >
        delete
      </div>
      <div
        className="w-1/2 h-full absolute top-0 left-0 bg-green-500  rounded-l-lg"
        onClick={() => updateItem(index)}
      >
        done
      </div>
    </div>
  );

  return (
    <div
      className={
        item.important
          ? "w-full h-min mb-4 bg-green-50 break-inside-avoid relative rounded-lg border-red-500 border-2"
          : "w-full h-min mb-4 bg-green-50 break-inside-avoid relative rounded-lg"
      }
      onMouseEnter={handleHover}
      onMouseLeave={handleHoverLeave}
    >
      {toggle && show ? hoverItem : null}

      <div className="w-full bg-green-100 rounded-t-lg">
        <p>data</p>
      </div>
      <li className="w-full text-left px-4 pt-1 tracking-tight leading-tight">
        {item.input}
      </li>
      <div className="flex flex-row gap-2 justify-end p-2">
        <div className="bg-green-400 w-1/2 h-full"></div>
      </div>
    </div>
  );
};

export default TaskCard;

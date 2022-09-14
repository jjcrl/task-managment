import { useState } from "react";

const TaskCard = ({ item, index, updateItem, removeItem, show, setShow }) => {
  const [toggle, setToggle] = useState(false);

  const handleHover = () => {
    setShow(true);
    setToggle(!toggle);
  };

  const handleHoverLeave = () => {
    setToggle(false);
  };

  const hoverItem = (
    <div className="flex flex-row opacity-95">
      <div
        className="w-1/2 h-full absolute top-0 left-0 bg-red-500"
        onClick={() => removeItem(index)}
      >
        delete
      </div>
      <div
        className="w-1/2 h-full absolute top-0 right-0 bg-green-500"
        onClick={() => updateItem(index)}
      >
        done
      </div>
    </div>
  );

  return (
    <div
      className="w-full h-min mb-2 bg-green-50 break-inside-avoid relative"
      onMouseEnter={handleHover}
      onMouseLeave={handleHoverLeave}
    >
      {toggle && show ? hoverItem : null}

      <div className="w-full bg-green-100 ">
        <p>data</p>
      </div>
      <li className="w-full text-left px-2">{item}</li>
      <div className="flex flex-row gap-2 justify-end p-2">
        <div className="bg-green-400 w-1/2 h-full"></div>
      </div>
    </div>
  );
};

export default TaskCard;

import { Draggable } from "react-beautiful-dnd";
import TaskCard from "./TaskCard";
import { useState } from "react";

const CurrItems = ({ currItems, setCurrItems, setPrevItems }) => {
  const [show, setShow] = useState(true);

  const updateItem = (index) => {
    setPrevItems((prevItems) => [...prevItems, currItems[index]]);
    setCurrItems(currItems.filter((item) => item !== currItems[index]));
    setShow(!show);
  };

  const removeItem = (index) => {
    setCurrItems(currItems.filter((item) => item !== currItems[index]));
    setShow(!show);
  };

  return (
    <ul className="w-full h-full p-8 bg-blue-100 columns-3">
      {currItems.map((item, index) => (
        <TaskCard
          item={item}
          index={index}
          removeItem={removeItem}
          updateItem={updateItem}
          show={show}
          setShow={setShow}
        />
      ))}
    </ul>
  );
};

export default CurrItems;

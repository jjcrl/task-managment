import TaskCard from "./TaskCard";

const CurrItems = ({ currItems, setCurrItems, setPrevItems }) => {
  const updateItem = (index) => {
    setPrevItems((prevItems) => [...prevItems, currItems[index]]);
    setCurrItems(currItems.filter((item) => item !== currItems[index]));
  };

  const removeItem = (index) => {
    setCurrItems(currItems.filter((item) => item !== currItems[index]));
  };

  return (
    <ul className="w-full h-full p-10 bg-neutral-900 columns-4">
      {currItems.map((item, index) => (
        <TaskCard
          item={item}
          index={index}
          removeItem={removeItem}
          updateItem={updateItem}
        />
      ))}
    </ul>
  );
};

export default CurrItems;

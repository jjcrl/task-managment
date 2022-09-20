import TaskCard from "./TaskCard";
const CurrItems = ({ currItems, setCurrItems, setPrevItems }) => {
  const updateItem = (id) => {
    const [item] = currItems.filter((item) => item.id === id);
    setPrevItems((prevItems) => [...prevItems, item]);
    setCurrItems(currItems.filter((item) => item.id !== id));
  };

  const removeItem = (id) => {
    setCurrItems(currItems.filter((item) => item.id !== id));
  };
  return (
    <ul className="w-full h-full">
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

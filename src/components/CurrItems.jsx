import TaskCard from "./TaskCard";

const CurrItems = ({
  currItems,
  setCurrItems,
  setPrevItems,
  classTest,
  day,
}) => {
  const updateItem = (id) => {
    const [item] = currItems.filter((item) => item.id === id);
    setPrevItems((prevItems) => [item, ...prevItems]);
    setCurrItems(currItems.filter((item) => item.id !== id));
  };

  const removeItem = (id) => {
    setCurrItems(currItems.filter((item) => item.id !== id));
  };

  return (
    <div className={classTest}>
      <ul className="w-fit h-full bg-neutral-800 mx-2">
        {currItems.map((item, index) =>
          !item.priority && item.dateChoice === day ? (
            <TaskCard
              item={item}
              index={index}
              removeItem={removeItem}
              updateItem={updateItem}
            />
          ) : null
        )}
      </ul>
      <ul className="w-fit h-full w-full h-full bg-neutral-800 mx-2">
        {currItems.map((item, index) =>
          item.priority && item.dateChoice === day ? (
            <TaskCard
              item={item}
              index={index}
              removeItem={removeItem}
              updateItem={updateItem}
            />
          ) : null
        )}
      </ul>
    </div>
  );
};

export default CurrItems;

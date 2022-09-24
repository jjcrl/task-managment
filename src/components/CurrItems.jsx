import TaskCard from "./TaskCard";

const CurrItems = ({
  currItems,
  setCurrItems,
  setPrevItems,
  classTest,
  day,
  mini,
}) => {
  const updateItem = (id) => {
    const [item] = currItems.filter((item) => item.id === id);
    setPrevItems((prevItems) => [item, ...prevItems]);
    setCurrItems(currItems.filter((item) => item.id !== id));
  };

  const removeItem = (id) => {
    setCurrItems(currItems.filter((item) => item.id !== id));
  };

  const total = currItems.filter((item) => item.dateChoice === day).length;

  const priototal = currItems.filter(
    (item) => item.dateChoice === day && item.priority
  ).length;

  if (mini) {
    return (
      <div className="h-full">
        <ul className="bg-none w-48 h-fit m-auto p-2 text-yellow-50 bg-neutral-800 p-3 text-left mt-10 text-xs leading-normal">
          <li>•{total} items</li>
          <li>•{priototal} prio</li>
        </ul>
      </div>
    );
  } else {
    return (
      <div className={classTest}>
        <ul className="w-fit h-full bg-neutral-900 mx-2">
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

        <ul className="w-fit h-full w-full h-full bg-neutral-900 mx-2">
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
  }
};

export default CurrItems;

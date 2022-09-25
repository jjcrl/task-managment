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
      <div className={classTest}>
        <ul className="w-5/6 m-auto h-min rounded-2xl h-full text-stone-800 bg-yellow-200 text-xs flex flex-col mt-4 pb-4">
          <div className="w-full h-fit relative flex pl-3 pt-4">
            <span
              className="h-10 w-10 bg-yellow-300  border-2 border-yellow-200"
              id="rounded"
            ></span>
            <li className="tracking-widest bg-yellow-300 h-fit w-fit rounded-3xl p-4 ml-3">
              {total} !tems
            </li>
          </div>
          <div className="w-full h-fit relative flex pl-3 pt-4">
            <span
              className="h-10 w-10 bg-yellow-300  border-2 border-yellow-200"
              id="rounded"
            ></span>
            <li className="tracking-widest bg-yellow-300 h-fit w-fit rounded-3xl p-4 ml-3">
              {priototal} pr!o
            </li>
          </div>
        </ul>
      </div>
    );
  } else {
    return (
      <div className={classTest}>
        <ul className="w-full h-full bg-yellow-200 rounded-3xl flex flex-col m-auto px-4 gap-1 pb-2 pt-5">
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

        <ul className="flex flex-col bg-yellow-200 h-full pt-5 px-4 m-auto rounded-2xl gap-1 pb-2 w-full">
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

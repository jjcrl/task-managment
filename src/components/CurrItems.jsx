import { useState } from "react";
import TaskCard from "./TaskCard";

const CurrItems = ({
  currItems,
  setCurrItems,
  setPrevItems,
  classTest,
  day,
  mini,
  setDateChoice,
  dateChoice,
  limit,
  taskDateOptions,
}) => {
  const [expanded, setExpanded] = useState(false);
  const [toggleItems, setToggleItems] = useState(false);
  const [display, setDisplay] = useState("show");

  const updateItem = (id) => {
    const [item] = currItems.filter((item) => item.id === id);
    item.completed = true;
    const storageItemIndex = currItems.indexOf(item);
    const storageItemKey = localStorage.key(storageItemIndex);
    localStorage.setItem(storageItemKey, JSON.stringify(item));
    setPrevItems((prevItems) => [item, ...prevItems]);
    setCurrItems(currItems.filter((item) => item.id !== id));
  };

  const removeItem = (id) => {
    const [item] = currItems.filter((item) => item.id === id);
    const storageItemIndex = currItems.indexOf(item);
    const storageItemKey = localStorage.key(storageItemIndex);
    setCurrItems(currItems.filter((item) => item.id !== id));
    localStorage.removeItem(storageItemKey);
  };

  const handleExpand = (e) => {
    setExpanded(!expanded);
  };
  const handleExtendList = () => {
    setToggleItems(!toggleItems);
    display === "show" ? setDisplay("hide") : setDisplay("show");
  };

  const total = currItems.filter((item) => item.dateChoice === day).length;

  const priototal = currItems.filter(
    (item) => item.dateChoice === day && item.priority
  ).length;

  const condensedItems = currItems
    .filter((item) => !item.priority && item.dateChoice === day)
    .slice(0, limit);

  const allItems = currItems.filter(
    (item) => item.dateChoice === day && !item.priority
  );

  if (mini && !expanded) {
    return (
      <div className={classTest}>
        <ul className="w-5/6 m-auto h-min rounded-xl h-full text-zinc-800 bg-zinc-50 flex flex-col mt-4 pb-4 border-2 border-zinc-100 shadow-sm">
          <div className="w-full h-fit relative flex pl-3 pt-4 ">
            <span
              className="h-10 w-10 bg-white border-2 border-zinc-100 shadow-sm grid items-center font-semibold text-zinc-800"
              id="rounded"
            >
              {total}
            </span>
            <li className="tracking-widest bg-zinc-100 h-10 w-fit px-5 rounded-3xl ml-3 border-2 border-zinc-200 shadow-sm text-lg font-semibold grid items-center">
              Items
            </li>
          </div>
          <div className="w-full h-fit relative flex pl-3 pt-4">
            <span
              className="h-10 w-10 bg-white border-2 border-zinc-100 shadow-sm grid items-center font-semibold text-zinc-800"
              id="rounded"
            >
              {priototal}
            </span>
            <li className="tracking-widest bg-zinc-100 h-10 w-fit px-5 rounded-3xl ml-3 border-2 border-zinc-200 shadow-sm text-lg font-semibold grid items-center">
              Priority
            </li>
          </div>
          <button
            onClick={(e) => handleExpand(e)}
            className="tracking-widest bg-slate-100 h-10 w-fit px-8 mt-3 rounded-2xl border-2 border-indigo-100 shadow-sm text-lg font-semibold grid items-center m-auto text-slate-800"
          >
            Show More
          </button>
        </ul>
      </div>
    );
  } else if (mini && expanded) {
    return (
      <div
        className="h-full w-auto bg-white absolute right-0 top-0 z-10 left-1/4"
        onClick={() => {
          setDateChoice("day-1");
        }}
      >
        <h2
          className={
            dateChoice === day
              ? "text-slate-800 w-ful text-left ml-5 p-2 underline"
              : "text-slate-700 w-full text-left ml-5 p-2"
          }
          onClick={() => {
            setDateChoice(day);
          }}
        >
          {taskDateOptions[day]}
        </h2>
        <div
          className="bg-indigo-50 w-fit px-7 py-1 rounded-3xl border-2 border-indigo-200 absolute right-10 top-10 shadow-md text-zinc-800"
          onClick={(e) => handleExpand(e)}
        >
          <button className="px-3 py-2 text-xl font-bold">← Show Less</button>
        </div>

        <div className="w-full m-auto h-full flex flex-row gap-8 p-10 relative px-20">
          <ul
            className="w-full h-3/4 bg-zinc-50 rounded-3xl flex flex-col m-auto px-4 gap-3 py-5 shadow-sm mt-0 border-2 border-slate-50"
            onClick={(e) => handleExpand(e)}
          >
            <h3 className="text-left pl-3 text-zinc-900">Today's Items</h3>

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
          <ul
            className="w-full h-3/4 bg-zinc-50 rounded-3xl flex flex-col m-auto px-4 gap-3 py-5 shadow-sm mt-0 border-2 border-slate-50"
            onClick={(e) => handleExpand(e)}
          >
            <h3 className="text-left pl-3 text-zinc-900">Priority Items</h3>

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
          </ul>{" "}
        </div>
      </div>
    );
  } else {
    return (
      <div className={classTest}>
        <ul
          className={
            dateChoice === day
              ? "w-full h-3/4 bg-zinc-50 rounded-3xl flex flex-col m-auto px-4 gap-3 py-5 shadow-sm mt-0 border-2 border-slate-50"
              : "w-full h-3/4 bg-zinc-50 rounded-3xl flex flex-col m-auto px-4 gap-3 py-5 shadow-sm mt-0 border-2 border-slate-50"
          }
        >
          {!limit ? (
            <h3 className="text-left pl-3 text-zinc-900">Today's Items</h3>
          ) : null}
          {toggleItems === false
            ? condensedItems.map((item, index) => (
                <TaskCard
                  item={item}
                  index={index}
                  removeItem={removeItem}
                  updateItem={updateItem}
                />
              ))
            : allItems.map((item, index) => (
                <TaskCard
                  item={item}
                  index={index}
                  removeItem={removeItem}
                  updateItem={updateItem}
                />
              ))}

          {currItems.filter((item) => item.dateChoice === day && !item.priority)
            .length > 3 && limit ? (
            <button
              className="bg-slate-100 w-full rounded-2xl text-xl my-1 py-1 px-20 border-2 border-indigo-100 shadow-sm text-slate-800 font-semibold"
              onClick={(e) => handleExtendList(e)}
              key="extend-list-button"
            >
              {display} +{" "}
              {currItems.filter(
                (item) => item.dateChoice === day && !item.priority
              ).length - 3}
            </button>
          ) : null}
        </ul>

        <ul className="flex flex-col bg-zinc-50 h-3/4 px-4 m-auto rounded-2xl gap-3 py-5 w-full mt-0 shadow-sm border border-slate-50">
          {!limit ? (
            <h3 className="text-left pl-3 text-zinc-900">Priority Items</h3>
          ) : null}
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

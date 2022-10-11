import { useState } from "react";
import TaskCard from "./TaskCard";

const CurrItems = ({
  currItems,
  setCurrItems,
  setPrevItems,
  classTest,
  day,
  mini,
  date,
  setDateChoice,
  dateChoice,
  limit,
}) => {
  const [expanded, setExpanded] = useState(false);
  const [toggleItems, setToggleItems] = useState(false);
  const [display, setDisplay] = useState("show");

  const updateItem = (id) => {
    const [item] = currItems.filter((item) => item.id === id);
    setPrevItems((prevItems) => [item, ...prevItems]);
    setCurrItems(currItems.filter((item) => item.id !== id));
  };

  const removeItem = (id) => {
    setCurrItems(currItems.filter((item) => item.id !== id));
  };

  const handleExpand = (e) => {
    if (e.detail === 2) {
      setExpanded(!expanded);
    }
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
      <div className={classTest} onClick={(e) => handleExpand(e)}>
        <ul className="w-5/6 m-auto h-min rounded-xl h-full text-zinc-800 bg-zinc-50 flex flex-col mt-4 pb-4 border-2 border-zinc-100 shadow-sm">
          <div className="w-full h-fit relative flex pl-3 pt-4 ">
            <span
              className="h-10 w-10 bg-zinc-50 border-2 border-zinc-100 shadow-sm grid items-center font-semibold text-zinc-800"
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
              className="h-10 w-10 bg-zinc-50 border-2 border-zinc-100 shadow-sm grid items-center font-semibold text-zinc-800"
              id="rounded"
            >
              {priototal}
            </span>
            <li className="tracking-widest bg-zinc-100 h-10 w-fit px-5 rounded-3xl ml-3 border-2 border-zinc-200 shadow-sm text-lg font-semibold grid items-center">
              Prioritty
            </li>
          </div>
          <button
            onClick={(e) => handleExpand(e)}
            className="tracking-widest bg-white h-10 w-fit px-8 mt-3 rounded-3xl border-2 border-zinc-200 shadow-sm text-lg font-semibold grid items-center m-auto"
          >
            Show More
          </button>
        </ul>
      </div>
    );
  } else if (mini && expanded) {
    return (
      <div
        className={
          dateChoice === day
            ? "h-full w-auto bg-white absolute right-0 top-0 z-10 left-1/4"
            : "h-full w-auto bg-white absolute right-0 top-0 z-10 left-1/4"
        }
        onClick={() => {
          setDateChoice("day");
        }}
      >
        {/* <div className="rounded-2xl w-fit bg-stone-400 text-stone-50 flex flex-col ml-10 p-5 text-left px-7 shadow-md absolute top-5 right-5 border-2 border-stone-200">
          <h3>
            Total items{" "}
            {currItems.filter((item) => item.dateChoice === "day-1").length}
          </h3>
          <h3>
            Priority items{" "}
            {
              currItems.filter(
                (item) => item.dateChoice === "day-1" && item.priority
              ).length
            }
          </h3>
        </div> */}
        <h2 className=" text-slate-700 w-fit p-5">{date}</h2>
        <div className="w-full m-auto h-fit flex flex-row gap-8 p-10 relative px-20">
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
            <li
              className="bg-white w-full rounded-xl text-xl my-1 py-1 px-20 border-2 border-zinc-100 shadow-sm text-zinc-800 font-semibold"
              onClick={(e) => handleExtendList(e)}
            >
              {display} +{" "}
              {currItems.filter(
                (item) => item.dateChoice === day && !item.priority
              ).length - 3}
            </li>
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

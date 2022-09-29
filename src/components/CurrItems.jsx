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
  const condensedItems = currItems
    .filter((item) => !item.priority && item.dateChoice === day)
    .slice(0, limit);

  const allItems = currItems.filter(
    (item) => item.dateChoice === day && !item.priority
  );

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

  if (mini && !expanded) {
    return (
      <div className={classTest} onClick={(e) => handleExpand(e)}>
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
  } else if (mini && expanded) {
    return (
      <div
        className={
          dateChoice === day
            ? "h-full w-auto bg-stone-300 absolute right-0 top-0 z-10 left-1/4"
            : "h-full w-auto bg-stone-100 absolute right-0 top-0 z-10 left-1/4"
        }
        onClick={() => {
          setDateChoice("day");
        }}
      >
        <h2 className=" text-stone-700 w-fit p-5">{date}</h2>
        <div className="w-full m-auto h-fit flex flex-row gap-8  p-10 relative px-20">
          <ul
            className="w-full h-full bg-yellow-200 rounded-3xl flex flex-col m-auto px-4 gap-1 pb-2 pt-5 shadow-xl mt-0"
            onClick={(e) => handleExpand(e)}
          >
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
            className="flex flex-col bg-yellow-200 h-full pt-5 px-4 m-auto rounded-2xl gap-1 pb-2 w-full mt-0 shadow-xl"
            onClick={(e) => handleExpand(e)}
          >
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
        <ul className="w-full h-fit bg-yellow-200 rounded-3xl flex flex-col m-auto px-4 gap-1 pb-2 pt-5 shadow-xl">
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
            .length > 4 && limit ? (
            <li
              className="bg-yellow-100 w-fit rounded-3xl text-xl my-1 py-1 px-20 border-2 border-yellow-200 shadow-sm text-yellow-900 font-semibold"
              onClick={(e) => handleExtendList(e)}
            >
              {display} +
              {currItems.filter(
                (item) => item.dateChoice === day && !item.priority
              ).length - 4}{" "}
            </li>
          ) : null}
        </ul>

        <ul className="flex flex-col bg-yellow-200 h-fit pt-5 px-4 m-auto rounded-2xl gap-1 pb-2 w-full mt-0 shadow-xl">
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

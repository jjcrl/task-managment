import "./App.css";
import React, { useRef, useState } from "react";

import Input from "./components/input";
import CurrItems from "./components/CurrItems";
import PrevItems from "./components/PrevItems";

function App() {
  const [currItems, setCurrItems] = useState([]);
  const [prevItems, setPrevItems] = useState([]);

  const date = new Date().toDateString().toUpperCase().slice(0, 10);

  const percent = `${Math.floor(
    (prevItems.length / (currItems.length + prevItems.length)) * 100
  )}%`;

  //DRAG N DROP CODE
  // const dragItem = useRef();
  // const dragOverItem = useRef();
  // const dragStart = (event, position) => {
  //   dragItem.current = position;
  // };
  // const dragEnter = (event, position) => {
  //   dragOverItem.current = position;
  // };
  // const handleDrop = (event) => {
  //   const copyListItems = [...items];
  //   const dragItemContent = copyListItems[dragItem.current];
  //   copyListItems.splice(dragItem.current, 1);
  //   copyListItems.splice(dragOverItem.current, 0, dragItemContent);
  //   dragItem.current = null;
  //   dragOverItem.current = null;
  //   setItems(copyListItems);
  // };

  //HOVER CODE
  // const handleHover = (event, index) => {
  //   setIsShown(true);
  // };
  // const handleLeave = (event, index) => {
  //   setIsShown(false);
  // };

  // const handleClick = (event, index) => {
  //   const value = items[index];
  //   setItems(items.filter((item) => item !== value));
  // };

  return (
    <div className="App">
      <main className="bg-gray-100 overflow-hidden">
        <section className="w-1/4 bg-gray-300">
          <Input currItems={currItems} setCurrItems={setCurrItems} />
          <PrevItems prevItems={prevItems} />
        </section>
        <section className="w-3/4 bg-gray-700 h-full">
          <div className="h-10 bg-black">options</div>
          <div className="flex  gap-5 w-fit  p-0 bg-none absolute right-3 ">
            <h1>{date}</h1>
            <h1>{percent}</h1>
          </div>

          <CurrItems
            currItems={currItems}
            setCurrItems={setCurrItems}
            setPrevItems={setPrevItems}
          />
        </section>
      </main>
    </div>
  );
}

{
  /* <main className="flex flex-row w-screen h-screen p-5">
        <div className="flex flex-col w-1/2">
          <section className="w-full bg-blue-100 h-fit">
            <form onSubmit={handleSubmit}>
              <input
                onChange={(e) => setNewItem(e.target.value)}
                value={newItem}
                name="todo"
                className="w-full h-20 border-2 border-black text-4xl m-auto p-5"
                placeholder="what do you have to do?"
              />
              <div className="flex flex-ro">
                <button onClick={addItem} type="submit"></button>
              </div>
            </form>
          </section>
          <p className="bg-red-300 text-4xl p-5 ">
            {Math.floor(
              (completedItems.length / (items.length + completedItems.length)) *
                100
            )}
            %
          </p>

          <section className="w-full h-full text-3xl bg-neutral-50">
            <ul className="columns-2 gap-4  pt-5">
              {completedItems.map((item) => (
                <li className="text-left w-full h-full bg-green-200 p-3 text-green-700 mb-3 line-through">
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </div>
        <section className="w-1/2 h-full text-3xl">
          <ul className="bg-neutral-50 h-full columns-2 p-5 gap-3">
            {items.map((item, index) => (
              <div className="flex flex-col bg-neutral-100 w-full mb-3 break-inside-avoid	">
                <li
                  value={index}
                  key={index}
                  className={"text-left w-full h-full px-2 pt-1"}
                  draggable
                  onDragStart={(event) => dragStart(event, index)}
                  onDragEnter={(event) => dragEnter(event, index)}
                  onDragEnd={(event) => handleDrop(event, index)}
                  onMouseEnter={(event) => handleHover(event, index)}
                  onMouseLeave={(event) => handleLeave(event, index)}
                >
                  {item}
                </li>
                <div className="flex flex-row self-end text-2xl gap-2 px-2 pb-2">
                  <button
                    onClick={(event) => handleClick(event, index)}
                    className="bg-red-500 w-5 h-5"
                  ></button>{" "}
                  <button
                    className="bg-green-500 w-5 h-5"
                    onClick={(event) => handleDone(event, index)}
                  ></button>
                </div>
              </div>
            ))}
          </ul>
        </section>
      </main> */
}

export default App;

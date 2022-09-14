import "./App.css";
import React, { useState } from "react";
import Input from "./components/input";
import CurrItems from "./components/CurrItems";
import PrevItems from "./components/PrevItems";

function App() {
  const [currItems, setCurrItems] = useState([
    { input: "drag drop abilities", important: false },
    { input: "date and time info on items", important: false },
    { input: "buttons for sorting views", important: false },
    { input: "prompt and item data", important: false },
    { input: "item tagging tracking and sorting", important: false },
    { input: "storage for users info ", important: false },
    { input: "email over to do this in calander form ?", important: false },
    { input: "get some emojis up in this place ", important: false },
    { input: "able to press enter to add to do item", important: false },
    { input: "make an item important", important: false },
  ]);

  const [prevItems, setPrevItems] = useState([]);

  const date = new Date().toDateString().toUpperCase().slice(0, 10);
  const percent = `${Math.floor(
    (prevItems.length / (currItems.length + prevItems.length)) * 100
  )}%`;

  return (
    <div className="App">
      <main className="bg-gray-100 overflow-hidden">
        <section className="w-1/3 bg-gray-300 flex flex-col">
          <Input currItems={currItems} setCurrItems={setCurrItems} />
          <div className="flex flex-row w-full justify-end text-2xl">
            {date} {percent}
          </div>

          <PrevItems prevItems={prevItems} />
        </section>

        <section className="w-3/4 bg-gray-700 h-full">
          <div className="h-min bg-gray-400">
            <nav className="flex flex-row justify-between px-20 py-3">
              <button>today</button>
              <button>3-day</button>
              <button>5-day</button>
              <button>week</button>
              <button>month</button>
            </nav>
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

export default App;

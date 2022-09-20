import "./App.css";
import React, { useState } from "react";
import Input from "./components/input";
import CurrItems from "./components/CurrItems";
import PrevItems from "./components/PrevItems";
import TodayView from "./components/TodayView";
import ThreeDayView from "./ThreeDayView";

function App() {
  const [currItems, setCurrItems] = useState([]);
  //_↗
  const [prevItems, setPrevItems] = useState([]);
  const [view, setView] = useState("today");
  const [dateChoice, setDateChoice] = useState();

  const date = new Date().toDateString().toUpperCase().slice(0, 10);
  const percent = Math.floor(
    (prevItems.length / (currItems.length + prevItems.length)) * 100
  );

  return (
    <div className="App">
      <main className="bg-gray-100 overflow-hidden">
        <section className="w-1/3 bg-yellow-500 flex flex-col">
          <Input
            currItems={currItems}
            setCurrItems={setCurrItems}
            dateChoice={dateChoice}
            view={view}
          />
          <div className="flex flex-row w-full justify-end text-4xl bg-neutral-900 text-neutral-300 font-bold tracking-widest pt-2">
            {date} {percent ? `${percent}%` : "0%"}
          </div>

          <PrevItems prevItems={prevItems} />
        </section>

        <section className="w-3/4 bg-gray-700 h-full">
          <div className="h-min bg-neutral-900 text-white text-xl font-semibold">
            <nav className="flex flex-row justify-between px-20 py-3">
              <button>today</button>
              <button>3-day</button>
              <button>5-day</button>
              <button>week</button>
              <button>month</button>
            </nav>
          </div>

          {/* <TodayView
            currItems={currItems}
            setCurrItems={setCurrItems}
            setPrevItems={setPrevItems}
          /> */}
          <ThreeDayView
            currItems={currItems}
            setCurrItems={setCurrItems}
            setPrevItems={setPrevItems}
            setDateChoice={setDateChoice}
            dateChoice={dateChoice}
          />
        </section>
      </main>
    </div>
  );
}

export default App;

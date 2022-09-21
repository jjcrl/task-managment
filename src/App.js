import "./App.css";
import React, { useState } from "react";
import Input from "./components/input";
import PrevItems from "./components/PrevItems";
import TodayView from "./components/TodayView";
import ThreeDayView from "./components/ThreeDayView";
import WeekView from "./components/WeekView";

function App() {
  const [currItems, setCurrItems] = useState([
    {
      input: "Work on the previs items section.",
      priority: true,

      emoji: "💯",
      dateChoice: "day-1",
      id: 0,
    },

    {
      input: "Fix the emoji list",
      priority: true,

      emoji: "🐝",
      dateChoice: "day-1",
      id: 1,
    },

    {
      input: "Dispaly today in a better way with 2 lists",
      priority: true,

      emoji: "🏆",
      dateChoice: "day-1",
      id: 2,
    },

    {
      input: "Add lists and views for 3 day ",
      priority: false,

      emoji: "🎉",
      dateChoice: "day-1",
      id: 3,
    },
    {
      input: "Drag and drop abilites",
      priority: false,

      emoji: "💯",
      dateChoice: "day-1",
      id: 4,
    },

    {
      input: "Local storage for user",
      priority: false,

      emoji: "⚡",
      dateChoice: "day-1",
      id: 5,
    },
    {
      input: "Email over to do lists",
      priority: false,

      emoji: "🌟",
      dateChoice: "day-1",
      id: 6,
    },

    {
      input: "Priortity times and dates ",
      priority: false,

      emoji: "🙌",
      dateChoice: "day-1",
      id: 7,
    },

    {
      input: "microinterationcs and animations",
      priority: false,

      emoji: "🎇",
      dateChoice: "day-1",
      id: 8,
    },
  ]);
  //_↗
  const [prevItems, setPrevItems] = useState([]);
  const [view, setView] = useState("today");
  const [dateChoice, setDateChoice] = useState();

  const percent = Math.floor(
    (prevItems.length / (currItems.length + prevItems.length)) * 100
  );

  return (
    <div className="App">
      <main>
        <section className="max-w-1/3 bg-yellow-500 flex flex-col overflow-hidden truncate">
          <Input
            currItems={currItems}
            setCurrItems={setCurrItems}
            dateChoice={dateChoice}
            view={view}
          />
          <div className="flex flex-row w-full justify-end text-5xl bg-neutral-900 text-neutral-300 font-bold tracking-widest p-5 ">
            {percent ? `${percent}%` : "0%"}
          </div>
          <PrevItems prevItems={prevItems} />
        </section>

        <section className="w-3/4 bg-neutral-900 h-full">
          <div className="h-min bg-neutral-900 text-white text-xl font-semibold">
            <nav className="flex flex-row justify-between px-20 py-3">
              <button
                onClick={() => {
                  setView("today");
                }}
              >
                today
              </button>
              <button
                onClick={() => {
                  setView("three-day");
                }}
              >
                3-day
              </button>
              <button
                onClick={() => {
                  setView("week");
                }}
              >
                this week
              </button>
              <button>this month</button>
            </nav>
          </div>

          {view === "today" ? (
            <TodayView
              currItems={currItems}
              setCurrItems={setCurrItems}
              setPrevItems={setPrevItems}
            />
          ) : view === "three-day" ? (
            <ThreeDayView
              currItems={currItems}
              setCurrItems={setCurrItems}
              setPrevItems={setPrevItems}
              setDateChoice={setDateChoice}
              dateChoice={dateChoice}
            />
          ) : (
            <WeekView
              currItems={currItems}
              setCurrItems={setCurrItems}
              setPrevItems={setPrevItems}
              setDateChoice={setDateChoice}
              dateChoice={dateChoice}
            />
          )}
        </section>
      </main>
    </div>
  );
}

export default App;

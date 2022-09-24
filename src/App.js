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
  const [prevItems, setPrevItems] = useState([
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
  ]);
  const [view, setView] = useState("today");
  const [dateChoice, setDateChoice] = useState();

  const percent = Math.floor(
    (prevItems.length / (currItems.length + prevItems.length)) * 100
  );

  const today = new Date();

  return (
    <div className="App">
      <main>
        <section className="w-1/3 h-screen flex flex-col bg-yellow-100">
          <Input
            currItems={currItems}
            setCurrItems={setCurrItems}
            dateChoice={dateChoice}
            view={view}
          />

          <div className="h-min w-full text-yellow-400 text-xl">
            <nav className="flex flex-col w-min mr-auto pl-5 mt-2 h-min">
              <button
                onClick={() => {
                  setView("today");
                }}
              >
                one
              </button>
              <button
                onClick={() => {
                  setView("three-day");
                }}
              >
                thr33
              </button>
              <button
                onClick={() => {
                  setView("week");
                }}
              >
                se7en
              </button>
            </nav>
          </div>

          <div className="flex flex-row w-full justify-end text-6xl bg-yellow-100 text-yellow-400 font-black tracking-widest px-6 pb-4 italic opacity-70">
            {percent ? `${percent}%` : "0%"}
          </div>

          <PrevItems prevItems={prevItems} />
        </section>

        <section className="w-3/4 h-screen ">
          {view === "today" ? (
            <TodayView
              currItems={currItems}
              setCurrItems={setCurrItems}
              setPrevItems={setPrevItems}
              today={today}
            />
          ) : view === "three-day" ? (
            <ThreeDayView
              currItems={currItems}
              setCurrItems={setCurrItems}
              setPrevItems={setPrevItems}
              setDateChoice={setDateChoice}
              dateChoice={dateChoice}
              today={today}
            />
          ) : (
            <WeekView
              currItems={currItems}
              setCurrItems={setCurrItems}
              setPrevItems={setPrevItems}
              setDateChoice={setDateChoice}
              dateChoice={dateChoice}
              today={today}
            />
          )}
        </section>
      </main>
    </div>
  );
}

export default App;

import "./App.css";
import React, { useState } from "react";
import Input from "./components/Input";
import PrevItems from "./components/PrevItems";
import TodayView from "./components/TodayView";
import ThreeDayView from "./components/ThreeDayView";
import WeekView from "./components/WeekView";
import Navigation from "./components/Navigation";

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
    {
      input: "go to the shops for a vape",
      priority: false,
      emoji: "⚡",
      dateChoice: "day-2",
      id: 9,
    },
    {
      input: "quit vaping",
      priority: true,
      emoji: "✅",
      dateChoice: "day-2",
      id: 10,
    },
    {
      input: "visit grandma",
      priority: true,
      emoji: "❗️",
      dateChoice: "day-2",
      id: 11,
    },
    {
      input: "go for a walk ",
      priority: false,
      emoji: "🏆",
      dateChoice: "day-2",
      id: 12,
    },
    {
      input: "stretch out",
      priority: false,
      emoji: "🌱",
      dateChoice: "day-2",
      id: 13,
    },
    {
      input: "post on linked in ",
      priority: false,
      emoji: "🌱",
      dateChoice: "day-2",
      id: 14,
    },
    {
      input: "apply for jobs",
      priority: false,
      emoji: "✨",
      dateChoice: "day-3",
      id: 15,
    },
    {
      input: "post on linked in ",
      priority: false,
      emoji: "🎆",
      dateChoice: "day-3",
      id: 16,
    },
    {
      input: "do some code art",
      priority: false,
      emoji: "❗️",
      dateChoice: "day-3",
      id: 17,
    },
    {
      input: "change cv and apply for mroe jobs ",
      priority: false,
      emoji: "🏁",
      dateChoice: "day-3",
      id: 18,
    },
    {
      input: "go for a walk ",
      priority: true,
      emoji: "🚂",
      dateChoice: "day-3",
      id: 19,
    },
    {
      input: "stretch",
      priority: true,
      emoji: "⭐️",
      dateChoice: "day-3",
      id: 20,
    },
    {
      input: "visit grandma",
      priority: true,
      emoji: "🐝",
      dateChoice: "day-3",
      id: 21,
    },
    {
      input: "this is a test for a fourth day item ",
      priority: false,
      emoji: "🙌",
      dateChoice: "day-4",
      id: 22,
    },
    {
      input: "this is a test for a fourth day item",
      priority: true,
      emoji: "🌟",
      dateChoice: "day-4",
      id: 23,
    },
    {
      input: "prio testing on week view",
      priority: true,
      emoji: "❗️",
      dateChoice: "day-5",
      id: 24,
    },
    {
      input: "\ntesting for week view ",
      priority: false,
      emoji: "💯",
      dateChoice: "day-6",
      id: 25,
    },
    {
      input: "testing for week view",
      priority: false,
      emoji: "🔧",
      dateChoice: "day-6",
      id: 26,
    },
    {
      input: "week view testing",
      priority: false,
      emoji: "🥳",
      dateChoice: "day-7",
      id: 27,
    },
    {
      input: "week view testing",
      priority: true,
      emoji: "💡",
      dateChoice: "day-7",
      id: 28,
    },
    {
      input: "week view testing",
      priority: true,
      emoji: "🌟",
      dateChoice: "day-7",
      id: 29,
    },
  ]);
  //_↗
  const [prevItems, setPrevItems] = useState([]);
  const [view, setView] = useState("today");
  const [dateChoice, setDateChoice] = useState();

  const percent = Math.floor(
    (prevItems.filter((item) => item.dateChoice === "day-1").length /
      (currItems.filter((item) => item.dateChoice === "day-1").length +
        prevItems.filter((item) => item.dateChoice === "day-1").length)) *
      100
  );

  const today = new Date();

  return (
    <div className="App">
      <main>
        <Navigation setView={setView} />
        <section className="w-1/4 h-screen flex flex-col bg-zinc-100">
          <Input
            currItems={currItems}
            setCurrItems={setCurrItems}
            dateChoice={dateChoice}
            view={view}
          />
          <div className="w-min h-min text-6xl text-zinc-700 ml-auto p-5">
            <h2>{percent ? `${percent}%` : "0%"}</h2>
          </div>
          <PrevItems prevItems={prevItems} />
        </section>

        <section className="w-3/4 h-screen">
          {view === "today" ? (
            <TodayView
              currItems={currItems}
              setCurrItems={setCurrItems}
              setPrevItems={setPrevItems}
              today={today}
              dateChoice={dateChoice}
              setDateChoice={setDateChoice}
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

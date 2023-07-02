import "./App.css";
import React, { useEffect, useState } from "react";
import Input from "./components/Input";
import PrevItems from "./components/PrevItems";
import TodayView from "./components/TodayView";
import ThreeDayView from "./components/ThreeDayView";
import WeekView from "./components/WeekView";
import Navigation from "./components/Navigation";
import { formatDate } from "./components/formatDate";
import Clock from "./components/Clock";

function App() {
  const [currItems, setCurrItems] = useState([]);
  const [prevItems, setPrevItems] = useState([]);
  const [view, setView] = useState("today");
  const [dateChoice, setDateChoice] = useState();

  useEffect(() => {
    if (typeof localStorage !== 'undefined' && currItems.length === 0) {
      const storageItems = Object.values(localStorage)
      .map((item) => {
        try {
          return JSON.parse(item);
        } catch (error) {
          console.error("Failed to parse JSON:", item);
          return null; // Skip the invalid item
        }
      })
      .filter((item) => item !== null)
      .reverse();
      
      const completedItems = storageItems.filter((item) => item.completed);
      const incompletedItems = storageItems.filter((item) => !item.completed);
      setCurrItems(incompletedItems);
      setPrevItems(completedItems);
    }
  },[currItems.length]);

  const percent = Math.floor(
    (prevItems.filter((item) => item.dateChoice === "day-1").length /
      (currItems.filter((item) => item.dateChoice === "day-1").length +
        prevItems.filter((item) => item.dateChoice === "day-1").length)) *
      100
  );

  const today = new Date();
  const day1 = formatDate(today);
  const day2 = formatDate(new Date(today.getTime() + 60 * 60 * 24 * 1000));
  const day3 = formatDate(new Date(today.getTime() + 60 * 60 * 48 * 1000));
  const day4 = formatDate(new Date(today.getTime() + 60 * 60 * 72 * 1000));
  const day5 = formatDate(new Date(today.getTime() + 60 * 60 * 96 * 1000));
  const day6 = formatDate(new Date(today.getTime() + 60 * 60 * 120 * 1000));
  const day7 = formatDate(new Date(today.getTime() + 60 * 60 * 148 * 1000));

  const taskDateOptions = {
    "day-1": day1,
    "day-2": day2,
    "day-3": day3,
    "day-4": day4,
    "day-5": day5,
    "day-6": day6,
    "day-7": day7,
  };

  return (
    <div className="App">
      <main className="w-screen h-screen">
        <Navigation setView={setView} />
        <section className="w-1/4 h-screen flex flex-col bg-zinc-200">
          <Clock/>
          <Input
            currItems={currItems}
            setCurrItems={setCurrItems}
            dateChoice={dateChoice}
            view={view}
            today={today}
            taskDateOptions={taskDateOptions}
          />
          <div className="w-full h-min flex flex row px-3 gap-3 py-5 align-center justify-center">
            <div className="w-full min-w-full h-8 bg-white flex rounded-3xl relaitve">
              <span
                className="h-8 bg-lime-400 mr-auto rounded-l-3xl"
                id="percent-bar"
              ></span>
            </div>
            <span className="text-3xl font-bold text-zinc-700 relative bottom-0.5 pr-2">
              {percent ? `${percent}%` : "0%"}
            </span>
          </div>
          <PrevItems prevItems={prevItems} />
        </section>

        <section className="w-3/4 h-screen">
          {view === "today" ? (
            <TodayView
              currItems={currItems}
              setCurrItems={setCurrItems}
              setPrevItems={setPrevItems}
              day={day1}
              dateChoice={dateChoice}
              setDateChoice={setDateChoice}
              taskDateOptions={taskDateOptions}
              today={day1}
            />
          ) : view === "three-day" ? (
            <ThreeDayView
              currItems={currItems}
              setCurrItems={setCurrItems}
              setPrevItems={setPrevItems}
              setDateChoice={setDateChoice}
              dateChoice={dateChoice}
              days={[day1, day2, day3]}
            />
          ) : (
            <WeekView
              currItems={currItems}
              setCurrItems={setCurrItems}
              setPrevItems={setPrevItems}
              setDateChoice={setDateChoice}
              dateChoice={dateChoice}
              days={[day1, day2, day3, day4, day5, day6, day7]}
              taskDateOptions={taskDateOptions}
            />
          )}
        </section>
      </main>
      <style jsx>{`
        #percent-bar {
          width: ${percent}%;
          border-top-right-radius: ${percent === 100 ? " 1.5rem" : "0"};
          border-bottom-right-radius: ${percent === 100 ? " 1.5rem" : "0"};
        }
      `}</style>
    </div>
  );
}

export default App;

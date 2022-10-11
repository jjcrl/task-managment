import CurrItems from "./CurrItems";
import { formatDate } from "./formatDate";
const ThreeDayView = ({
  currItems,
  setCurrItems,
  setPrevItems,
  setDateChoice,
  dateChoice,
  today,
}) => {
  const daytwo = new Date(today.getTime() + 60 * 60 * 24 * 1000);
  const daythree = new Date(today.getTime() + 60 * 60 * 48 * 1000);

  return (
    <div className="h-full w-full grid grid-rows-1 grid-cols-3 bg-stone-50">
      <div
        className={
          dateChoice === "day-1"
            ? "flex flex-col gap-2 bg-white"
            : "flex flex-col gap-2 bg-white"
        }
        onClick={() => {
          setDateChoice("day-1");
        }}
      >
        <h2 className="text-slate-700">{formatDate(today)}</h2>
        {
          <CurrItems
            currItems={currItems}
            setCurrItems={setCurrItems}
            setPrevItems={setPrevItems}
            classTest="h-fit w-full flex flex-col gap-6 px-6 mx-atuo overflow-scroll pb-10"
            day="day-1"
            limit={3}
          />
        }
      </div>
      <div
        className={
          dateChoice === "day-2"
            ? "flex flex-col gap-2 bg-white"
            : "flex flex-col gap-2 bg-white"
        }
        onClick={() => {
          setDateChoice("day-2");
        }}
      >
        {" "}
        <h2 className="text-slate-700">{formatDate(daytwo)}</h2>
        {
          <CurrItems
            currItems={currItems}
            setCurrItems={setCurrItems}
            setPrevItems={setPrevItems}
            classTest="h-fit w-full flex flex-col gap-6 px-6 mx-auto overflow-scroll pb-10"
            day="day-2"
            limit={3}
          />
        }
      </div>{" "}
      <div
        className={
          dateChoice === "day-3"
            ? "flex flex-col gap-2 bg-white"
            : "flex flex-col gap-2 bg-white"
        }
        onClick={() => {
          setDateChoice("day-3");
        }}
      >
        {" "}
        <h2 className="text-slate-700">{formatDate(daythree)}</h2>{" "}
        {
          <CurrItems
            currItems={currItems}
            setCurrItems={setCurrItems}
            setPrevItems={setPrevItems}
            classTest="h-fit w-full flex flex-col gap-6 px-6 mx-auto overflow-scroll pb-10"
            day="day-3"
            limit={3}
          />
        }
      </div>
    </div>
  );
};

export default ThreeDayView;

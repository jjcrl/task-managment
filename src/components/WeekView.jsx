import CurrItems from "./CurrItems";
import { formatDate } from "./formatDate";
const WeekView = ({
  currItems,
  setCurrItems,
  setPrevItems,
  setDateChoice,
  dateChoice,
  days,
}) => {
  return (
    <div className="h-full w-full grid grid-cols-4 auto-rows-auto bg-whgite">
      <div
        className={
          dateChoice === "day-1"
            ? "h-full w-full bg-white flex flex-col"
            : "h-full w-full bg-white flex flex-col"
        }
        onClick={() => {
          setDateChoice("day-1");
        }}
      >
        <h2 className="text-slate-700">{days[0]}</h2>
        {
          <CurrItems
            currItems={currItems}
            setCurrItems={setCurrItems}
            setPrevItems={setPrevItems}
            classTest="h-fit w-full flex flex-col"
            day={"day-1"}
            mini={true}
            setDateChoice={setDateChoice}
            dateChoice={dateChoice}
          />
        }
      </div>
      <div
        className={
          dateChoice === "day-2"
            ? "h-full w-full bg-white flex flex-col"
            : "h-full w-full bg-white flex flex-col"
        }
        onClick={() => {
          setDateChoice("day-2");
        }}
      >
        <h2 className="text-slate-700">{days[1]}</h2>
        {
          <CurrItems
            currItems={currItems}
            setCurrItems={setCurrItems}
            setPrevItems={setPrevItems}
            classTest="h-fit w-full flex flex-col"
            day={"day-2"}
            mini={true}
            setDateChoice={setDateChoice}
            dateChoice={dateChoice}
          />
        }
      </div>{" "}
      <div
        className={
          dateChoice === "day-3"
            ? "h-full w-full bg-white flex flex-col"
            : "h-full w-full bg-white flex flex-col"
        }
        onClick={() => {
          setDateChoice("day-3");
        }}
      >
        <h2 className="text-slate-700">{days[2]}</h2>
        {
          <CurrItems
            currItems={currItems}
            setCurrItems={setCurrItems}
            setPrevItems={setPrevItems}
            mini={true}
            classTest="h-fit w-full flex flex-col "
            day={"day-3"}
            setDateChoice={setDateChoice}
            dateChoice={dateChoice}
          />
        }
      </div>{" "}
      <div
        className={
          dateChoice === "day-4"
            ? "h-full w-full bg-white flex flex-col"
            : "h-full w-full bg-white flex flex-col"
        }
        onClick={() => {
          setDateChoice("day-4");
        }}
      >
        <h2 className="text-slate-700">{days[3]}</h2>
        {
          <CurrItems
            currItems={currItems}
            setCurrItems={setCurrItems}
            setPrevItems={setPrevItems}
            classTest="h-fit w-full flex flex-col"
            day={"day-4"}
            mini={true}
            setDateChoice={setDateChoice}
            dateChoice={dateChoice}
          />
        }
      </div>{" "}
      <div
        className={
          dateChoice === "day-5"
            ? "h-full w-full bg-white flex flex-col"
            : "h-full w-full bg-white flex flex-col"
        }
        onClick={() => {
          setDateChoice("day-5");
        }}
      >
        <h2 className="text-slate-700">{days[4]}</h2>
        {
          <CurrItems
            currItems={currItems}
            setCurrItems={setCurrItems}
            setPrevItems={setPrevItems}
            classTest="h-fit w-full flex flex-col"
            day={"day-5"}
            mini={true}
            setDateChoice={setDateChoice}
            dateChoice={dateChoice}
          />
        }
      </div>{" "}
      <div
        className={
          dateChoice === "day-6"
            ? "h-full w-full bg-white flex flex-col"
            : "h-full w-full bg-white flex flex-col"
        }
        onClick={() => {
          setDateChoice("day-6");
        }}
      >
        <h2 className="text-slate-700">{days[5]}</h2>

        {
          <CurrItems
            currItems={currItems}
            setCurrItems={setCurrItems}
            setPrevItems={setPrevItems}
            classTest="h-fit w-full flex flex-col"
            day={"day-6"}
            mini={true}
            setDateChoice={setDateChoice}
            dateChoice={dateChoice}
          />
        }
      </div>{" "}
      <div
        className={
          dateChoice === "day-7"
            ? "h-full w-full bg-white flex flex-col"
            : "h-full w-full bg-white flex flex-col"
        }
        onClick={() => {
          setDateChoice("day-7");
        }}
      >
        <h2 className="text-slate-700">{days[6]}</h2>
        {
          <CurrItems
            currItems={currItems}
            setCurrItems={setCurrItems}
            setPrevItems={setPrevItems}
            classTest="h-fit w-full flex flex-col"
            day={"day-7"}
            mini={true}
            setDateChoice={setDateChoice}
            dateChoice={dateChoice}
          />
        }
      </div>
    </div>
  );
};

export default WeekView;

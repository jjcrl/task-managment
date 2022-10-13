import CurrItems from "./CurrItems";
const ThreeDayView = ({
  currItems,
  setCurrItems,
  setPrevItems,
  setDateChoice,
  dateChoice,
  days,
}) => {
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
        <h2
          className={
            dateChoice === "day-1"
              ? "text-slate-800 w-ful text-left ml-5 p-2 underline"
              : "text-slate-700 w-full text-left ml-5 p-2"
          }
        >
          {days[0]}
        </h2>

        {
          <CurrItems
            currItems={currItems}
            setCurrItems={setCurrItems}
            setPrevItems={setPrevItems}
            classTest="h-full w-full flex flex-col gap-8 px-5 overflow-scroll"
            day={"day-1"}
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
        <h2
          className={
            dateChoice === "day-2"
              ? "text-slate-800 w-ful text-left ml-5 p-2 underline"
              : "text-slate-700 w-full text-left ml-5 p-2"
          }
        >
          {days[1]}
        </h2>
        {
          <CurrItems
            currItems={currItems}
            setCurrItems={setCurrItems}
            setPrevItems={setPrevItems}
            classTest="h-full w-full flex flex-col gap-8 px-5 overflow-scroll"
            day={"day-2"}
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
        <h2
          className={
            dateChoice === "day-3"
              ? "text-slate-800 w-ful text-left ml-5 p-2 underline"
              : "text-slate-700 w-full text-left ml-5 p-2"
          }
        >
          {days[2]}
        </h2>{" "}
        {
          <CurrItems
            currItems={currItems}
            setCurrItems={setCurrItems}
            setPrevItems={setPrevItems}
            classTest="h-full w-full flex flex-col gap-8 px-5 overflow-scroll"
            day={"day-3"}
            limit={3}
          />
        }
      </div>
    </div>
  );
};

export default ThreeDayView;

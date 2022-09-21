import CurrItems from "./CurrItems";

const ThreeDayView = ({
  currItems,
  setCurrItems,
  setPrevItems,
  setDateChoice,
  dateChoice,
}) => {
  return (
    <div className="h-full w-full grid grid-rows-1 grid-cols-3">
      <div
        className={
          dateChoice === "day-1"
            ? "flex flex-col bg-neutral-900 m-1 gap-5 text-white"
            : "flex flex-col bg-neutral-900 m-1 gap-5"
        }
        onClick={() => {
          setDateChoice("day-1");
        }}
      >
        <p className="text-2xl pt-5 font-bold">DAY ONE</p>
        {
          <CurrItems
            currItems={currItems.filter((item) => item.dateChoice === "day-1")}
            setCurrItems={setCurrItems}
            setPrevItems={setPrevItems}
            classTest="h-fit w-fit flex flex-col gap-5"
            day="day-1"
          />
        }
      </div>
      <div
        className={
          dateChoice === "day-2"
            ? "flex flex-col bg-neutral-900 m-1 gap-5 text-white"
            : "flex flex-col bg-neutral-900 m-1 gap-5"
        }
        onClick={() => {
          setDateChoice("day-2");
        }}
      >
        {" "}
        <p className="text-2xl pt-5 font-bold">DAY TWO</p>
        {
          <CurrItems
            currItems={currItems.filter((item) => item.dateChoice === "day-2")}
            setCurrItems={setCurrItems}
            setPrevItems={setPrevItems}
            classTest="h-fit w-fit flex flex-col gap-5 p-2"
            day="day-2"
          />
        }
      </div>{" "}
      <div
        className={
          dateChoice === "day-3"
            ? "flex flex-col bg-neutral-900 m-1 gap-5 text-white"
            : "flex flex-col bg-neutral-900 m-1 gap-5"
        }
        onClick={() => {
          setDateChoice("day-3");
        }}
      >
        {" "}
        <p className="text-2xl pt-5 font-bold">DAY THREE</p>{" "}
        {
          <CurrItems
            currItems={currItems.filter((item) => item.dateChoice === "day-3")}
            setCurrItems={setCurrItems}
            setPrevItems={setPrevItems}
            classTest="h-fit w-fit flex flex-col gap-5 p-2"
            day="day-3"
          />
        }
      </div>
    </div>
  );
};

export default ThreeDayView;

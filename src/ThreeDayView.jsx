import CurrItems from "./components/CurrItems";

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
            ? "flex flex-col bg-red-500 m-1 gap-5"
            : "flex flex-col bg-red-100 m-1 gap-5"
        }
        onClick={() => {
          setDateChoice("day-1");
        }}
      >
        <p>DAY ONE</p>
        {
          <CurrItems
            currItems={currItems.filter((item) => item.dateChoice === "day-1")}
            setCurrItems={setCurrItems}
            setPrevItems={setPrevItems}
          />
        }
      </div>
      <div
        className={
          dateChoice === "day-2"
            ? "flex flex-col bg-blue-500 m-1 gap-5"
            : "flex flex-col bg-blue-100 m-1 gap-5"
        }
        onClick={() => {
          setDateChoice("day-2");
        }}
      >
        {" "}
        <p>DAY TWO</p>
        {
          <CurrItems
            currItems={currItems.filter((item) => item.dateChoice === "day-2")}
            setCurrItems={setCurrItems}
            setPrevItems={setPrevItems}
          />
        }
      </div>{" "}
      <div
        className={
          dateChoice === "day-3"
            ? "flex flex-col bg-green-500 m-1 gap-5"
            : "flex flex-col bg-green-100 m-1 gap-5"
        }
        onClick={() => {
          setDateChoice("day-3");
        }}
      >
        {" "}
        <p>DAY THREE</p>{" "}
        {
          <CurrItems
            currItems={currItems.filter((item) => item.dateChoice === "day-3")}
            setCurrItems={setCurrItems}
            setPrevItems={setPrevItems}
          />
        }
      </div>
    </div>
  );
};

export default ThreeDayView;

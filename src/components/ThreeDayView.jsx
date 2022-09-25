import CurrItems from "./CurrItems";

const ThreeDayView = ({
  currItems,
  setCurrItems,
  setPrevItems,
  setDateChoice,
  dateChoice,
  today,
}) => {
  const dayone = today
    .toLocaleDateString("en-US", {
      weekday: "long",
      day: "numeric",
    })
    .slice(0, 6)
    .split(" ")
    .reverse()
    .join("")
    .toUpperCase();

  const daytwo = new Date(today.getTime() + 60 * 60 * 24 * 1000)
    .toLocaleDateString("en-US", {
      weekday: "long",
      day: "numeric",
    })
    .slice(0, 6)
    .split(" ")
    .reverse()
    .join("")
    .toUpperCase();

  const daythree = new Date(today.getTime() + 60 * 60 * 48 * 1000)
    .toLocaleDateString("en-US", {
      weekday: "long",
      day: "numeric",
    })
    .slice(0, 6)
    .split(" ")
    .reverse()
    .join("")
    .toUpperCase();

  return (
    <div className="h-full w-full grid grid-rows-1 grid-cols-3 bg-stone-50">
      <div
        className={
          dateChoice === "day-1"
            ? "flex flex-col gap-5 bg-stone-100"
            : "flex flex-col gap-5"
        }
        onClick={() => {
          setDateChoice("day-1");
        }}
      >
        <h2 className="text-stone-700">{dayone}</h2>
        {
          <CurrItems
            currItems={currItems.filter((item) => item.dateChoice === "day-1")}
            setCurrItems={setCurrItems}
            setPrevItems={setPrevItems}
            classTest="h-full w-full flex flex-col gap-8 px-3"
            day="day-1"
          />
        }
      </div>
      <div
        className={
          dateChoice === "day-2"
            ? "flex flex-col gap-5 bg-stone-100"
            : "flex flex-col gap-5 "
        }
        onClick={() => {
          setDateChoice("day-2");
        }}
      >
        {" "}
        <h2 className="text-stone-700">{daytwo}</h2>
        {
          <CurrItems
            currItems={currItems.filter((item) => item.dateChoice === "day-2")}
            setCurrItems={setCurrItems}
            setPrevItems={setPrevItems}
            classTest="h-fit w-fit flex flex-col gap-8 px-3"
            day="day-2"
          />
        }
      </div>{" "}
      <div
        className={
          dateChoice === "day-3"
            ? "flex flex-col gap-5 bg-stone-100"
            : "flex flex-col gap-5"
        }
        onClick={() => {
          setDateChoice("day-3");
        }}
      >
        {" "}
        <h2 className="text-stone-700">{daythree}</h2>{" "}
        {
          <CurrItems
            currItems={currItems.filter((item) => item.dateChoice === "day-3")}
            setCurrItems={setCurrItems}
            setPrevItems={setPrevItems}
            classTest="h-fit w-fit flex flex-col gap-8 px-3"
            day="day-3"
          />
        }
      </div>
    </div>
  );
};

export default ThreeDayView;

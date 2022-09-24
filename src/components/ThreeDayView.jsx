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
    <div className="h-full w-full grid grid-rows-1 grid-cols-3 bg-gray-900 pt-5">
      <div
        className={
          dateChoice === "day-1"
            ? "flex flex-col bg-gray-900 m-1 gap-5"
            : "flex flex-col bg-gray-900 m-1 gap-5"
        }
        onClick={() => {
          setDateChoice("day-1");
        }}
      >
        <h1>{dayone}</h1>
        {
          <CurrItems
            currItems={currItems.filter((item) => item.dateChoice === "day-1")}
            setCurrItems={setCurrItems}
            setPrevItems={setPrevItems}
            classTest="h-fit w-fit flex flex-col gap-5 mx-2"
            day="day-1"
          />
        }
      </div>
      <div
        className={
          dateChoice === "day-2"
            ? "flex flex-col bg-gray-900 m-1 gap-5 mx-2"
            : "flex flex-col bg-gray-900 m-1 gap-5 mx-2"
        }
        onClick={() => {
          setDateChoice("day-2");
        }}
      >
        {" "}
        <h1>{daytwo}</h1>
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
            ? "flex flex-col bg-gray-900 m-1 gap-5 text-white"
            : "flex flex-col bg-gray-900 m-1 gap-5"
        }
        onClick={() => {
          setDateChoice("day-3");
        }}
      >
        {" "}
        <h1>{daythree}</h1>{" "}
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

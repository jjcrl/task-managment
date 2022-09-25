import CurrItems from "./CurrItems";
const TodayView = ({
  currItems,
  setCurrItems,
  setPrevItems,
  today,
  dateChoice,
  setDateChoice,
}) => {
  return (
    <div
      className={
        dateChoice === "day-1"
          ? "h-full w-full bg-stone-100"
          : "h-full w-full bg-stone-50"
      }
      onClick={() => {
        setDateChoice("day-1");
      }}
    >
      <h2 className="text-stone-700 w-full text-left ml-5">
        {today
          .toLocaleDateString("en-US", {
            weekday: "long",
            day: "numeric",
          })
          .slice(0, 6)
          .split(" ")
          .reverse()
          .join("")
          .toUpperCase()}
      </h2>
      <CurrItems
        currItems={currItems}
        setCurrItems={setCurrItems}
        setPrevItems={setPrevItems}
        classTest="h-fit w-fit flex flex-row gap-5 m-auto justify-between mt-5"
        day="day-1"
      />
    </div>
  );
};

export default TodayView;

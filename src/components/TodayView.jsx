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
          ? "h-full w-full bg-stone-300"
          : "h-full w-full bg-stone-100"
      }
      onClick={() => {
        setDateChoice("day-1");
      }}
    >
      <h1 className="text-stone-700 w-full text-left ml-5 p-2">
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
      </h1>

      <div className="rounded-2xl w-fit bg-stone-400 text-stone-50 flex flex-col ml-10 p-5 text-left px-7 shadow-md absolute top-10 right-10 ">
        {" "}
        <h3>
          Total items{" "}
          {currItems.filter((item) => item.dateChoice === "day-1").length}
        </h3>
        <h3>
          Priority items{" "}
          {
            currItems.filter(
              (item) => item.dateChoice === "day-1" && item.priority
            ).length
          }
        </h3>
      </div>

      <CurrItems
        currItems={currItems}
        setCurrItems={setCurrItems}
        setPrevItems={setPrevItems}
        classTest="h-fit w-full flex flex-row gap-8 m-auto justify-between mt-16 px-10"
        day="day-1"
      />
    </div>
  );
};

export default TodayView;

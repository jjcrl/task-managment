import CurrItems from "./CurrItems";
import { formatDate } from "./formatDate";
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
      className="h-full w-full bg-white"
      onClick={() => {
        setDateChoice("day-1");
      }}
    >
      <h2 className="text-zinc-700 w-full text-left ml-5 p-2">
        {formatDate(today)}
      </h2>

      {/* <div className="rounded-2xl w-fit bg-stone-400 text-stone-50 flex flex-col ml-10 p-5 text-left px-7 shadow-md absolute top-5 right-5 border-2 border-stone-200">
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
      </div> */}

      <CurrItems
        currItems={currItems}
        setCurrItems={setCurrItems}
        setPrevItems={setPrevItems}
        classTest="h-full w-full flex flex-row gap-8 px-10"
        day="day-1"
      />
    </div>
  );
};

export default TodayView;

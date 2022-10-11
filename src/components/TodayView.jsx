import CurrItems from "./CurrItems";
const TodayView = ({
  currItems,
  setCurrItems,
  setPrevItems,
  days,
  setDateChoice,
  taskDateOptions,
}) => {
  return (
    <div
      className="h-full w-full bg-white"
      onClick={() => {
        setDateChoice("day-1");
      }}
    >
      <h2 className="text-slate-700 w-full text-left ml-5 p-2">{days[0]}</h2>
      <CurrItems
        currItems={currItems}
        setCurrItems={setCurrItems}
        setPrevItems={setPrevItems}
        classTest="h-full w-full flex flex-row gap-8 px-10"
        day="day-1"
        taskDateOptions={taskDateOptions}
      />
    </div>
  );
};

export default TodayView;

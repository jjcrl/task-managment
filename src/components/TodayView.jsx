import CurrItems from "./CurrItems";
const TodayView = ({ currItems, setCurrItems, setPrevItems, today }) => {
  return (
    <div className="h-full w-full p-2 bg-yellow-50 pt-5">
      <h1 className="text-yellow-300 w-full text-left ml-5">
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

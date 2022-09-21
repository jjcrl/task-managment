import CurrItems from "./CurrItems";
const TodayView = ({ currItems, setCurrItems, setPrevItems }) => {
  return (
    <div className="h-full w-full p-2">
      <CurrItems
        currItems={currItems}
        setCurrItems={setCurrItems}
        setPrevItems={setPrevItems}
        classTest="h-fit w-max flex flex-row gap-5 p-2"
        day="day-1"
      />
    </div>
  );
};

export default TodayView;

import CurrItems from "./CurrItems";
const TodayView = ({ currItems, setCurrItems, setPrevItems }) => {
  return (
    <div className="h-full w-full">
      <CurrItems
        currItems={currItems}
        setCurrItems={setCurrItems}
        setPrevItems={setPrevItems}
      />
    </div>
  );
};

export default TodayView;

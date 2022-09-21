import CurrItems from "./CurrItems";

const WeekView = ({
  currItems,
  setCurrItems,
  setPrevItems,
  setDateChoice,
  dateChoice,
}) => {
  return (
    <div className="h-full w-full grid grid-cols-3 grid-rows-2">
      <div>
        <p>day1</p>
        {
          <CurrItems
            currItems={currItems.filter((item) => item.dateChoice === "day-1")}
            setCurrItems={setCurrItems}
            setPrevItems={setPrevItems}
          />
        }
      </div>
      <div>
        <p>day2</p>
        {
          <CurrItems
            currItems={currItems.filter((item) => item.dateChoice === "day-1")}
            setCurrItems={setCurrItems}
            setPrevItems={setPrevItems}
          />
        }
      </div>{" "}
      <div>
        <p>day3</p>
        {
          <CurrItems
            currItems={currItems.filter((item) => item.dateChoice === "day-1")}
            setCurrItems={setCurrItems}
            setPrevItems={setPrevItems}
          />
        }
      </div>{" "}
      <div>
        <p>day4</p>
        {
          <CurrItems
            currItems={currItems.filter((item) => item.dateChoice === "day-1")}
            setCurrItems={setCurrItems}
            setPrevItems={setPrevItems}
          />
        }
      </div>{" "}
      <div>
        <p>day5</p>
        {
          <CurrItems
            currItems={currItems.filter((item) => item.dateChoice === "day-1")}
            setCurrItems={setCurrItems}
            setPrevItems={setPrevItems}
          />
        }
      </div>{" "}
      <div>
        <p>day6</p>
        {
          <CurrItems
            currItems={currItems.filter((item) => item.dateChoice === "day-1")}
            setCurrItems={setCurrItems}
            setPrevItems={setPrevItems}
          />
        }
      </div>{" "}
      <div>
        <p>day7</p>
        {
          <CurrItems
            currItems={currItems.filter((item) => item.dateChoice === "day-1")}
            setCurrItems={setCurrItems}
            setPrevItems={setPrevItems}
          />
        }
      </div>
    </div>
  );
};

export default WeekView;

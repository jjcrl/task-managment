import CurrItems from "./CurrItems";

const WeekView = ({
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

  const formateDate = (date) => {
    return date
      .toLocaleDateString("en-US", {
        weekday: "long",
        day: "numeric",
      })
      .slice(0, 6)
      .split(" ")
      .reverse()
      .join("")
      .toUpperCase();
  };

  const daytwo = new Date(today.getTime() + 60 * 60 * 24 * 1000);
  const daythree = new Date(today.getTime() + 60 * 60 * 48 * 1000);
  const dayfour = new Date(today.getTime() + 60 * 60 * 72 * 1000);
  const dayfive = new Date(today.getTime() + 60 * 60 * 96 * 1000);
  const daysix = new Date(today.getTime() + 60 * 60 * 120 * 1000);
  const dayseven = new Date(today.getTime() + 60 * 60 * 148 * 1000);

  return (
    <div className="h-full w-full grid grid-cols-4 auto-rows-auto bg-gray-900 p-2 pt-5">
      <div className="h-full w-full">
        <h1>{dayone}</h1>
        {
          <CurrItems
            currItems={currItems.filter((item) => item.dateChoice === "day-1")}
            setCurrItems={setCurrItems}
            setPrevItems={setPrevItems}
            classTest="h-min w-fit"
            day="day-1"
            mini={true}
          />
        }
      </div>
      <div className="h-full w-full">
        <h1>{formateDate(daytwo)}</h1>
        {
          <CurrItems
            currItems={currItems.filter((item) => item.dateChoice === "day-2")}
            setCurrItems={setCurrItems}
            setPrevItems={setPrevItems}
            classTest="h-min w-fit flex flex-col border-2 border-black"
            day="day-2"
            mini={true}
          />
        }
      </div>{" "}
      <div className="h-full w-full">
        <h1>{formateDate(daythree)}</h1>
        {
          <CurrItems
            currItems={currItems.filter((item) => item.dateChoice === "day-3")}
            setCurrItems={setCurrItems}
            setPrevItems={setPrevItems}
            mini={true}
            classTest="h-min w-fit flex flex-col border-2 border-black"
            day="day-3"
          />
        }
      </div>{" "}
      <div className="h-full w-full">
        <h1>{formateDate(dayfour)}</h1>
        {
          <CurrItems
            currItems={currItems.filter(
              (item) => item.dateChoice === "day-1day-4"
            )}
            setCurrItems={setCurrItems}
            setPrevItems={setPrevItems}
            classTest="h-min w-fit flex flex-col border-2 border-black"
            day="day-4"
            mini={true}
          />
        }
      </div>{" "}
      <div className="h-full w-full">
        <h1>{formateDate(dayfive)}</h1>
        {
          <CurrItems
            currItems={currItems.filter((item) => item.dateChoice === "day-5")}
            setCurrItems={setCurrItems}
            setPrevItems={setPrevItems}
            classTest="h-min w-fit flex flex-col border-2 border-black"
            day="day-5"
            mini={true}
          />
        }
      </div>{" "}
      <div className="h-full w-full">
        <h1>{formateDate(daysix)}</h1>

        {
          <CurrItems
            currItems={currItems.filter((item) => item.dateChoice === "day-")}
            setCurrItems={setCurrItems}
            setPrevItems={setPrevItems}
            classTest="h-min w-fit flex flex-col border-2 border-black"
            day="day-6"
            mini={true}
          />
        }
      </div>{" "}
      <div className="h-full w-full">
        <h1>{formateDate(dayseven)}</h1>
        {
          <CurrItems
            currItems={currItems.filter((item) => item.dateChoice === "day-7")}
            setCurrItems={setCurrItems}
            setPrevItems={setPrevItems}
            classTest="h-min w-fit flex flex-col border-2 border-black"
            day="day-7"
            mini={true}
          />
        }
      </div>
    </div>
  );
};

export default WeekView;

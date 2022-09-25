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
    <div className="h-full w-full grid grid-cols-4 auto-rows-auto bg-stone-50">
      <div
        className={
          dateChoice === "day-1"
            ? "h-full w-full bg-stone-100 flex flex-col"
            : "h-full w-full bg-stone-50 flex flex-col"
        }
        onClick={() => {
          setDateChoice("day-1");
        }}
      >
        <h2 className="text-stone-700">{dayone}</h2>
        {
          <CurrItems
            currItems={currItems.filter((item) => item.dateChoice === "day-1")}
            setCurrItems={setCurrItems}
            setPrevItems={setPrevItems}
            classTest="h-full w-full flex flex-col"
            day="day-1"
            mini={true}
          />
        }
      </div>
      <div
        className={
          dateChoice === "day-2"
            ? "h-full w-full bg-stone-100 flex flex-col"
            : "h-full w-full bg-stone-50 flex flex-col"
        }
        onClick={() => {
          setDateChoice("day-2");
        }}
      >
        <h2 className="text-stone-700">{formateDate(daytwo)}</h2>
        {
          <CurrItems
            currItems={currItems.filter((item) => item.dateChoice === "day-2")}
            setCurrItems={setCurrItems}
            setPrevItems={setPrevItems}
            classTest="h-full w-full flex flex-col"
            day="day-2"
            mini={true}
          />
        }
      </div>{" "}
      <div
        className={
          dateChoice === "day-3"
            ? "h-full w-full bg-stone-100 flex flex-col"
            : "h-full w-full bg-stone-50 flex flex-col"
        }
        onClick={() => {
          setDateChoice("day-3");
        }}
      >
        <h2 className="text-stone-700">{formateDate(daythree)}</h2>
        {
          <CurrItems
            currItems={currItems.filter((item) => item.dateChoice === "day-3")}
            setCurrItems={setCurrItems}
            setPrevItems={setPrevItems}
            mini={true}
            classTest="h-full w-full flex flex-col "
            day="day-3"
          />
        }
      </div>{" "}
      <div
        className={
          dateChoice === "day-4"
            ? "h-full w-full bg-stone-100 flex flex-col"
            : "h-full w-full bg-stone-50 flex flex-col"
        }
        onClick={() => {
          setDateChoice("day-4");
        }}
      >
        <h2 className="text-stone-700">{formateDate(dayfour)}</h2>
        {
          <CurrItems
            currItems={currItems.filter((item) => item.dateChoice === "day-4")}
            setCurrItems={setCurrItems}
            setPrevItems={setPrevItems}
            classTest="h-full w-full flex flex-col"
            day="day-4"
            mini={true}
          />
        }
      </div>{" "}
      <div
        className={
          dateChoice === "day-5"
            ? "h-full w-full bg-stone-100 flex flex-col"
            : "h-full w-full bg-stone-50 flex flex-col"
        }
        onClick={() => {
          setDateChoice("day-5");
        }}
      >
        <h2 className="text-stone-700">{formateDate(dayfive)}</h2>
        {
          <CurrItems
            currItems={currItems.filter((item) => item.dateChoice === "day-5")}
            setCurrItems={setCurrItems}
            setPrevItems={setPrevItems}
            classTest="h-full w-full flex flex-col"
            day="day-5"
            mini={true}
          />
        }
      </div>{" "}
      <div
        className={
          dateChoice === "day-6"
            ? "h-full w-full bg-stone-100 flex flex-col"
            : "h-full w-full bg-stone-50 flex flex-col"
        }
        onClick={() => {
          setDateChoice("day-6");
        }}
      >
        <h2 className="text-stone-700">{formateDate(daysix)}</h2>

        {
          <CurrItems
            currItems={currItems.filter((item) => item.dateChoice === "day-6")}
            setCurrItems={setCurrItems}
            setPrevItems={setPrevItems}
            classTest="h-full w-full flex flex-col"
            day="day-6"
            mini={true}
          />
        }
      </div>{" "}
      <div
        className={
          dateChoice === "day-7"
            ? "h-full w-full bg-stone-100 flex flex-col"
            : "h-full w-full bg-stone-50 flex flex-col"
        }
        onClick={() => {
          setDateChoice("day-7");
        }}
      >
        <h2 className="text-stone-700">{formateDate(dayseven)}</h2>
        {
          <CurrItems
            currItems={currItems.filter((item) => item.dateChoice === "day-7")}
            setCurrItems={setCurrItems}
            setPrevItems={setPrevItems}
            classTest="h-full w-full flex flex-col"
            day="day-7"
            mini={true}
          />
        }
      </div>
    </div>
  );
};

export default WeekView;

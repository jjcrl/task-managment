import CurrItems from "./CurrItems";

const WeekView = ({
  currItems,
  setCurrItems,
  setPrevItems,
  setDateChoice,
  dateChoice,
  today,
}) => {
  const formatDate = (date) => {
    const string = date
      .toLocaleDateString("en-US", {
        weekday: "long",
        day: "numeric",
      })
      .toUpperCase()
      .split(" ")
      .reverse();
    const day = string[0].slice(0, 3);
    const number = string[1];
    return +string[1] < 10 ? `${day}0${number}` : `${day}${number}`;
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
            ? "h-full w-full bg-stone-300 flex flex-col"
            : "h-full w-full bg-stone-100 flex flex-col"
        }
        onClick={() => {
          setDateChoice("day-1");
        }}
      >
        <h2 className="text-stone-700">{formatDate(today)}</h2>
        {
          <CurrItems
            currItems={currItems.filter((item) => item.dateChoice === "day-1")}
            setCurrItems={setCurrItems}
            setPrevItems={setPrevItems}
            classTest="h-fit w-full flex flex-col"
            day="day-1"
            mini={true}
          />
        }
      </div>
      <div
        className={
          dateChoice === "day-2"
            ? "h-full w-full bg-stone-300 flex flex-col"
            : "h-full w-full bg-stone-100 flex flex-col"
        }
        onClick={() => {
          setDateChoice("day-2");
        }}
      >
        <h2 className="text-stone-700">{formatDate(daytwo)}</h2>
        {
          <CurrItems
            currItems={currItems.filter((item) => item.dateChoice === "day-2")}
            setCurrItems={setCurrItems}
            setPrevItems={setPrevItems}
            classTest="h-fit w-full flex flex-col"
            day="day-2"
            mini={true}
          />
        }
      </div>{" "}
      <div
        className={
          dateChoice === "day-3"
            ? "h-full w-full bg-stone-300 flex flex-col"
            : "h-full w-full bg-stone-100 flex flex-col"
        }
        onClick={() => {
          setDateChoice("day-3");
        }}
      >
        <h2 className="text-stone-700">{formatDate(daythree)}</h2>
        {
          <CurrItems
            currItems={currItems.filter((item) => item.dateChoice === "day-3")}
            setCurrItems={setCurrItems}
            setPrevItems={setPrevItems}
            mini={true}
            classTest="h-fit w-full flex flex-col "
            day="day-3"
          />
        }
      </div>{" "}
      <div
        className={
          dateChoice === "day-4"
            ? "h-full w-full bg-stone-300 flex flex-col"
            : "h-full w-full bg-stone-100 flex flex-col"
        }
        onClick={() => {
          setDateChoice("day-4");
        }}
      >
        <h2 className="text-stone-700">{formatDate(dayfour)}</h2>
        {
          <CurrItems
            currItems={currItems.filter((item) => item.dateChoice === "day-4")}
            setCurrItems={setCurrItems}
            setPrevItems={setPrevItems}
            classTest="h-fit w-full flex flex-col"
            day="day-4"
            mini={true}
          />
        }
      </div>{" "}
      <div
        className={
          dateChoice === "day-5"
            ? "h-full w-full bg-stone-300 flex flex-col"
            : "h-full w-full bg-stone-100 flex flex-col"
        }
        onClick={() => {
          setDateChoice("day-5");
        }}
      >
        <h2 className="text-stone-700">{formatDate(dayfive)}</h2>
        {
          <CurrItems
            currItems={currItems.filter((item) => item.dateChoice === "day-5")}
            setCurrItems={setCurrItems}
            setPrevItems={setPrevItems}
            classTest="h-fit w-full flex flex-col"
            day="day-5"
            mini={true}
          />
        }
      </div>{" "}
      <div
        className={
          dateChoice === "day-6"
            ? "h-full w-full bg-stone-300 flex flex-col"
            : "h-full w-full bg-stone-100 flex flex-col"
        }
        onClick={() => {
          setDateChoice("day-6");
        }}
      >
        <h2 className="text-stone-700">{formatDate(daysix)}</h2>

        {
          <CurrItems
            currItems={currItems.filter((item) => item.dateChoice === "day-6")}
            setCurrItems={setCurrItems}
            setPrevItems={setPrevItems}
            classTest="h-fit w-full flex flex-col"
            day="day-6"
            mini={true}
          />
        }
      </div>{" "}
      <div
        className={
          dateChoice === "day-7"
            ? "h-full w-full bg-stone-300 flex flex-col"
            : "h-full w-full bg-stone-100 flex flex-col"
        }
        onClick={() => {
          setDateChoice("day-7");
        }}
      >
        <h2 className="text-stone-700">{formatDate(dayseven)}</h2>
        {
          <CurrItems
            currItems={currItems.filter((item) => item.dateChoice === "day-7")}
            setCurrItems={setCurrItems}
            setPrevItems={setPrevItems}
            classTest="h-fit w-full flex flex-col"
            day="day-7"
            mini={true}
          />
        }
      </div>
    </div>
  );
};

export default WeekView;

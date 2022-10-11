import CurrItems from "./CurrItems";
const WeekView = ({
  currItems,
  setCurrItems,
  setPrevItems,
  setDateChoice,
  dateChoice,
  days,
  taskDateOptions,
}) => {
  return (
    <div className="h-full w-full grid grid-cols-4 auto-rows-auto bg-whgite">
      <div className="h-full w-full bg-white flex flex-col">
        <h2
          className={
            dateChoice === "day-1"
              ? "text-slate-800 w-ful text-left ml-5 p-2 underline"
              : "text-slate-700 w-full text-left ml-5 p-2"
          }
          onClick={() => {
            setDateChoice("day-1");
          }}
        >
          {days[0]}
        </h2>
        {
          <CurrItems
            currItems={currItems}
            setCurrItems={setCurrItems}
            setPrevItems={setPrevItems}
            classTest="h-fit w-full flex flex-col"
            day={"day-1"}
            mini={true}
            setDateChoice={setDateChoice}
            dateChoice={dateChoice}
            taskDateOptions={taskDateOptions}
          />
        }
      </div>
      <div className="h-full w-full bg-white flex flex-col">
        <h2
          className={
            dateChoice === "day-2"
              ? "text-slate-800 w-ful text-left ml-5 p-2 underline"
              : "text-slate-700 w-full text-left ml-5 p-2"
          }
          onClick={() => {
            setDateChoice("day-2");
          }}
        >
          {days[1]}
        </h2>
        {
          <CurrItems
            currItems={currItems}
            setCurrItems={setCurrItems}
            setPrevItems={setPrevItems}
            classTest="h-fit w-full flex flex-col"
            day={"day-2"}
            mini={true}
            setDateChoice={setDateChoice}
            dateChoice={dateChoice}
            taskDateOptions={taskDateOptions}
          />
        }
      </div>{" "}
      <div className="h-full w-full bg-white flex flex-col">
        <h2
          className={
            dateChoice === "day-3"
              ? "text-slate-800 w-ful text-left ml-5 p-2 underline"
              : "text-slate-700 w-full text-left ml-5 p-2"
          }
          onClick={() => {
            setDateChoice("day-3");
          }}
        >
          {days[2]}
        </h2>
        {
          <CurrItems
            currItems={currItems}
            setCurrItems={setCurrItems}
            setPrevItems={setPrevItems}
            mini={true}
            classTest="h-fit w-full flex flex-col "
            day={"day-3"}
            setDateChoice={setDateChoice}
            dateChoice={dateChoice}
            taskDateOptions={taskDateOptions}
          />
        }
      </div>{" "}
      <div className="h-full w-full bg-white flex flex-col">
        <h2
          className={
            dateChoice === "day-4"
              ? "text-slate-800 w-ful text-left ml-5 p-2 underline"
              : "text-slate-700 w-full text-left ml-5 p-2"
          }
          onClick={() => {
            setDateChoice("day-4");
          }}
        >
          {days[3]}
        </h2>
        {
          <CurrItems
            currItems={currItems}
            setCurrItems={setCurrItems}
            setPrevItems={setPrevItems}
            classTest="h-fit w-full flex flex-col"
            day={"day-4"}
            mini={true}
            setDateChoice={setDateChoice}
            dateChoice={dateChoice}
            taskDateOptions={taskDateOptions}
          />
        }
      </div>{" "}
      <div className="h-full w-full bg-white flex flex-col">
        <h2
          className={
            dateChoice === "day-5"
              ? "text-slate-800 w-ful text-left ml-5 p-2 underline"
              : "text-slate-700 w-full text-left ml-5 p-2"
          }
          onClick={() => {
            setDateChoice("day-5");
          }}
        >
          {days[4]}
        </h2>
        {
          <CurrItems
            currItems={currItems}
            setCurrItems={setCurrItems}
            setPrevItems={setPrevItems}
            classTest="h-fit w-full flex flex-col"
            day={"day-5"}
            mini={true}
            setDateChoice={setDateChoice}
            dateChoice={dateChoice}
            taskDateOptions={taskDateOptions}
          />
        }
      </div>{" "}
      <div className="h-full w-full bg-white flex flex-col">
        <h2
          className={
            dateChoice === "day-6"
              ? "text-slate-800 w-ful text-left ml-5 p-2 underline"
              : "text-slate-700 w-full text-left ml-5 p-2"
          }
          onClick={() => {
            setDateChoice("day-6");
          }}
        >
          {days[5]}
        </h2>

        {
          <CurrItems
            currItems={currItems}
            setCurrItems={setCurrItems}
            setPrevItems={setPrevItems}
            classTest="h-fit w-full flex flex-col"
            day={"day-6"}
            mini={true}
            setDateChoice={setDateChoice}
            dateChoice={dateChoice}
            taskDateOptions={taskDateOptions}
          />
        }
      </div>{" "}
      <div className="h-full w-full bg-white flex flex-col">
        <h2
          className={
            dateChoice === "day-7"
              ? "text-slate-800 w-ful text-left ml-5 p-2 underline"
              : "text-slate-700 w-full text-left ml-5 p-2"
          }
          onClick={() => {
            setDateChoice("day-7");
          }}
        >
          {days[6]}
        </h2>
        {
          <CurrItems
            currItems={currItems}
            setCurrItems={setCurrItems}
            setPrevItems={setPrevItems}
            classTest="h-fit w-full flex flex-col"
            day={"day-7"}
            mini={true}
            setDateChoice={setDateChoice}
            dateChoice={dateChoice}
            taskDateOptions={taskDateOptions}
          />
        }
      </div>
    </div>
  );
};

export default WeekView;

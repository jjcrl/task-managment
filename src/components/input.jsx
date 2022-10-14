import { useState } from "react";

const Input = ({
  currItems,
  setCurrItems,
  dateChoice,
  taskDateOptions,
  today,
}) => {
  const [input, setInput] = useState();
  const [toggle, setToggle] = useState(false);
  const [storageKey, setStorageKey] = useState(0);

  const time = today.toString().slice(15, 24);
  const date = today.toLocaleDateString("en-US", {
    day: "numeric",
    month: "numeric",
  });

  const emojiArr = [
    "🚀",
    "🔧",
    "🔩",
    "🏁",
    "🎉",
    "🧨",
    "🙌",
    "🥳",
    "🎊",
    "🚀",
    "😍",
    "💻",
    "🚂",
    "💯",
    "❗️",
    "⚡",
    "🔋",
    "🚀",
    "🎉",
    "🧠",
    "🤜",
    "🧙‍♀️",
    "🧙",
    "🧙‍♂️",
    "🫂",
    "⚡",
    "🐝",
    "🌱",
    "🌈",
    "💫",
    "⚡",
    "⭐️",
    "🌟",
    "✨",
    "⚡️",
    "☕️",
    "🏆",
    "🎯",
    "⚡",
    "🎇",
    "🎆",
    "💡",
    "💯",
    "⭐️",
    "🌟",
  ];
  const emoji = emojiArr[Math.floor(Math.random() * emojiArr.length)];

  const handleSubmit = () => {
    setInput("");
  };

  const addItem = () => {
    const newItem = {
      input: input,
      priority: toggle,
      emoji,
      dateChoice: dateChoice ? dateChoice : "day-1",
      id: currItems.length,
      created_at: date + time,
      completed: false,
    };

    setCurrItems((currItems) => [...currItems, newItem]);
    localStorage.setItem(`item-${storageKey}`, JSON.stringify(newItem));
    setStorageKey((storageKey) => storageKey + 1);
    setInput("");
    setToggle(false);
  };

  const onEnterPress = (e) => {
    if (e.keyCode === 13 && input.length > 0) {
      addItem();
      handleSubmit();
    }
  };

  return (
    <>
      <div className="bg-zinc-100 text-zinc-700 text-left py-2 inline pl-2">
        <h6>prompt...</h6>
      </div>
      <form onSubmit={handleSubmit}>
        <textarea
          onChange={(e) => setInput(e.target.value)}
          value={input}
          className="w-full h-40 text-2xl m-auto p-3 resize-none text-stone-900 bg-zinc-100"
          placeholder="What do you have to do ?"
          type="text"
          onKeyDown={onEnterPress}
        />{" "}
        <div className="flex flex-row absolute gap-2 px-1 top-40 -m-4 ml-1">
          <div className="w-fit bg-white border border-gray-500 rounded-md shadow-sm">
            <button
              className="h-11 w-11 m-auto text-center pl-1 text-2xl text-zinc-700 font-medium"
              onClick={() => {
                localStorage.clear();
              }}
            >
              ↺
            </button>
          </div>
          <div className="flex flex-row-reverse w-fit py-1 gap-2 border rounded-md bg-white shadow-sm border-gray-500 px-2">
            <p className="m-auto font-light text-zinc-600">Priority Item</p>
            <input
              type="checkbox"
              id="important"
              className="h-7 w-7 my-1"
              onChange={() => {
                setToggle(!toggle);
              }}
              checked={toggle}
            />
          </div>
          <div className=" border px-3 py-2.5 bg-white w-fit h-11.5 rounded-md font-regular border-gray-500 shadow-sm text-zinc-500">
            <p className="underline">
              {taskDateOptions[dateChoice]
                ? taskDateOptions[dateChoice]
                : taskDateOptions["day-1"]}
            </p>
          </div>
        </div>
      </form>
    </>
  );
};

export default Input;

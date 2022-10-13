import { useState } from "react";

const Input = ({ setCurrItems, dateChoice, taskDateOptions, today }) => {
  const [input, setInput] = useState();
  const [toggle, setToggle] = useState(false);

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
    setCurrItems((currItems) => [
      ...currItems,
      {
        input: input,
        priority: toggle,
        emoji,
        dateChoice: dateChoice ? dateChoice : "day-1",
        id: currItems.length,
        created_at: date + time,
      },
    ]);
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
          className="w-full h-40 text-2xl m-auto p-3 resize-none text-stone-900 bg-zinc-50"
          placeholder="What do you have to do ?"
          type="text"
          onKeyDown={onEnterPress}
        />{" "}
        <div className="absolute top-40 left-6 -m-3">
          <input
            type="checkbox"
            id="important"
            className="h-10 w-10 shadow-sm"
            onChange={() => {
              setToggle(!toggle);
            }}
            checked={toggle}
          />
        </div>
        <div className="absolute ml-16 top-40 -m-3 border px-4 py-2 bg-white w-fit h-10 rounded-sm font-regular border-gray-500 shadow-sm">
          <p>
            •{" "}
            {taskDateOptions[dateChoice]
              ? taskDateOptions[dateChoice]
              : taskDateOptions["day-1"]}
          </p>
        </div>
      </form>
    </>
  );
};

export default Input;

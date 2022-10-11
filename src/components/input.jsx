import { useState } from "react";
import { formatDate } from "./formatDate";

const Input = ({ setCurrItems, dateChoice, view, today }) => {
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
          className="w-full h-40 text-2xl m-auto p-2 resize-none text-stone-900 bg-zinc-50"
          placeholder="What do you have to do ?"
          type="text"
          onKeyDown={onEnterPress}
        />{" "}
        <div className="absolute top-40 left-80 -m-2">
          <input
            type="checkbox"
            id="important"
            className="w-10 h-10"
            onChange={() => {
              setToggle(true);
            }}
            checked={toggle}
          />
        </div>
        <div className="absolute ml-2 top-40 -m-2 border-2 px-3 py-1 bg-zinc-200 w-fit h-fit rounded-xl">
          <p>{view}</p>
        </div>
      </form>
    </>
  );
};

export default Input;

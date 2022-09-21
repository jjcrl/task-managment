import { useState, useEffect } from "react";

const Input = ({ setCurrItems, dateChoice }) => {
  const [input, setInput] = useState();
  const [toggle, setToggle] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const emojiArr = [
    "✅",
    "🚀",
    "🔧",
    "🔩",
    "🏁",
    "🎉",
    "🧨",
    "🙌",
    "🥳",
    "🎊",
    "✅",
    "🚀",
    "😍",
    "💻",
    "🚂",
    "💯",
    "❗️",
    "⚡",
    "🔋",
    "✅",
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
    "❗️",
    "⭐️",
    "🌟",
  ];

  const emoji = emojiArr[Math.floor(Math.random() * emojiArr.length)];

  const addItem = () => {
    setCurrItems((currItems) => [
      ...currItems,
      {
        input: input,
        priority: toggle,
        emoji,
        dateChoice: dateChoice ? dateChoice : "day-1",
        id: currItems.length,
      },
    ]);
    setInput("");
    setToggle(false);
  };

  const onEnterPress = (e) => {
    if (e.keyCode === 13) {
      addItem();
      handleSubmit();
    }
  };

  return (
    <>
      <div className="bg-yellow-50 py-3 text-yellow-400 font-bold tracking-wider ">
        <p>prompt</p>
      </div>
      <form onSubmit={handleSubmit}>
        <textarea
          onChange={(e) => setInput(e.target.value)}
          value={input}
          className="w-full h-40 text-4xl m-auto p-5 resize-none"
          placeholder="What do you have to do?"
          type="text"
          onKeyDown={onEnterPress}
        />{" "}
        <div className="absolute top-36 left-80">
          <input
            type="checkbox"
            id="important"
            className="w-12 h-12"
            onChange={() => {
              setToggle(true);
            }}
            checked={toggle}
          />
        </div>
      </form>
    </>
  );
};

export default Input;

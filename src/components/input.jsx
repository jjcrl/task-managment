import { useState, useEffect } from "react";

const Input = ({ setCurrItems, dateChoice }) => {
  const [input, setInput] = useState();
  const [toggle, setToggle] = useState(false);

  const handleSubmit = (event) => {
    setInput("");
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
      <div className="bg-yellow-300 py-2 text-yellow-500 font-bold  text-left pl-2 tracking-wider w-full truncate inline">
        <p>prompt: items should be less than 10 words.</p>
      </div>
      <form onSubmit={handleSubmit}>
        <textarea
          onChange={(e) => setInput(e.target.value)}
          value={input}
          className="w-full h-48 text-4xl m-auto p-5 resize-none text-yellow-800"
          placeholder="What do you have to do?"
          type="text"
          onKeyDown={onEnterPress}
        />{" "}
        <div className="absolute top-40 left-96 -m-2">
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

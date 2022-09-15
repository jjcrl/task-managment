const PrevItems = ({ prevItems, currEmoji }) => {
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
    "😍",
    "💻",
    "🚂",
    "⚡",
    "🔋",
    "🌐",
    "🎉",
    "👾",
    "🧠",
    "🤜",
    "🧙‍♀️",
    "🧙",
    "🧙‍♂️",
    "🫂",
    "🐝",
    "🌱",
    "🌈",
    "💫",
    "⭐️",
    "🌟",
    "✨",
    "⚡️",
    "☕️",
    "🏆",
    "🎯",
    "🎇",
    "🎆",
    "💡",
    "💯",
    "❗️",
    "❕",
  ];
  return (
    <ul className="w-full h-full inline	text-left break-all pl-2 bg-neutral-900">
      {prevItems.map((item, index) => (
        <>
          <li
            className="text-2xl inline leading-none"
            key={`item-${index}-emoji`}
          >
            {item.emoji}
          </li>{" "}
          <li
            className="text-xl inline leading-none tracking-widest text-neutral-300"
            key={`item-${index}`}
          >
            {item.input}{" "}
          </li>
        </>
      ))}
    </ul>
  );
};
export default PrevItems;

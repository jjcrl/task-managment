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
            key={`item-${index}`}
            className="text-xl inline leading-none tracking-widest text-neutral-300"
          >
            {item.input} {item.emoji}
          </li>
        </>
      ))}
    </ul>
  );
};
export default PrevItems;

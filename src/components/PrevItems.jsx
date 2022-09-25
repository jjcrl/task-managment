const PrevItems = ({ prevItems }) => {
  const items = prevItems.slice(0, 6);

  return (
    <div className="h-fit w-full flex flex-col">
      <ul className="w-full text-left pl-6">
        {items.map((item, index) => (
          <li key={`item-${index}`} className="text-5xl inline p-2">
            {item.emoji}
          </li>
        ))}
      </ul>
      <ul className="w-fit h-fit mr-auto p-3">
        {items.map((item, index) => (
          <li
            key={`item-${index}`}
            className="text-sm text-stone-500 font-bold m-2 px-5  text-left w-full first-letter:text-2xl"
          >
            {`${item.emoji} ✅ ${item.input.slice(0, 35)}..`}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default PrevItems;

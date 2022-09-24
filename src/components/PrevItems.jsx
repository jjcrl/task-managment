const PrevItems = ({ prevItems }) => {
  const items = prevItems.slice(0, 6);
  return (
    <div className="h-fit w-full flex flex-col">
      <ul className="w-full text-left pl-6">
        {prevItems.map((item, index) => (
          <li key={`item-${index}`} className="text-5xl inline p-1">
            {item.emoji}
          </li>
        ))}
      </ul>
      <ul className="w-fit h-fit bg-yellow-100 mr-auto p-3">
        {items.map((item, index) => (
          <li
            key={`item-${index}`}
            className="text-xs text-yellow-600 font-bold m-2 py-1 px-5  text-left w-fit  first-letter:text-lg"
          >
            {`${item.emoji} ${item.input.slice(0, 35)}..`}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default PrevItems;

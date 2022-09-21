const PrevItems = ({ prevItems }) => {
  return (
    <div className="bg-neutral-900 h-full w-full flex flex-col overflow-hidden	truncate">
      <ul className="w-ful p-2 text-right inline truncate">
        {prevItems.map((item, index) => (
          <li
            key={`item-${index}`}
            className="text-3xl text-neutral-100 inline px-2 "
          >
            {item.emoji}
          </li>
        ))}
      </ul>
      <ul className="w-full h-14 py-2 truncate border-2 border-white overflow-hidden	">
        {prevItems.map((item, index) => (
          <li
            key={`item-${index}`}
            className="text-xl text-neutral-100 inline font-semibold px-1"
          >
            {item.input} {item.emoji}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default PrevItems;

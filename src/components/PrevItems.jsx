const PrevItems = ({ prevItems }) => {
  const items = prevItems.slice(0, 7);
  const emojis = prevItems.slice(0, 6);

  return (
    <div className="h-full w-full flex flex-col">
      <div className="flex flex-row">
        <div className="m-auto pl-3">
          <span
            className="bg-white pl-3 pr-3.5 py-3.5 text-3xl font-bold grid items-center border-2 border-neutral-500 text-neutral-600 shadow-md"
            id="rounded"
          >
            +{prevItems.length > 6 ? prevItems.length - 6 : prevItems.length}
          </span>
        </div>
        <ul className="w-full h-fit flex flex-row-reverse pr-3">
          {emojis.map((item, index) => (
            <li
              key={`emoji-${index}`}
              className="text-3xl inline bg-white h-16 w-16 grid items-center border-2 border-stone-500"
              id={`emoji-item-${index}`}
            >
              {item.emoji}
            </li>
          ))}
        </ul>
      </div>

      <ul className="w-fit h-full m-auto pt-3 mr-3">
        {items.map((item, index) => (
          <div
            className="flex felx-row m-2 gap-3"
            id={`prev-item-${index}`}
            key={`prev-item-${index}`}
          >
            <li
              className="bg-zinc-200 w-11 h-10 text-2xl grid items-center shadow-md rounded-lg"
              key={`emoji-item-${index}`}
            >
              ✅
            </li>
            <li
              key={`item-${index}`}
              className="p-1 text-lg text-stone-800 font-semibold text-left w-full bg-zinc-200 rounded-lg pl-4 pr-3 ml-0 shadow-md line-through"
              id="first-none-strike"
            >
              {item.input.length > 25
                ? `${item.emoji} ${item.input.slice(0, 25)}...`
                : `${item.emoji} ${item.input}`}
            </li>
          </div>
        ))}
      </ul>

      <style jsx>
        {`
          #emoji-item-0 {
            font-size: 2.5rem;
            width: 5rem;
            height: 5rem;
            z-index: 100;
            border-radius: 100%;
            box-shadow: rgba(99, 99, 99, 0.5) 0px 2px 8px 0px;
          }

          #emoji-item-1 {
            margin-right: -30px;
            z-index: 99;
            border-radius: 100%;
            opacity: 98%;
            box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
            filter: brightness(98%);
          }
          #emoji-item-2 {
            margin-right: -35px;
            z-index: 98;
            border-radius: 100%;
            opacity: 98%;
            box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
            filter: brightness(96%);
          }
          #emoji-item-3 {
            margin-right: -35px;
            z-index: 97;
            border-radius: 100%;
            opacity: 98%;
            box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
            filter: brightness(94%);
          }
          #emoji-item-4 {
            margin-right: -35px;
            z-index: 96;
            border-radius: 100%;
            opacity: 98%;
            box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
            filter: brightness(92%);
          }
          #emoji-item-5 {
            margin-right: -35px;
            z-index: 95;
            border-radius: 100%;
            opacity: 98%;
            box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
            filter: brightness(90%);
          }

          #prev-item-0 {
            opacity: 100%;
          }
          #prev-item-1 {
            opacity: 90%;
            filter: brightness(98%);
          }
          #prev-item-2 {
            opacity: 80%;
            filter: brightness(96%);
          }
          #prev-item-3 {
            opacity: 70%;
            filter: brightness(94%);
          }
          #prev-item-4 {
            opacity: 60%;
            filter: brightness(92%);
          }
          #prev-item-5 {
            opacity: 50%;
            filter: brightness(90%);
          }
          #prev-item-6 {
            opacity: 40%;
            filter: brightness(88%);
          }
        `}
      </style>
    </div>
  );
};
export default PrevItems;

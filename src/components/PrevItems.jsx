const PrevItems = ({ prevItems }) => {
  return (
    <ul className=" w-full h-full  flex flex-col">
      {prevItems.map((item, index) => (
        <div
          className="w-fit h-min mb-1 flex flex-col mx-auto py-2 px-2 my-2"
          key={index}
        >
          <li className="text-lg leading-none line-through text-2xl text-green-500">
            {item}
          </li>
        </div>
      ))}
    </ul>
  );
};

export default PrevItems;

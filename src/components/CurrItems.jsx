const CurrItems = ({ currItems, setCurrItems, setPrevItems }) => {
  const handleDone = (event, index) => {
    setPrevItems((prevItems) => [...prevItems, currItems[index]]);
    setCurrItems(currItems.filter((item) => item !== currItems[index]));
  };

  return (
    <ul className="w-full h-3/4  grid-cols-3 gap-4 p-4">
      {currItems.map((item, index) => (
        <div className="w-full h-min m-auto border-2 border-black">
          <li>{item}</li>
          <div className="flex flex-row gap-2 justify-end p-2">
            <button className="bg-red-800 w-5 h-5 "></button>
            <button
              className="bg-green-800 w-5 h-5"
              onClick={(event) => handleDone(event, index)}
            ></button>
          </div>
        </div>
      ))}
    </ul>
  );
};

export default CurrItems;

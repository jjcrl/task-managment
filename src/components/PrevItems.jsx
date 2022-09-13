const PrevItems = ({ prevItems }) => {
  return (
    <ul className=" w-full h-full mt-20 flex flex-col px-3">
      {prevItems.map((item) => (
        <div className="w-full h-min py-2 bg-blue-100 mb-3">
          <li>{item}</li>
          <span>WOOOO!!!</span>
        </div>
      ))}
    </ul>
  );
};

export default PrevItems;

const PrevItems = ({ prevItems }) => {
  return (
    <ul className=" w-full h-full mt-20 flex flex-col px-3">
      {prevItems.map((item, index) => (
        <div className="w-full h-min py-2 bg-blue-100 mb-3 flex" key={index}>
          <li>{item}</li>
          <span>emoji celebration</span>
          <u>date compelted</u>
        </div>
      ))}
    </ul>
  );
};

export default PrevItems;

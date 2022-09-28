const Navigation = ({ setView }) => {
  return (
    <nav className="w-min h-min flex flex-row bg-stone-200 justify-end gap-5 px-3 py-3 text-yellow-500 absolute right-10 bottom-10">
      <button
        onClick={() => {
          setView("today");
        }}
      >
        1
      </button>
      <button
        onClick={() => {
          setView("three-day");
        }}
      >
        3
      </button>
      <button
        onClick={() => {
          setView("week");
        }}
      >
        7
      </button>
    </nav>
  );
};

export default Navigation;

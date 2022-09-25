const Navigation = ({ setView }) => {
  return (
    <nav className="w-min h-min flex flex-row absolute right-10 bottom-10">
      <button
        onClick={() => {
          setView("today");
        }}
        className="bg-stone-400 rounded-l-2xl px-4"
      >
        one
      </button>
      <button
        onClick={() => {
          setView("three-day");
        }}
        className="bg-stone-400"
      >
        thr33
      </button>
      <button
        onClick={() => {
          setView("week");
        }}
        className="bg-stone-400 rounded-r-2xl px-4"
      >
        se7en
      </button>
    </nav>
  );
};

export default Navigation;

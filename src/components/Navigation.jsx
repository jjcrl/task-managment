const Navigation = ({ setView }) => {
  return (
    <nav className="bg-stone-200 px-3 py-3  absolute right-10 bottom-10 rounded-3xl">
      <button
        onClick={() => {
          setView("today");
        }}
        className="rounded-l-2xl"
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
        className="rounded-r-2xl"
      >
        7
      </button>
    </nav>
  );
};

export default Navigation;

const Navigation = ({ setView }) => {
  return (
    <nav className="bg-stone-800 px-6 py-3 absolute right-10 bottom-10 rounded-3xl shadow-md w-fit text-3xl text-stone-100 z-20">
      <button
        onClick={() => {
          setView("today");
        }}
        className="rounded-l-2xl p-2"
      >
        1.
      </button>
      <button
        onClick={() => {
          setView("three-day");
        }}
        className="p-2"
      >
        3.
      </button>
      <button
        onClick={() => {
          setView("week");
        }}
        className="rounded-r-2xl p-2"
      >
        7.
      </button>
    </nav>
  );
};

export default Navigation;

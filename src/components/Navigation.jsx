const Navigation = ({ setView }) => {
  return (
    <nav className="bg-zinc-800 px-6 py-3 absolute right-10 bottom-10 rounded-3xl shadow-xl z-20 flex gap-6 border-2 border-zinc-600">
      <button
        onClick={() => {
          setView("today");
        }}
        key="today-day-view"
      >
        <svg
          width="45"
          height="45"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {" "}
          <circle
            cx="24"
            cy="24"
            r="8"
            fill="none"
            stroke="white"
            strokeWidth="2.5"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <button
        onClick={() => {
          setView("three-day");
        }}
        key="three-day-view"
      >
        <svg
          width="45"
          height="45"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {" "}
          <circle
            cx="24"
            cy="12"
            r="5"
            fill="none"
            stroke="white"
            strokeWidth="2"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <circle
            cx="12"
            cy="34"
            r="5"
            fill="none"
            stroke="white"
            strokeWidth="2"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <circle
            cx="38"
            cy="34"
            r="5"
            fill="none"
            stroke="white"
            strokeWidth="2"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <button
        onClick={() => {
          setView("week");
        }}
        key="week-view"
      >
        <svg
          width="45"
          height="45"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M24 12C26.2091 12 28 10.2091 28 8C28 5.79086 26.2091 4 24 4C21.7909 4 20 5.79086 20 8C20 10.2091 21.7909 12 24 12Z"
            fill="none"
            stroke="white"
            strokeWidth="2"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M24 28C26.2091 28 28 26.2091 28 24C28 21.7909 26.2091 20 24 20C21.7909 20 20 21.7909 20 24C20 26.2091 21.7909 28 24 28Z"
            fill="none"
            stroke="white"
            strokeWidth="2"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M34.3926 18C35.4972 19.9132 37.9435 20.5687 39.8567 19.4641C41.7699 18.3595 42.4254 15.9132 41.3208 14C40.2162 12.0868 37.7699 11.4313 35.8567 12.5359C33.9435 13.6405 33.288 16.0868 34.3926 18Z"
            fill="none"
            stroke="white"
            strokeWidth="2"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M34.3926 30C33.288 31.9132 33.9435 34.3595 35.8567 35.4641C37.7699 36.5687 40.2162 35.9132 41.3208 34C42.4254 32.0868 41.7699 29.6405 39.8567 28.5359C37.9435 27.4313 35.4972 28.0868 34.3926 30Z"
            fill="none"
            stroke="white"
            strokeWidth="2"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M24 36C21.7909 36 20 37.7909 20 40C20 42.2091 21.7909 44 24 44C26.2091 44 28 42.2091 28 40C28 37.7909 26.2091 36 24 36Z"
            fill="none"
            stroke="white"
            strokeWidth="2"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.6079 30C12.5033 28.0868 10.057 27.4313 8.14379 28.5359C6.23062 29.6405 5.57512 32.0868 6.67969 34C7.78426 35.9132 10.2306 36.5687 12.1438 35.4641C14.057 34.3595 14.7125 31.9132 13.6079 30Z"
            fill="none"
            stroke="white"
            strokeWidth="2"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.6079 18C14.7125 16.0868 14.057 13.6405 12.1438 12.5359C10.2306 11.4313 7.78426 12.0868 6.67969 14C5.57512 15.9132 6.23062 18.3595 8.14379 19.4641C10.057 20.5687 12.5033 19.9132 13.6079 18Z"
            fill="none"
            stroke="white"
            strokeWidth="2"
          />
        </svg>
      </button>
    </nav>
  );
};

export default Navigation;

import { useState } from "react";

const TaskCard = ({ item, index, updateItem, removeItem }) => {
  const [toggleL, setToggleL] = useState(false);
  const [toggleR, setToggleR] = useState(false);

  const handleRHover = () => {
    setToggleR(true);
  };

  const handleRHoverLeave = () => {
    setToggleR(false);
  };

  const handleLHover = () => {
    setToggleL(true);
  };

  const handleLHoverLeave = () => {
    setToggleL(false);
  };

  const hoverItem = (
    <div className="flex flex-row opacity-95 bg-none ">
      <div
        className={
          toggleR
            ? "w-1/2 h-full absolute top-0 right-0  rounded-r-lg grid items-center bg-none opacity-1"
            : "w-1/2 h-full absolute top-0 right-0  rounded-r-lg grid items-center bg-none opacity-0"
        }
        onMouseEnter={handleRHover}
        onMouseLeave={handleRHoverLeave}
      >
        <button
          className="m-0 p-0 grid items-center"
          onClick={() => removeItem(index)}
        >
          <svg
            clip-rule="evenodd"
            fill-rule="evenodd"
            stroke-linejoin="round"
            stroke-miterlimit="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            width="60%"
            height="100%"
            className="m-auto"
            fill="red"
            transform=" scale(-1,1)"
          >
            <path d="M5.662 23l-5.369-5.365c-.195-.195-.293-.45-.293-.707 0-.256.098-.512.293-.707l14.929-14.928c.195-.194.451-.293.707-.293.255 0 .512.099.707.293l7.071 7.073c.196.195.293.451.293.708 0 .256-.097.511-.293.707l-11.216 11.219h5.514v2h-12.343zm3.657-2l-5.486-5.486-1.419 1.414 4.076 4.072h2.829zm.456-11.429l-4.528 4.528 5.658 5.659 4.527-4.53-5.657-5.657z" />
          </svg>
        </button>
      </div>
      <div
        onMouseEnter={handleLHover}
        onMouseLeave={handleLHoverLeave}
        className={
          toggleL
            ? "w-1/2 h-full absolute top-0 left-0  rounded-l-lg grid items-center bg-none opacity-1"
            : "w-1/2 h-full absolute top-0 left-0  rounded-l-lg grid items-center bg-none opacity-0"
        }
      >
        <button
          className="m-auto p-0 grid items-center"
          onClick={() => updateItem(index)}
        >
          <svg
            clip-rule="evenodd"
            fill-rule="evenodd"
            stroke-linejoin="round"
            stroke-miterlimit="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            width="75%"
            height="100%"
            className="m-auto"
            fill="green"
          >
            <path
              d="m10.978 14.999v3.251c0 .412-.335.75-.752.75-.188 0-.375-.071-.518-.206-1.775-1.685-4.945-4.692-6.396-6.069-.2-.189-.312-.452-.312-.725 0-.274.112-.536.312-.725 1.451-1.377 4.621-4.385 6.396-6.068.143-.136.33-.207.518-.207.417 0 .752.337.752.75v3.251h9.02c.531 0 1.002.47 1.002 1v3.998c0 .53-.471 1-1.002 1z"
              fill-rule="nonzero"
            />
          </svg>
        </button>
      </div>
    </div>
  );

  return (
    <div
      className={
        item.important
          ? "w-auto h-auto mb-4 bg-pink-100 break-inside-avoid relative pb-4 pt-2"
          : "w-auto h-auto mb-4 bg-neutral-50 break-inside-avoid relative pb-5 pt-2"
      }
      key={`item-${index}`}
    >
      {hoverItem}

      <li className="w-full text-left tracking-wider leading-none text-2xl text-black px-4 py-2 font-semibold first-letter:uppercase first-letter:italic">
        {item.input}
      </li>
    </div>
  );
};

export default TaskCard;

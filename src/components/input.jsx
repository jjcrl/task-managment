import { useState, useEffect } from "react";

const Input = ({ setCurrItems }) => {
  const [input, setInput] = useState();
  const [toggle, setToggle] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const addItem = () => {
    setCurrItems((currItems) => [
      ...currItems,
      { input: input, important: toggle },
    ]);
    setInput("");
  };

  const onEnterPress = (e) => {
    if (e.keyCode === 13) {
      addItem();
      handleSubmit();
    }
  };

  const handleChange = (e) => {
    setToggle(!toggle);
  };

  return (
    <>
      <div className="bg-green-100 py-3">
        <p>prompt</p>
      </div>
      <form onSubmit={handleSubmit}>
        <textarea
          onChange={(e) => setInput(e.target.value)}
          value={input}
          className="w-full h-40 text-4xl m-auto p-5 resize-none"
          placeholder="What do you have to do?"
          type="text"
          onKeyDown={onEnterPress}
        />{" "}
        <div className="flex flex-row absolute w-min left-96 top-36 pt-2 justify-end">
          <input
            type="checkbox"
            id="important"
            className="w-10 h-10"
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
      </form>
    </>
  );
};

export default Input;

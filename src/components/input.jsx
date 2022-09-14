import { useState, useEffect } from "react";

const Input = ({ setCurrItems }) => {
  const [input, setInput] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const addItem = () => {
    setCurrItems((currItems) => [...currItems, input]);
    setInput("");
  };

  const onEnterPress = (e) => {
    if (e.keyCode === 13) {
      addItem();
      handleSubmit();
    }
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
      </form>
    </>
  );
};

export default Input;

import { useState } from "react";

const Input = ({ setCurrItems }) => {
  const [input, setInput] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const addItem = () => {
    setCurrItems((currItems) => [...currItems, input]);
    setInput("");
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
          className="w-full h-max text-4xl m-auto p-2 resize-none"
          placeholder="What do you have to do?"
          type="text"
        />{" "}
        {/* <button
        className="w-full h-min text-6xl font-bold"
        onClick={addItem}
        type="submit"
      ></button> */}
      </form>
    </>
  );
};

export default Input;

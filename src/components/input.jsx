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
    <form onSubmit={handleSubmit} className="h-1/4">
      <textarea
        onChange={(e) => setInput(e.target.value)}
        value={input}
        className="w-full h-full border-2 border-black text-4xl m-auto p-2 resize-none"
        placeholder="What do you have to do?"
        type="text"
      />{" "}
      <button
        className="bg-gray-200 w-30 h-30 p-5"
        onClick={addItem}
        type="submit"
      >
        add
      </button>
    </form>
  );
};

export default Input;

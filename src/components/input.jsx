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
      <div className="bg-green-100">
        <p>prompt</p>
      </div>
      <textarea
        onChange={(e) => setInput(e.target.value)}
        value={input}
        className="w-full h-full text-4xl m-auto p-2 resize-none"
        placeholder="What do you have to do?"
        type="text"
      />{" "}
      <button
        className="w-30 h-30 p-5 absolute top-36 text-5xl font-bold left-1/4"
        onClick={addItem}
        type="submit"
      >
        ++
      </button>
    </form>
  );
};

export default Input;

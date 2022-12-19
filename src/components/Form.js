import React from "react";

export default function Form({ value, setValue, handleSubmit, inputRef }) {
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <form action="" onSubmit={handleSubmit} className="flex pt-2">
      <input
        type="text"
        name="value"
        className="w-full px-3 py-2 mr-4 text-gray-500 border rounded shadow"
        placeholder="Todo"
        ref={inputRef}
        value={value}
        onChange={handleChange}
      />
      <input
        type="submit"
        className="p-2 text-blue-400 border-2 border-blue-400 rounded hover:text-white hover:bg-blue-200"
      />
    </form>
  );
}

import React, { useState } from "react";

import { v4 as uuidv4 } from "uuid";

import "./todos.scss";

const Todos = () => {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([
    {
      id: uuidv4(),
      text: "learn react hooks",
      isCompleted: false,
    },
    {
      id: uuidv4(),
      text: "practice a lot ",
      isCompleted: false,
    },
    {
      id: uuidv4(),
      text: "then get a job",
      isCompleted: false,
    },
  ]);

  const addTodo = (e) => {
    console.log(todos);
    setTodos([...todos, { id: uuidv4(), text: value, isCompleted: false }]);
    setValue("");
  };

  const deleteItem = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
    console.log(todos);
  };

  return (
    <div className="Todos">
      <div className="Todos--input">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={addTodo}>Add</button>
      </div>

      <div className="Todos--list">
        {todos.map((todo) => (
          <div className="Todos--list--single-item" key={uuidv4()}>
            <h3>{todo.text}</h3>
            <button onClick={() => deleteItem(todo.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todos;

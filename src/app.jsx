import React, { useState, useEffect } from 'react';
import { Header } from './titre';
import { ButtonAdd } from './add';
import { List } from './list';

const LSKEY = "MyTodoApp";

function App() {
  const storedItems = JSON.parse(localStorage.getItem(LSKEY + ".todos"));
  const storedCheckboxState = JSON.parse(localStorage.getItem(LSKEY + ".checkboxState"));

  const [todos, setTodos] = useState(storedItems || []);
  const [checkboxState, setCheckboxState] = useState(storedCheckboxState || {});

  const handleAddTodo = (nouveauTodo) => {
    const todo = { text: nouveauTodo };
    setTodos([...todos, todo]);
    setCheckboxState({ ...checkboxState, [todos.length]: false });
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    const updatedCheckboxState = { ...checkboxState };
    delete updatedCheckboxState[index];
    setTodos(updatedTodos);
    setCheckboxState(updatedCheckboxState);
  };

  const handleCheckboxChange = (index, checked) => {
    setCheckboxState((prevState) => ({
      ...prevState,
      [index]: checked,
    }));
  };

  useEffect(() => {
    localStorage.setItem(LSKEY + ".todos", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    localStorage.setItem(LSKEY + ".checkboxState", JSON.stringify(checkboxState));
  }, [checkboxState]);

  return (
    <>
      <Header />
      <ButtonAdd parameterButtonAdd={handleAddTodo} />
      <List
        todos={todos}
        checkboxState={checkboxState}
        onCheckboxChange={handleCheckboxChange}
        onDeleteTodo={handleDeleteTodo}
      />
    </>
  );
}

export default App;

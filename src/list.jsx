export const List = ({ todos, checkboxState, onCheckboxChange, onDeleteTodo }) => {
    const handleCheckbox = (index, event) => {
      const checked = event.target.checked;
      onCheckboxChange && onCheckboxChange(index, checked);
    }
  
    const handleDelete = (index) => {
      onDeleteTodo && onDeleteTodo(index);
    }
  
    if (todos === null) {
      console.error("todos is null");
    }
  
    return (
      <div className="listDiv">
        <h3>Todos</h3>
        <ul className="ulist">
          {todos.map((todo, index) => (
            <li key={index}>
              <input
                type="checkbox"
                onChange={(event) => handleCheckbox(index, event)}
                checked={checkboxState[index] || false}
              />
              {todo.text}
              <button className="button" onClick={() => handleDelete(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
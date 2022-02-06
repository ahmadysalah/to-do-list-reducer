import React from 'react';
import './App.css';
import Card from './components/Card';
import { ToDoListConstants } from './constants';
import { initialState, reducers } from './reducers';


function App() {
  const [state, dispatch] = React.useReducer(reducers, [initialState]);

  const handleAddTodo = (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault();
    const text = (e.target as any).elements[0].value;
    if (text) dispatch({
      type: ToDoListConstants.ADD_TODO, payload: {
        text,
        date: new Date().toLocaleDateString(),
        completed: false
      }
    });
  }

  const handleClickDelete = (id: number) => {
    dispatch({ type: ToDoListConstants.DELETE_TODO, payload: id });
  }

  const handleEditTodo = (id: number, text: string) => {
    dispatch({ type: ToDoListConstants.EDIT_TODO, payload: { id, text } });
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo List</h1>
      </header>
      <div className='card'>

        <form onSubmit={handleAddTodo}>
          <h4>Add New To Do </h4>
          <input type="text" name="text" placeholder="Enter To Do" required className='input_text' />
          <button type="submit" className='add_btn'>Add</button>
        </form>
      </div>
      {state?.map((todo, index) => (
        <Card {...todo} key={index.toString()} handleClickDelete={handleClickDelete}
          handleEditTodo={handleEditTodo}
        />
      ))}
    </div>
  );
}

export default App;

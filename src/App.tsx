import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import TodoList from './components/TodoList';
import { ITodo } from './model';
import { DragDropContext } from 'react-beautiful-dnd'

const App: React.FC = () => {

  const [todos, setTodos] = useState<ITodo[]>([])
  const [completedTodos, setCompletedTodos] = useState<ITodo[]>([])
  const [todo, setTodo] = useState<string>('')

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault()

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, completed: false }])
      setTodo("")
    }
  }


  return (
    <DragDropContext onDragEnd={()=> {}}>
      <div className="App">
        <h2 className="header">Taskify</h2>
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
        <TodoList 
          todos={todos} 
          setTodos={setTodos}
          completedTodos={completedTodos}
          setCompletedTodos={setCompletedTodos} />
      </div>
    </DragDropContext>
  );
}

export default App;

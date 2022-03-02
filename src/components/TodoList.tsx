import React from 'react'
import { ITodo } from '../model'
import SingleTodo from './SingleTodo'
import './styles.css'
import { Droppable } from 'react-beautiful-dnd'

type Props = {
  todos: ITodo[];
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
  completedTodos: ITodo[];
  setCompletedTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
}

const TodoList = ({todos, setTodos}: Props) => {
  return (
    <div className='container'>
      <Droppable droppableId='active-task'>
        {
          (provided) => (
            <div className="todos" ref={provided.innerRef} {...provided.droppableProps}>
              <span className="todos__heading">Active Task</span>
              {todos.map(todo => (
                <SingleTodo key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />
              ))}
            </div>
          )
        }
      </Droppable>
      <Droppable droppableId='completed-task'>
        {
          (provided) => (
            <div className="todos remove" ref={provided.innerRef} {...provided.droppableProps}>
              <span className="todos__heading">Completed Task</span>
              {todos.map(todo => (
                <SingleTodo key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />
              ))}
            </div>
          )
        }
      </Droppable>

    </div>
  )
}

export default TodoList
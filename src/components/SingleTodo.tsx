import React, { useState } from 'react'
import { ITodo } from '../model'
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'
import { MdOutlineDone } from 'react-icons/md'
import './styles.css'

type Props = {
  todo: ITodo;
  todos: ITodo[];
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
}

const SingleTodo = ({todo, todos, setTodos}: Props) => {

  const [editMode, setEditMode] = useState<boolean>(false)
  const [todoText, setTodoText] = useState<string>(todo.todo)

  const handleDone = (id: number) => {
    const newTodos = [...todos]
    const index = newTodos.findIndex(t => t.id === id)
    newTodos[index].completed = !newTodos[index].completed
    setTodos(newTodos)
  }

  const handleDelete = (id: number) => {
    setTodos(todos.filter(t => t.id !== id))
  }

  const handleEdit = () => {
    if (!editMode && !todo.completed) {
      setEditMode(!editMode)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (todoText) {
      const newTodos = [...todos]
      const index = newTodos.findIndex(t => t.id === todo.id)
      newTodos[index].todo = todoText
      setTodos(newTodos)
      setEditMode(false)
    }
  }

  return (
    <form className='todo__single' onSubmit={e=>{handleSubmit(e)}}>
      {
        editMode ?
          <input 
            value={todoText}
            onChange={e => { setTodoText(e.target.value) }}
            className="todo__single--text" />
          : todo.completed ?
            <s className='todo__single--text'>{todo.todo}</s>
            : <span className='todo__single--text'>{todo.todo}</span>
      }
      <div>
        <span className="icon" onClick={handleEdit}>
          <AiFillEdit />
        </span>
        <span className="icon" onClick={e => handleDelete(todo.id)}>
          <AiFillDelete />
        </span>
        <span className="icon" onClick={e=> handleDone(todo.id)}>
          <MdOutlineDone />
        </span>
      </div>
    </form>
  )
}

export default SingleTodo
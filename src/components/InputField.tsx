import React, { useRef } from 'react'
import './styles.css'

type Props ={
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

function InputField({ todo, setTodo, handleAdd }: Props) {

  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <form className='input' onSubmit={e=>{
      handleAdd(e);
      inputRef.current?.blur()   
    }}>
      <input 
        ref={inputRef}
        type='text' 
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder='Add a task' 
        className='input__box' />
      <button className='input__submit' type='submit'>Go</button>
    </form>
  )
}

export default InputField
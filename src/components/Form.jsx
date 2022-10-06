import React, { useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';


const Form = ({ input, setInput, todos, setTodos, editTodo, setEditTodo }) => {

  const updateTodo = (title, id, completed) => {
    const newTodo = todos.map((todo) =>
      todo.id === id ? { title, id, completed } : todo
    )
    setTodos(newTodo)
    setEditTodo("")
  }

  const onFormSubmit = (e) => {
    e.preventDefault()
    if (!editTodo) {
      setTodos([...todos, { id: uuidv4(), title: input, completed: false }])
      setInput('')
    } else {
      updateTodo(input, editTodo.id, editTodo.completed)
    }
  }

  useEffect(() => {
    if (editTodo) {
      setInput(editTodo.title)
    } else {
      setInput("")
    }
  }, [setInput, editTodo])
  return (
    <div>
      <h3 className='add-item-btn'>ADD ITEM</h3>
      <form onSubmit={onFormSubmit}>
        <input type='text' className='task-input' value={input} onChange={(e) => setInput(e.target.value)} />
        <button type='submit' className='button-add'>{editTodo ? "Update" : "Add"}</button>
      </form>
    </div>
  )
}

export default Form
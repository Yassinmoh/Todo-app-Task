import React from 'react'

const Completed = ({ todos, setTodos, setEditTodo }) => {

    const completedTodos = todos.filter((todo) => {
        return todo.completed === true
    })

    console.log("Com todos", todos);
    const handleDelete = ({ id }) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    const handleComplete = (todo) => {
        setTodos(
            todos.map((item) => {
                if (item.id === todo.id) {
                    return { ...item, completed: !item.completed }
                }
                return item
            })
        )
    }

    const handleEdit = ({ id }) => {
        const specificTodo = todos.find((todo) => todo.id === id)
        setEditTodo(specificTodo)
    }
    return (
        <div>
            <h3 className='add-item-btn'>Completed</h3>
            {completedTodos.map((todo) => (
                <div className='todo-list-section'>
                    <li className='todo-list' key={todo.id}>
                        <input type="checkbox" name={todo.title} onClick={() => handleComplete(todo)} />
                        <label htmlFor={todo.title} className={`list-item-${todo.completed}` ? "completed" : ""}>{todo.title}</label>
                    </li>
                    <div className='actions-buttons' key={Math.random()}>
                        <button class="edit" onClick={() => handleEdit(todo)}>Edit</button>
                        <button class="delete" onClick={() => handleDelete(todo)}>Delete</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Completed
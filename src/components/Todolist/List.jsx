import React, { useState } from 'react'
import Form from './Form'

function List() {
    const [todolist, setToDo] = useState([]);
    const addToDo = (Todo) => {
        console.log(Todo);
        const toDosCopy = [...todolist]
        toDosCopy.push(Todo)
        setToDo(toDosCopy);
    }
    const markAsCompleted=(name)=>{
        const idx= todolist.findIndex( Todo=> Todo.name === name)
        const toDosCopy=[...todolist];
        toDosCopy[idx].completed=!toDosCopy[idx].completed;
        setToDo(toDosCopy);
    }
    return (
        <div>

            <div>
                {
                    todolist.map((Todo)=>{
                        return <p key={Todo.name} onClick={() =>markAsCompleted(Todo.name)}  className={Todo.completed ? "strike" :""}>{Todo.name}</p>
                    })
                }
            </div>
            <Form onAddToDoCallback={addToDo} />
        </div>
    )
}

export default List
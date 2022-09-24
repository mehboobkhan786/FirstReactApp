import React, { useState } from 'react'
import FormTable from './FormTable'
import './Display.css';

function Display() {
    const [todolist, setToDo] = useState([]);
    const addToDo = (Todo) => {
        console.log(Todo);
        const toDosCopy = [...todolist]
        toDosCopy.push(Todo)
        setToDo(toDosCopy);
    }
    return (
        <div>

            <div>
                {
                    todolist.map((Todo) => {
                        return (
                            <div>
                                <table>
                                    <tr>
                                        <th>Name</th>
                                        <th>USN</th>
                                        <th>Branch</th>
                                        <th>Sem</th>
                                        <th>Phone</th>
                                        <th>Mail</th>
                                    </tr>
                                    <tr>
                                        <td>{Todo.name}</td>
                                        <td>{Todo.usn}</td>
                                        <td>{Todo.branch}</td>
                                        <td>{Todo.sem}</td>
                                        <td>{Todo.phone}</td>
                                        <td>{Todo.email}</td>
                                    </tr>
                                    </table>
                            </div>
                        )

                    })
                }
            </div>
            <FormTable onAddToDoCallback={addToDo} />
        </div>
    )
}

export default Display
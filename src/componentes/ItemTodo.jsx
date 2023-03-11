import React from "react";
import { FaTrashAlt , FaRegEdit} from "react-icons/fa";

export default function ItemTodo({ todo, removeTodo,statusTodo }) {

    return (
        <ul className="lista">
            <li className='li'>

                <div className="icone">
                    <input className="icon1" id={`checkbox${todo.id}`} type={"checkbox"} onClick={() => statusTodo(todo.id)}/>
                    <label>{todo.text}</label>

                </div>

                <div className="icone">
                    {todo.status}
                    <FaRegEdit/>
                    <FaTrashAlt onClick={() => removeTodo(todo.id)} />
                </div>
            </li>
        </ul>
    )
}
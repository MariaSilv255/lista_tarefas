import React, { useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import EditTodo from "./EditTodo";


export default function ItemTodo({ todo, removeTodo, statusTodo, editarTodo }) {

    const [openDialog, setOpenDialog] = useState(false);

    const handClose = () => {
        setOpenDialog(!openDialog);
    }


    return (
        <>
            <EditTodo openDialog={openDialog} handClose={handClose} todo={todo} editarTodo={editarTodo} />
            <ul className="lista">
                <li className='li'>

                    <div className="icone" >
                        <input className="icon1" id={`checkbox${todo.id}`} type={"checkbox"} onClick={() => statusTodo(todo.id)} />
                        <label onClick={() => setOpenDialog(true)}>{todo.text}</label>

                    </div>

                    <div className="icone">
                            <FaEdit onClick={() => setOpenDialog(true)} />
                            <FaTrashAlt onClick={() => removeTodo(todo.id)} />
                   
                </div>
                </li>
            </ul>
        </>
    )
}
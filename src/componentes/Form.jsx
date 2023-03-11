import React, { useState } from "react";


export default function Form({ addTodo }) {

    const [text, setText] = useState(null);
    const [id, setId] = useState(0);

    const todoCreate = () => {
        
        const a = document.getElementById('input').value;

        if (a !== '') {

           const objTodo = { text: text,status:'Pendente', id: id }
            setId(id + 1)
            addTodo(objTodo);
            document.getElementById('input').value = null;
            
        }
    }

    return (
        <div className='form'>

            <input className='input' id='input' type="text" placeholder="Adicionar nova tarefa..." onChange={(textoInput) => setText(textoInput.target.value)} />

            <button className='botao' onClick={() => todoCreate(text)}>Adicionar</button>
            
            

        </div>
        
    );

}
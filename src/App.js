import React, { useState } from 'react';
import './componentes/App.css';
import { FaCheckSquare } from "react-icons/fa";
import Form from './componentes/Form';
import ItemTodo from './componentes/ItemTodo';


function App() {


    const localStorageItem = JSON.parse(localStorage.getItem('tarefa'));
    let tarefa = localStorage.getItem('tarefa') !== null ? localStorageItem : [];
    


    const [todos, setTodos] = useState(tarefa); //tarefa


    const updateLocalStorage = (itens) => {
        localStorage.setItem('tarefa', JSON.stringify(itens));
    }

    const addTodo = (todo) => {
        setTodos([...todos, todo]);
        updateLocalStorage([...todos, todo]);

    }

    const removeTodo = (id) => {
        //const indexId = todos.findIndex(todo => todo.id === id);
        //const remover = todos.splice(indexId,1);
        const filtro = todos.filter((todo) => todo.id !== id);
        setTodos(filtro);
        updateLocalStorage(filtro);


    }

    const editarTodo = (id, novoTexto) => {

        const todoArray = [...todos];
        for (var i in todoArray) {
            if (todoArray[i].id === id) {
                todoArray[i].text = novoTexto;
            }
        }
        setTodos(todoArray);
        updateLocalStorage(todos);
    }

    const statusTodo = (id) => {
        const todoArray = [...todos]

        const checkbox = document.getElementById(`checkbox${id}`);

        if (checkbox.checked) {
            for (var i in todoArray) {
                if (todoArray[i].id == id) {
                    todoArray[i].status = "Concluido";
                }
            }
            setTodos(todoArray);
        } else {
            for (var i in todoArray) {
                if (todoArray[i].id == id) {
                    todoArray[i].status = "Pendente";
                }
            }
            setTodos(todoArray);
        }
        updateLocalStorage(todoArray);
    }




    return (

        <div className='container'>
            <div>
                <header>
                    <h1 className='titulo'><FaCheckSquare /> MINHAS TAREFAS </h1>
                </header>

                <Form addTodo={addTodo} />

                {todos.map(todo =>
                    <div className='itens' key={todo.id}>
                        <ItemTodo todo={todo} removeTodo={removeTodo} statusTodo={statusTodo} editarTodo={editarTodo} />
                    </div>
                )}

            </div>
        </div>

    )
}
export default App;

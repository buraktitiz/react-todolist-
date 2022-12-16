import React, { useState } from 'react'
import Form from './Form/form';
import List from './List/list';
import Footer from './Footer/footer';


function Todo() {

    const [hide, setHide] = useState('all');

    const [todoList, setTodoList] = useState([
        
    ]);

    return (
        <div>
            <section className="todoapp">
                <Form setTodoList={setTodoList} todoList={todoList} />
                <List setTodoList={setTodoList} todoList={todoList} hide={hide} />
                <Footer setTodoList={setTodoList} todoList={todoList} hide={hide} setHide={setHide} />
            </section>
            
            <footer className="info">
                <p>Created by <a href="https://github.com/buraktitiz">Burak TİTİZ</a></p>
                <p>Link of <a href="https://www.linkedin.com/in/burak-titiz/">"LinkedIn"</a></p>
            </footer>

        </div>

    )
}

export default Todo
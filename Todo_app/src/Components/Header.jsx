import "./Header.css";
import todoicon from "../assets/todoicon.jpg";
import { useState } from "react";

function Header({ onAddTask }){
    function handleAdd(){
        const task = document.getElementById("inputTask");
        const value = task.value.trim();
        if(!value) return;
        onAddTask(value);
        task.value = '';
    }

    return(
        <>
        <header className="header">
            <img src={todoicon} className="icon"></img>
            <h1 className="heading">Things To-Do</h1>
        </header>
        <section className="addTask">
            <input type="text" className="textInput" id="inputTask" placeholder="Type to add a task..."></input>
            <button className="InputButton" onClick={handleAdd}>Add task</button>
        </section>
        </>
        
    );
}

export default Header;
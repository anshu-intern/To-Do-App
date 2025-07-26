import { useEffect, useState } from "react";
import Header from "./Components/Header";
import ToDoList from "./Components/ToDoList";
import "./App.css";


function App(){
  const [task,setTask] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("todo_list");
    const existingList = data ? JSON.parse(data) : [];

    if(existingList.length === 0) return;
    setTask(existingList);
  },[]);

  useEffect(() => {
    if (task.length === 0) return;
    localStorage.setItem("todo_list",JSON.stringify(task));
  },[task]);

  function addTask(value){
    const item = {
      todo: value,
      isDone: false
    }
        setTask([...task,item]);
        localStorage.setItem("todo_list",JSON.stringify(item));
        alert(`Task "${item.todo}" added successfully!`);
  }

  function markDone(item){
    const result = JSON.parse(localStorage.getItem("todo_list"))
                        .map((data,index) => index === item ? {...data,isDone:true} :data );
    setTask(result);
    localStorage.setItem("todo_list",JSON.stringify(result));
    alert(`Task ${task[item].todo} marked as done successfully!`);
  }

  function modifyTask(item){
    const newTask = prompt(`Do you want to modify task: "${task[item].todo}" ? Modify below...  `,task[item].todo);
    if (newTask === null) {return;}
    if (newTask.trim() === "") {
      alert("No modification done by user!");
      return;
    }
    const result = JSON.parse(localStorage.getItem("todo_list"))
                        .map((data,index) => index === item ? {...data,todo:newTask.trim()} :data );
    setTask(result);
    localStorage.setItem("todo_list",JSON.stringify(result));
    alert(`Task modified successfully!`);
  }

  function deleteTask(item){
    const ok = confirm(`Do you want to delete task: "${task[item].todo}" ?  `)
    if(ok){
      const result = JSON.parse(localStorage.getItem("todo_list")).filter((data,index) => index !== item)
      setTask(result);
      localStorage.setItem("todo_list",JSON.stringify(result));
      alert("Task deleted successfully!");
    }
  }
  
  return(
    <>
    <Header onAddTask={addTask} />
    <ToDoList tasks={task} onMarkDone={markDone} onModifyTask={modifyTask} onDeleteTask={deleteTask} />
    </>
  );

}

export default App;
import ToDoItem from "./ToDoItem";
import "./ToDoList.css";

function ToDoList({tasks,onMarkDone,onModifyTask,onDeleteTask }){

    return(
        <section className="todolist">
        {
            tasks.map((item,index) => {
                return(<ToDoItem key={index} id={index} number={index+1} task={item} onMarkDone={onMarkDone} onModifyTask={onModifyTask} onDeleteTask={onDeleteTask}/>)  
            })
        }
        </section>
    );
}

export default ToDoList;
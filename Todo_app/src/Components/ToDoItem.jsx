import "./ToDoItem.css";

function ToDoItem({id,number,task,onMarkDone,onModifyTask,onDeleteTask}){


    return(
        <>
        <article className={`list , ${task.isDone? "done":""}`}>
            <div className="listItem">
                <p>{`${number}. ${task.todo}`}</p>
            </div>

           <div className="listAction">
            <button className="Button" onClick={() => onMarkDone(id)}>{task.isDone === false ? "Mark as Done":"Task completed"}</button>
            <button className="Button" onClick={() => onModifyTask(id)}>Modify</button>
           <button className="Button" onClick={() => onDeleteTask(id)}>Delete</button>
           </div>

        </article>
        </>
    );
}
 
export default ToDoItem;
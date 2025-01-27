import { useState } from "react";
function ToDoList() {
    const[tasks, setTask] = useState([]);
    const[taskDate, setTaskDate] = useState(new Date().getDate())
    const[taskName, setTaskName] = useState("")
    const[taskType, setTaskType] = useState("")

    function taskAdd (){
        const newTask = {data: taskDate,
                        name: taskName,
                        type: taskType
        }
        setTask(task => [...task, newTask]);

        setTaskDate();
        setTaskName("");
        setTaskType("");
    }
    function taskInsertDate (event){
        setTaskDate(event.target.value)

    }
    function taskInsertName(event) {
setTaskName(event.target.value)
    }
    function taskInsertType(event){
        setTaskType(event.target.value)

    }
    function removeTask(index){
        setTask (task =>task.filter((el, i)=>i!==index))

    }

    return (
        <div>
<h1>Todo List Exercise</h1>
<input type="text" />
<ol>
    {tasks.map((x, index)=> <li key={index} onDoubleClick={()=>removeTask(index)} > {x.date}{x.name}{x.type}</li>)}
</ol>
<input type="number" value={taskDate} onChange={taskInsertDate} />
<input type="text" value={taskName} onChange={taskInsertName} />
<input type="text" value={taskType} onChange={taskInsertType} />

<button onClick={taskAdd}>Add Task</button>
        </div>
);
}
export default ToDoList;
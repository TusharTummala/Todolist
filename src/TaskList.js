
import React from 'react'
import {useContext} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; import {TaskContext} from '../contexts/TaskContext' 
function TaskList() {
let [tasks,setTasks]= useContext(TaskContext) 
const handleClear = ()=>{
setTasks([]) }
return ( <div>
<p className="lead fs-1 text-center bg-info text-dark">TASKS</p> {tasks.map((e,i)=><p className="lead" key={i}>{e.newTask}</p>)} <button className=" btn btn-danger"
onClick={handleClear}>clear</button> </div>
) }
export default TaskList
import React from 'react'
import {useContext} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; import {TaskContext} from '../contexts/TaskContext'; import {useForm} from 'react-hook-form';
function AddTasks() {
let [tasks,setTasks]= useContext(TaskContext) 
let {register,handleSubmit}=useForm(); function handleFormSubmit(task){
setTasks([...tasks,task]); }
return ( <div>
<p className="lead fs-1 text-center bg-info text-dark">NEW TASK</p> <form onSubmit={handleSubmit(handleFormSubmit)}>
<input type="text" id="t" className="form-control mb-4" placeholder="Enter a new task" {...register("newTask")}/>
<button type="submit" className="btn btn-success p-2 d-block mx-auto text-white">Add Task</button>
</form> </div>
) }
export default AddTasks
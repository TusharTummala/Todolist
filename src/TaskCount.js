
import React from 'react'
import {useContext} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; import {TaskContext} from '../contexts/TaskContext'; function TaskCount() {
let [tasks,setTasks]= useContext(TaskContext)
 return (
<div>
<p className="lead fs-1 text-center bg-info text-dark">TASKS COUNT</p> <p className="lead">{tasks.length}</p>
</div> )
}
export default TaskCount
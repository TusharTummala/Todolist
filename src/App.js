import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AddTasks from './components/AddTasks'; 
import TaskCount from './components/TaskCount'; 
import TaskList from './components/TaskList'; 
//import {TaskContext} from './contexts/TaskContext' function App() {
//let [tasks,setTasks]= useContext(TaskContext) 
return (
<div className="App">
<div className="row">
<div className="col-sm-4 border p-4"> <AddTasks/>
</div>
<div className="col-sm-4 border p-4">
<TaskCount/>
</div>
<div className="col-sm-4 border p-4">
<TaskList/> </div>
</div> </div>
); 
export default App;
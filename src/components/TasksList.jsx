import AddNewTask from './AddNewTask';
import Task from './Task';

const TasksList = ({ tasks, setTasks, newTask, setNewTask, setError }) => {
	let counter = 1;
	return (
		<div>
			<AddNewTask
				tasks={tasks}
				setTasks={setTasks}
				newTask={newTask}
				setNewTask={setNewTask}
				setError={setError}
			/>
			{tasks.map((task) => {
				return (
					<div className='tasksList'>
						<p>{counter++}. &nbsp;</p> 
						<Task key={task.id} task={task} setTasks={setTasks} />
					</div>
				);
			})}
		</div>
	);
};

export default TasksList;

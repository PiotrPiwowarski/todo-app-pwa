import Task from './Task';
import TaskDetails from './TaskDetails';

const TasksList = ({ tasks, setTasks }) => {
	const handleClickDetails = (clickedTask) => {
		const updatedTasks = tasks.map((task) =>
			task.id === clickedTask.id ? { ...task, showDetails: !task.showDetails } : task
		);
		setTasks(updatedTasks);
	};
	return (
		<div className='tasks-list'>
			{tasks.map((task) => {
				return (
					<button onClick={() => handleClickDetails(task)} key={task.id}>
						<div>
							{task.showDetails === true ? <TaskDetails task={task} /> : <Task task={task} />}
						</div>
					</button>
				);
			})}
		</div>
	);
};

export default TasksList;

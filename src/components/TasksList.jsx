import Task from './Task';
import TaskDetails from './TaskDetails';

const TasksList = ({ tasks, setTasks }) => {
	const handleClickDetails = (clickedTask) => {
		const updatedTasks = tasks.map((task) =>
			task.id === clickedTask.id
				? { ...task, showDetails: !task.showDetails }
				: task
		);
		setTasks(updatedTasks);
	};
	return (
		<div className='tasks-list'>
			{tasks.map((task) => {
				return (
					<div key={task.id}>
						{task.showDetails === true ? (
							<TaskDetails task={task} handleClickDetails={() => handleClickDetails(task)} />
						) : (
							<Task task={task} handleClickDetails={() => handleClickDetails(task)} />
						)}
					</div>
				);
			})}
		</div>
	);
};

export default TasksList;

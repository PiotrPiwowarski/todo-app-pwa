const Task = ({ task }) => {
	const handleTaskDetails = () => {};
	return (
		<div className='task'>
			<button onClick={handleTaskDetails}>
				<h3>{task.title}</h3>
			</button>
			<p>{task.priority}</p>
			<p>{task.deadline}</p>
			<div className='task-buttons'>
				<button className='button-active'>w trakcie</button>
				<button className='button-finished'>zrobione</button>
			</div>
		</div>
	);
};

export default Task;

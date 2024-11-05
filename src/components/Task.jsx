const Task = ({ task , handleClickDetails}) => {
	return (
		<div className='task'>
			<button onClick={handleClickDetails}>
				<h3>{task.title}</h3>
			</button>
			<p>{task.priority}</p>
			<p>{task.deadline}</p>
			<div className='task-buttons'>
				<button className='button-active'>w trakcie</button>
				<button className='button-finished'>zakończone</button>
			</div>
		</div>
	);
};

export default Task;

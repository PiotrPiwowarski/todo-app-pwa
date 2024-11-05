const TaskDetails = ({ task, handleClickDetails }) => {
	return (
		<div className='task'>
			<button onClick={handleClickDetails}>
				<h3>{task.title}</h3>
			</button>
			<p>Opis: {task.description}</p>
			<p>Priorytet: {task.priority}</p>
			<p>Status: {task.status}</p>
			<p>Lokalizacja: {task.location}</p>
			<p>Data utworzenia: {task.dateOfCreation}</p>
			<p>Data ukończenia: {task.deadline}</p>
			<div className='task-buttons'>
				<button className='button-active'>w trakcie</button>
				<button className='button-finished'>zrobione</button>
			</div>
		</div>
	);
};

export default TaskDetails;

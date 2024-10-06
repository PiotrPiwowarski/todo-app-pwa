
const AddNewTask = ({ tasks, setTasks, newTask, setNewTask, setError }) => {
	const handleAddTask = () => {
		if(newTask.length === 0) {
			 setError('Nie można dodać pustego zadania')
		} else {
			setError('');
			setTasks((prev) => [...prev, { id: tasks.length + 1, title: newTask }]);
			setNewTask('');
		}
	};

	return (
		<div>
			<input
				type='text'
				value={newTask}
				onChange={(e) => setNewTask(e.target.value)}
				placeholder='Dodaj zadanie'
			/>
			<button onClick={handleAddTask}>Dodaj zadanie</button>
		</div>
	);
};

export default AddNewTask;

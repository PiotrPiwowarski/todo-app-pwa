const AddTask = ({ addTaskAndFilterVisibility }) => {
	if (addTaskAndFilterVisibility.addTaskVisibility) {
		return (
			<div className='add-task'>
				<h2>NOWE ZADANIE</h2>
			</div>
		);
	} else {
		return null;
	}
};

export default AddTask;

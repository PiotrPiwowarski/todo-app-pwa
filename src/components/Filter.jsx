const Filter = ({ addTaskAndFilterVisibility }) => {
	if (addTaskAndFilterVisibility.filterVisibility) {
		return (
			<div className='filter'>
				<h2>FILTRUJ</h2>
			</div>
		);
	} else {
		return null;
	}
};

export default Filter;

import menu from '../images/menu.svg';
import addTask from '../images/addTask.svg';
import filter from '../images/filter.svg';

const MainMenu = ({ setAddTaskAndFilterVisibility }) => {
	const handleClickAddTask = () => {
		setAddTaskAndFilterVisibility((prev) => {
			if(prev.addTaskVisibility) {
				return { addTaskVisibility: false, filterVisibility: false };
			} else {
				return { addTaskVisibility: true, filterVisibility: false };
			}
		});
	};

	const handleClickFilter = () => {
		setAddTaskAndFilterVisibility((prev) => {
			if(prev.filterVisibility) {
				return { addTaskVisibility: false, filterVisibility: false };
			} else {
				return { addTaskVisibility: false, filterVisibility: true };
			}
		});
	};

	return (
		<div className='main-menu'>
			<button className='main-menu-button' onClick={handleClickAddTask}>
				<img src={addTask} alt='add task button' />
			</button>
			<button className='main-menu-button' onClick={handleClickFilter}>
				<img src={filter} alt='filter button' />
			</button>
			<button className='main-menu-button'>
				<img src={menu} alt='menu' />
			</button>
		</div>
	);
};

export default MainMenu;

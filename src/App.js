import AddTask from './components/AddTask';
import { useState } from 'react';
import AsideMenu from './components/Categories';
import Filter from './components/Filter';
import Header from './components/Header';
import TasksList from './components/TasksList';

function App() {
	const [tasks, setTasks] = useState([
		{
			id: 1,
			title: 'Zrobić backend',
			description: 'Zrób na jutro backend aplikacji klasdfjh lasdkjfh lksjadhf lkajsdhf laksjdhf lkajshd lkjafh lsdjkfh lkasdjhf lajkdhs lkajshd flkjahdl ',
			priority: 'low',
			status: 'new',
			location: 'London',
			dateOfCreation: '2024-10-15',
			deadline: '2024-12-11',
			showDetails: false
		},
		{
			id: 2,
			title: 'Zrobić frontend',
			description: 'Zrób na jutro frontend aplikacji',
			priority: 'medium',
			status: 'new',
			location: 'Budapest',
			dateOfCreation: '2024-09-17',
			deadline: '2025-01-07',
			showDetails: false
		},
	]);

	const [addTaskAndFilterVisibility, setAddTaskAndFilterVisibility] = useState({
		addTaskVisibility: false,
		filterVisibility: false,
	});

	const onTaskSubmit =(task) => {
		setTasks(prev => [...prev, task])
	}

	return (
		<div className='app'>
			<Header setAddTaskAndFilterVisibility={setAddTaskAndFilterVisibility} />
			<Filter addTaskAndFilterVisibility={addTaskAndFilterVisibility} />
			<AddTask addTaskAndFilterVisibility={addTaskAndFilterVisibility} onTaskSubmit={onTaskSubmit} />
			<AsideMenu />
			<TasksList tasks={tasks} setTasks={setTasks} />
		</div>
	);
}

export default App;

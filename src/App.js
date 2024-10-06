import TasksList from './components/TasksList';
import { useState } from 'react';
import Menu from './components/Menu';
import Header from './components/Header'

function App() {
	const [tasks, setTasks] = useState([]);
	const [newTask, setNewTask] = useState('');
	const [error, setError] = useState('');
  const [visible, setVisible] = useState('');

	return (
		<div className='app'>
			<Header setVisible={setVisible} />
			{error.length > 0 ? <p className='error'>{error}</p> : ''}
			<Menu visible={visible} />
			<TasksList
				tasks={tasks}
				setTasks={setTasks}
				newTask={newTask}
				setNewTask={setNewTask}
				setError={setError}
			/>
		</div>
	);
}

export default App;

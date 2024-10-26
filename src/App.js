import TasksList from './components/TasksList';
import { useState } from 'react';
import AsideMenu from './components/Categories';
import Header from './components/Header';

function App() {
	const [visible, setVisible] = useState(false);

	return (
		<div className='app'>
			<Header setVisible={setVisible} />
			<AsideMenu visible={visible} />
		</div>
	);
}

export default App;

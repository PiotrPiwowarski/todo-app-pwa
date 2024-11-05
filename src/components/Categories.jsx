import {useState} from 'react';

const Categories = () => {

	const [button, setButton] = useState('new');

	const handleClickNew = () => {
		setButton('new');
	}

	const handleClickActive = () => {
		setButton('active');
	}

	const handleClickFinished = () => {
		setButton('finished');
	}

	return (
		<div className='aside-menu'>
			<button onClick={handleClickNew} style={button === 'new' ? {textDecoration: 'underline'} : {}}>NOWE</button>
			<button onClick={handleClickActive} style={button === 'active' ? {textDecoration: 'underline'} : {}}>W TRAKCIE</button>
			<button onClick={handleClickFinished} style={button === 'finished' ? {textDecoration: 'underline'} : {}}>ZAKOŃCZONE</button>
		</div>
	);
};

export default Categories;

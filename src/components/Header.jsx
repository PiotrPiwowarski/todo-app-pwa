import MainMenu from './MainMenu';

const Header = ({ setAddTaskAndFilterVisibility }) => {

	return (
		<div className='header'>
			<h1 className='header-title'>PLANER</h1>
			<MainMenu setAddTaskAndFilterVisibility={setAddTaskAndFilterVisibility} />
		</div>
	);
};

export default Header;

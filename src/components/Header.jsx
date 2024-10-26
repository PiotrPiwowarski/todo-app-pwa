import MainMenu from './MainMenu';

const Header = ({ setVisible }) => {

	return (
		<div className='header'>
			<h1 className='header-title'>PLANER</h1>
			<MainMenu setVisible={setVisible} />
		</div>
	);
};

export default Header;

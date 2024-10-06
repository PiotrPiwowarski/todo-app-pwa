import menuButton from '../images/menuButton.svg';

const Header = ({ setVisible }) => {
	const handleMenuButton = () => {
		setVisible((prev) => !prev);
	};

	return (
		<div className='header'>
			<img className='menu-button' src={menuButton} alt='menu button' />
			<h1 className='app-title'>TODO APP</h1>
		</div>
	);
};

export default Header;

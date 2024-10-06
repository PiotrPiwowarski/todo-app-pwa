const Menu = ({visible}) => {
	return (
		<div className='menu-buttons'>
			<button>aktywne</button>
			<button>zakończone</button>
			<button>wysoki priorytet</button>
			<button>średni priorytet</button>
			<button>niski priorytet</button>
            <button>dodaj zadanie</button>
		</div>
	);
};

export default Menu;

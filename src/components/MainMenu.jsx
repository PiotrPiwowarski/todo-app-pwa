import menu from '../images/menu.svg';
import addTask from '../images/addTask.svg';
import filter from '../images/filter.svg';
import { useState } from 'react';

const MainMenu = ({setVisible}) => {

    return (
        <div className='main-menu'>
            <button className='main-menu-button'>
				<img src={addTask} alt='add task button' />
			</button>
            <button className='main-menu-button'>
				<img src={filter} alt='filter button' />
			</button>
			<button className='main-menu-button'>
				<img src={menu} alt="menu" />
			</button>
        </div>
    );
}

export default MainMenu;
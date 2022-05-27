import { ReactComponent as Dashboard} from '../Assets/Icons/Dashboard.svg';
import { ReactComponent as Orders} from '../Assets/Icons/Orders.svg';
import { ReactComponent as Account} from  '../Assets/Icons/Account.svg';
import { ReactComponent as Setting} from '../Assets/Icons/Setting.svg';
import { ReactComponent as Chat} from  '../Assets/Icons/Chat.svg';
import { ReactComponent as FAQ} from  '../Assets/Icons/FAQ.svg';

import { useState, useLayoutEffect } from 'react';
import SearchArea from './SearchArea';

function Navigation () {

	let [currentTheme, setCurrentTheme] = useState('');

	const setTheme = () => {
		let item = document.documentElement.style;
		let logo = document.querySelector('#logoImage');
		let names = ['--searchBackGroundColor', '--navigationBackGroundColor', '--mainBackGroundColor', '--headerBackGroundColor', '--logoBackGroundColor']
		if(currentTheme == 'Dark Mode'){
		    item.setProperty('--searchBackGroundColor', 'transparent');
		    item.setProperty('--navigationBackGroundColor', '#151718');
		    item.setProperty('--mainBackGroundColor', '#0D0C0F');
		    item.setProperty('--headerBackGroundColor', '#0D0C0F');
		    item.setProperty('--logoBackGroundColor', '#0D0C0F');
		    item.setProperty('--backGroundColor', '#1E1F23');
		    item.setProperty('--mainFontColor', '#ffffff');
		    item.setProperty('--borderColor', '#B5B7B9');
		    item.setProperty('--navigationColor', '#B5B7B9');
		    logo.src =  require('../Assets/Images/logoDarkMode.png');
		    
		}else {
			item.setProperty('--mainBackGroundColor', '#ffffff');
			item.setProperty('--headerBackGroundColor', '#2BEBC8');
			item.setProperty('--navigationBackGroundColor', '#ffffff');
			item.setProperty('--logoBackGroundColor', '#ECECEC');
			item.setProperty('--searchBackGroundColor', '#ECECEC');
			item.setProperty('--backGroundColor', '#F5F5F5')
			item.setProperty('--mainFontColor', '#000000');
			item.setProperty('--borderColor', '#ffffff');
			item.setProperty('--navigationColor', '#000000')
			logo.src =  require('../Assets/Images/logo.png');
		}

	}

	const chanceTheme = () => {
		if(currentTheme == 'Dark Mode'){
			localStorage.setItem("Theme", "Light Mode")
			setCurrentTheme("Light Mode")
			setTheme()
			
		}else {
			localStorage.setItem("Theme", "Dark Mode")
			setCurrentTheme("Dark Mode")
			setTheme()
		}
	}

	useLayoutEffect(() => {
		setCurrentTheme(localStorage.getItem("Theme"))
		setTheme()
	})

   
	return (
	<div className="navigation">
		<nav>
			<ul>
				<li><Dashboard/><a href="">Dashboard</a></li>
				<li><Orders/><a href="">Ordars</a></li>
				<li><Account/><a href="">Account</a></li>
				<li><Setting/><a href="">Setting</a></li>
			</ul>
			<div className="support">
				<h3>Support</h3>
				<ul>
					<li><Chat/> <a href="">Chat</a></li>
				    <li><FAQ/><a href="">FAQ</a></li>
				</ul>
			</div>
			<div className="darkModeButton">
			    <button onClick={chanceTheme}>{currentTheme}</button>
		    </div>
		</nav>
	</div>
	)
}

export default Navigation
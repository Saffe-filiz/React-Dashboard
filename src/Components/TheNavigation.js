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
		let gif = document.querySelector('#headerGif');
		let names = ['--searchBG', '--navBG', '--mainContentBG', '--headerBG', '--logoBG', '--bodyBG', '--mainFontColor', '--borderColor', '--navFontColor'];
		let darkThemeColors = ['transparent', '#151718', '#0D0C0F', '#0D0C0F', '#0D0C0F', '#1E1F23', '#ffffff', '#B5B7B9', '#B5B7B9'];
		let LightThemeColors = ['#ECECEC', '#ffffff', '#ffffff', '#2BEBC8', '#ECECEC', '#F5F5F5', '#000000', '#ffffff', '#000000'];
		
		if(currentTheme == 'Dark Mode'){
		    names.map( (name, index) => item.setProperty(name, darkThemeColors[index]))
		    logo.src =  require('../Assets/Images/logoDarkMode.png');
		    gif.src = require('../Assets/Images/headerGifDarkMode.gif');
		}else {
			names.map( (name, index) => item.setProperty(name, LightThemeColors[index]))
			logo.src =  require('../Assets/Images/logo.png');
			gif.src = require('../Assets/Images/headerGif.gif');
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
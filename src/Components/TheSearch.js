import logo from '../Assets/Images/logo.png'
import SearchArea from './SearchArea';
import TheUserCart from './TheUserCart';

import { useState } from 'react'



function Search () {

	const [ checkbox, setCheckbox] = useState(false)
	const [activeClass, setActiveClass] = useState('hamburger')

	const hamburgerAnimation = () => {
		let body = document.querySelector('body');
		let navigation = document.querySelector('.navigation');
		if(checkbox){
			setCheckbox(false)
			setActiveClass('hamburger')
			navigation.style.left = '-100%'
			body.style.overflow = 'auto'
		}else {
			setCheckbox(true)
			setActiveClass('hamburgerAvtive')
			navigation.style.left = '0%';
			body.style.overflow = 'hidden'
		}
	}
	return (
		<div className="search">
		    <div className="hamburgerMenu" onClick={hamburgerAnimation}>
		    	<div className={activeClass}></div>
		    </div>
			<div className="logo">
			    <div className="image">
				    <img id="logoImage" src={logo}/>
			    </div>
		    </div>
		    <div className="searchArea">
		        <SearchArea/>  
		        <TheUserCart/>
			</div>
		</div>
	);
}

export default Search
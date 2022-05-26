import logo from '../Assets/Images/logo.png'
import SearchArea from './SearchArea';
import TheUserCart from './TheUserCart';


function Search () {
	return (
		<div className="search">
		    <div className="hamburgerMenu">
			    <div className="hamburger"></div>
		    </div>
			<div className="logo">
			    <div className="image">
				    <img src={logo}/>
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
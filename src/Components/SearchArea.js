import SearchIcon from '../Assets/Icons/SearchIcon.svg';

function SearchArea () {
	return (
		<label htmlFor="search">
	        <div  className="searchInput">
	            <span className="searchIcon">
			        <img src={SearchIcon}/>
			    </span>
		        <input type="text" placeholder="Search" id="search"/>
		    </div>	
		</label>
	)
}

export default SearchArea
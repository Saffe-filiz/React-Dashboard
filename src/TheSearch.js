import './TheSearch.css'

function search () {
	return (
		<div className="search">
			<div className="searchInput">
			    <span className="searchIcon">O</span>
				<input type="text" placeholder="search"/>
			</div>
			<div className="userCart"></div>
		</div>
	);
}

export default search
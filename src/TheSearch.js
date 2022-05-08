import './TheSearch.css'

function search () {
	return (
		<div className="search">
			<div className="searchInput">
			    <span className="searchIcon">O</span>
				<input type="text" placeholder="search"/>
			</div>
			<div className="userContent">
				<span className="userCartNotificationsIcons">O</span>
				<div className="userCart">
					<span className="userCartUserName">Matt Appleyard</span>
				    <span className="userCartUserImage"></span>
				</div>
			</div>
		</div>
	);
}

export default search
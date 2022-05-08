import './TheSearch.css'
import userAvatar from './images/userAvatar.png'

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
				    <span className="userCartUserImage">
				    	<img src={userAvatar}/>
				    </span>
				</div>
			</div>
		</div>
	);
}

export default search
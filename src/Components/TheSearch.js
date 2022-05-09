import userAvatar from '../Assets/Images/userAvatar.png';
import SearchIcon from '../Assets/Icons/TheSearchIcon.svg';
import Notification from '../Assets/Icons/TheNotification.svg';


function Search () {
	return (
		<div className="search">
			<div className="searchInput">
			    <span className="searchIcon">
			    	<img src={SearchIcon}/>
			    </span>
				<input type="text" placeholder="search"/>
			</div>
			<div className="userContent">
				<span className="userCartNotificationsIcons">
					<img src={Notification}/>
				</span>
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

export default Search
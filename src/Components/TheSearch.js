import userAvatar from '../Assets/Images/userAvatar.png';
import SearchIcon from '../Assets/Icons/TheSearchIcon.svg';
import Notification from '../Assets/Icons/TheNotification.svg';
import logo from '../Assets/Images/logo.png'


function Search () {
	return (
		<div className="search">
			<div className="logo">
			    <div className="image">
				    <img src={logo}/>
			    </div>
		    </div>
		    <div className="searchArea">
			   <div className="searchInput">
			        <span className="searchIcon">
			    	    <img src={SearchIcon}/>
			        </span>
				    <input type="search" placeholder="Search"/>
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
		</div>
	);
}

export default Search
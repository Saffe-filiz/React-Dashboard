import UserAvatar from '../Assets/Images/userAvatar.png';
import logoDarkMode from '../Assets/Images/logoDarkMode.png'
import logo from '../Assets/Images/logo.png'
import Notification from '../Assets/Icons/Notification.svg';

function UserContent () {
	return (
		<div className="userContent">
			<span className="userCartNotificationsIcons">
				<img src={Notification}/>
			</span>
			<div className="userCart">
			    <span className="userCartUserName">Matt Appleyard</span>
				<span className="userCartUserImage">
				    <img src={UserAvatar}/>
				</span>
			</div>
	    </div>
	)
}

export default UserContent
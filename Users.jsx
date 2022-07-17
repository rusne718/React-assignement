import './UsersPage.css';
import Location from 'Location.js';


const UsersPage = ({ userData }) => {

    return (
        <div className="user" onClick="">
            <div className="user-title">
            {userData.name.first}
            {userData.name.last}
            </div>

            <div className="user-main">
                <Location location={userData.location} />http://localhost:3000
                <div className="user-image"><img src={userData.picture.medium} /></div>
                <button> Go to Profile</button>
            </div>
        </div>
    );
};

export default UsersPage;
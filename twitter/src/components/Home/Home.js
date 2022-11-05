
import './Home.css';
import HomeOption from '../HomeOption/HomeOption';
import LoginOption from '../LoginOption/LoginOption';

function Home(){
    return (
        <div className="homeContainer">
            <div className="leftContainer">
                <HomeOption />
            </div>
            <div className="centerContainer">Center</div>
            <div className="rightContainer">
                <LoginOption />
            </div>
        </div>
    )
}

export default Home;
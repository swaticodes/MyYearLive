import './App.css';
// import Button from '@mui/material/Button';
import Button from 'react-bootstrap/Button';
import AppStoreImg from "./AppStoreImg.svg";
import GooglePlayImg from "./GooglePlayImg.png";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <h>Welcome to MyYearLive</h>

        </p>
        <div>
          <Button href="URL" onClick={() => window.open("https://play.google.com/store/apps/details?id=com.myyearlive&hl=en_US&gl=US")}> 
            <img src={GooglePlayImg} alt="Download the app on Google Play" width="100" />
          </Button>
          <Button href="URL" onClick={() => window.open("https://apps.apple.com/us/app/myyearlive/id1582608654")}>
            <img src={AppStoreImg} alt="Download the app on the App Store" width="87" />
          </Button>

        </div>
      </header>
    </div>
  );
}

export default App;
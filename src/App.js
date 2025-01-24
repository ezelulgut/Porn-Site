import './App.css';
import NavigationBar from './components/NavigationBar';
import Intro from './components/Intro';
import Pictures from './components/Pictures.js';
import Pictures2 from './components/Pictures2.js';
import Videos from './components/Videos';
import Videos2 from './components/Videos2.js'
import "./style/LandingPage.css"

function App() {
  return (
    <div>
      <div className='myBg'>
      <NavigationBar />
      <Intro />
      </div>

      <div className='pictures'>
        <Pictures />
      </div>

      <div className='pictures2'>
        <Pictures2 />
      </div>

      <div className='videos'>
        <Videos />
      </div>
      <div className='videos2'>
        <Videos2 />
      </div>
    </div>
  );
}

export default App;

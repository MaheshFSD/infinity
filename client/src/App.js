import './App.css';
import VideoDetails from './components/Room/VideoDetails';
import VideoPlayer from './components/Room/VideoPlayer';
import Notifications from './components/Room/Notifications';

function App() {
  return (
    <div className="App">
       <Notifications />
      <VideoPlayer />
      <VideoDetails> </VideoDetails>
    </div>
  );
}

export default App;

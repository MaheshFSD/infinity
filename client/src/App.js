import './App.css';
import Sidebarr from './components/Room/Sidebarr';
import VideoPlayer from './components/Room/VideoPlayer';

function App() {
  return (
    <div className="App">
      <VideoPlayer />
      <Sidebarr />
    </div>
  );
}

export default App;

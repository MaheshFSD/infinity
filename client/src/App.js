import './App.css';
import VideoDetails from './components/Room/VideoDetails';
import VideoPlayer from './components/Room/VideoPlayer';

function App() {
  return (
    <div className="App">
      <VideoPlayer />
      <VideoDetails />
    </div>
  );
}

export default App;

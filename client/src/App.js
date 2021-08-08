import './App.css';
import VideoDetails from './components/Room/VideoDetails';
import VideoPlayer from './components/Room/VideoPlayer';
import { Routes } from './components/Routes';

function App() {
  return (
    <div className="App">
      <Routes />
      <VideoPlayer />
      <VideoDetails />
    </div>
  );
}

export default App;

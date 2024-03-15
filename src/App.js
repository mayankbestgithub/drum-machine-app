import { useSelector } from 'react-redux';
import './App.css';
import Audios from './Features/Audios/Audios';
import { audioTrack } from './Features/Audios/audiosSlice';


const DrumMachine = () => {
  return <div id="drum-machine">
    <h1>Drum Machine</h1>
    <Audios></Audios>
  </div>
}

const App = () => {
  const tracks = useSelector(audioTrack);
  const currentTrack = (tracks, text) => tracks.find(track => track.text === text);

  document.addEventListener('keyup', (e) => {
    const key = e.key.toUpperCase();
    let track = currentTrack(tracks, key);
    document.getElementById('display').innerHTML = '';

    switch (key) {
      case 'Q':
        document.getElementById('display').innerHTML = track.type;
        break;
      case 'W':
        document.getElementById('display').innerHTML = track.type;
        break;
      case 'E':
        document.getElementById('display').innerHTML = track.type;
        break;
      case 'A':
        document.getElementById('display').innerHTML = track.type;
        break;
      case 'S':
        document.getElementById('display').innerHTML = track.type;
        break;
      case 'D':
        document.getElementById('display').innerHTML = track.type;
        break;
      case 'Z':
        document.getElementById('display').innerHTML = track.type;
        break;
      case 'X':
        document.getElementById('display').innerHTML = track.type;
        break;
      case 'C':
        document.getElementById('display').innerHTML = track.type;
        break;
      default:
        alert("Sorry,invalid inputs found!!");
        document.getElementById('display').innerHTML = '';
        break;
    }
    if (document.getElementById('display').innerHTML !== '') {
      document.getElementById(track.text).play();
    }

  })

  return (<div className="App">``
    <DrumMachine></DrumMachine>
  </div>)
}

export default App;

import Audio from '../audio/Audio';
import { useSelector } from 'react-redux';
import './Audios.css';
import { audioTrack } from './audiosSlice';

const Audios = () => {
    const tracks = useSelector(audioTrack)
    const clickHandler = (track) => {
        document.getElementById('display').innerHTML = track.type;
    }
    return (
        <div id="drum-container">
            {
                tracks.map((track) => <Audio key={track.id} track={track} onaudioClick={() => clickHandler(track)} />)
            }
            <div id="display"></div>
        </div>
    )

}

export default Audios;